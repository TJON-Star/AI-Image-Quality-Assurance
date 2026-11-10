import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { join, extname } from "node:path";
import vm from "node:vm";

const root = process.cwd();
const htmlPath = join(root, "evaluation-workbench", "index.html");
const html = await readFile(htmlPath, "utf8");

const scriptBlocks = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
assert.ok(scriptBlocks.length > 0, "Workbench must contain its application script.");
for (const [index, match] of scriptBlocks.entries()) {
  new vm.Script(match[1], { filename: `evaluation-workbench-inline-${index + 1}.js` });
}

const requiredIds = [
  "imageFile", "sessionFile", "importSession", "imageCanvas", "imageId",
  "domain", "toolName", "prompt", "objectConfidence", "modelXmin", "modelYmin",
  "modelXmax", "modelYmax", "recordsBody", "scoreVisibility", "scoreEdges",
  "scoreSharpness", "scoreSeparation", "scoreText", "exportJson", "exportCsv",
  "scoreInstruction", "scoreStructure", "scoreShape", "scorePatterns",
  "printReport", "reset"
];
for (const id of requiredIds) {
  assert.ok(html.includes(`id="${id}"`), `Missing required workbench control: ${id}`);
}

assert.ok(html.includes("normalizeImportedBox"), "Saved session import must validate stored image coordinates.");
assert.ok(html.includes("Loading another image will clear the current review records"), "Replacing an image must warn before clearing review records.");
const htmlLower = html.toLowerCase();
assert.ok(htmlLower.includes("does not run ai inference"), "Workbench must state that inference is performed separately.");
assert.ok(htmlLower.includes("acceptance rate among decisive model prediction reviews"), "Workbench must distinguish acceptance rate from accuracy.");

const session = JSON.parse(await readFile(join(root, "evaluation-workbench", "templates", "session-template.json"), "utf8"));
assert.equal(session.schemaVersion, "1.0");
assert.ok(Array.isArray(session.records));
assert.ok(session.assessment && typeof session.assessment === "object");

for (const csvName of ["image-review-register.csv", "object-review-register.csv"]) {
  const csv = await readFile(join(root, "evaluation-workbench", "templates", csvName), "utf8");
  const header = csv.split(/\r?\n/, 1)[0];
  assert.ok(header && header.includes("image_id"), `${csvName} must include an image identifier column.`);
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else files.push(fullPath);
  }
  return files;
}

const checkedExtensions = new Set([".md", ".html", ".json", ".csv", ".yml", ".yaml"]);
const textFiles = (await walk(root)).filter(path => checkedExtensions.has(extname(path).toLowerCase()));
for (const path of textFiles) {
  const content = await readFile(path, "utf8");
  const forbiddenPunctuation = String.fromCharCode(0x2014);
  assert.ok(!content.includes(forbiddenPunctuation), `Unexpected forbidden punctuation in ${path}`);
}

console.log("Workbench validation passed.");
console.log(`Validated inline JavaScript blocks: ${scriptBlocks.length}`);
console.log(`Validated required controls: ${requiredIds.length}`);
console.log("Validated JSON and CSV templates.");
console.log(`Checked documentation files for em dashes: ${textFiles.length}`);
