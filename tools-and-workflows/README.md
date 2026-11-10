# Tools, Workflows, and Capabilities

This page explains how tools and skills fit into the portfolio. It distinguishes the platform stack identified in the repository from image-review activities demonstrated in the case studies.

## Portfolio capabilities

| Capability | Practical evidence to show | How it should be described |
|---|---|---|
| AI image identification | Model predictions and confidence values from Try AI | Operating an AI-powered image-identification workflow |
| Object detection | Model-produced boxes and labels | Reviewing object detections and their visual placement |
| Image classification | Predicted object or image classes | Reviewing whether labels match visible content |
| Annotation review | Original prediction and reviewer decision | Reviewing labels and localization |
| Visual quality inspection | Image and region-level findings | Assessing sharpness, edges, text, object separation, and artifacts |
| Edge-case handling | Examples involving blur, overlap, low light, and partial views | Inspecting difficult visual conditions |
| Quality reporting | Assessment matrix and exported review records | Documenting observations, decisions, and limitations |

## Platform technology

The current repository README identifies the portfolio platform as using:

- TanStack Start
- React
- TypeScript
- Tailwind CSS
- Lovable Cloud for the contact form and AI identification

These are the technologies named in the existing project documentation. Listing a platform technology does not, by itself, establish that the portfolio owner personally implemented every component.

## Tool-use evidence standard

For each tool shown in a case study, record:

1. Tool or model name.
2. Task performed.
3. Input used.
4. Output produced.
5. Human review or correction performed.
6. Evidence captured.
7. Known limitations.

## Suggested demonstrations

- Run a sample image through the Try AI identification interface.
- Capture the output exactly as returned, including confidence values.
- Review the prediction against the source image.
- Record acceptance, correction, rejection, or uncertainty.
- Use the evaluation workbench to document object-level and image-level findings.
- Export a report and explain the decision.

## Important distinctions

- Model confidence is a value reported by the model.
- Human acceptance rate is the proportion of evaluated model predictions accepted as-is under the stated review rules.
- Label accuracy requires comparison with reference labels.
- Precision, recall, and F1 require a defined evaluation dataset and matching predictions to ground truth.
- Annotation quality requires explicit annotation rules and review evidence.
