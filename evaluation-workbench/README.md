# AI Image Evaluation Workbench

A browser-based workspace for reviewing image-identification outputs and documenting visual quality findings.

## Open the workbench

Download the [workbench HTML file](https://raw.githubusercontent.com/TJON-Star/AI-Image-Quality-Assurance/main/evaluation-workbench/index.html) to your computer, then open the downloaded file in a modern browser. You can also download the repository and open `evaluation-workbench/index.html` locally.

GitHub's code viewer displays the HTML source. It does not run the workbench inside the repository page. The current prototype runs locally in your browser. It does not call an AI model, upload images, or send review data to a server.

## What it supports

- Load a local image for inspection.
- Draw reviewer boxes around visible objects or image regions, and compare them with AI-provided bounding-box coordinates when the model returns boxes.
- Record the model-predicted label and the label accepted by the reviewer.
- Record an individual model confidence value when it is available from the AI tool.
- Classify review outcomes such as accepted, incorrect label, poor localization, duplicate prediction, false positive, missed object, or uncertain.
- Record image-quality issues such as blur, edge artifacts, text legibility, compression, occlusion, and object separation.
- Rate image-level quality criteria on a 1 to 5 scale.
- Export the review session as JSON or CSV and print a summary.

## Review workflow

1. Load the source image.
2. Enter the image identifier, domain, AI tool or model name, and original instruction when available.
3. Run the image through the AI identification tool separately. The workbench does not run inference.
4. Inspect the AI output and draw a box for each object or region that needs a review record.
5. Record the predicted label, reviewed label, model confidence if supplied, disposition, and evidence note.
6. Add image-level quality findings. Attach a box when a finding relates to a specific region.
7. Complete the quality ratings and overall assessment.
8. Export the JSON record and CSV review register. Keep the source image separately with the exported records.

## Metrics and interpretation

The workbench reports counts of review decisions and an **acceptance rate among evaluated model predictions**. That rate means the proportion of reviewed predictions accepted as-is. It is not model accuracy, label accuracy, or a benchmark score.

Model confidence is recorded as a model output. It is not a measure of human reviewer accuracy.

Do not report accuracy, precision, recall, F1, inter-annotator agreement, or OCR accuracy unless you have the required reference labels, evaluation protocol, and calculations.

## Data handling

- Image processing occurs in the browser tab.
- The workbench does not upload selected images.
- Review data stays in the current browser session until exported.
- Exported JSON contains review metadata and coordinates, not the image itself.
- Store the exported JSON, CSV, and source image together in a controlled project folder.
- Do not use confidential, personal, or restricted images in a public repository without the necessary permission.

## Current limitations

- AI inference is performed separately in the relevant AI tool.
- The reviewer must enter model predictions and confidence values manually.
- Bounding boxes are drawn by the reviewer. The tool does not automatically generate annotations.
- No reference dataset or gold labels are included.
- The workbench does not calculate accuracy metrics.
- Session records are not automatically saved. Export your work before closing or refreshing the page.

## Suggested use

Use this as a practical review aid during the retail, Lagos traffic, wildlife, and produce case studies. Adapt the domain and defect categories as needed, but keep the distinction between model output, human review, and image-level quality findings.
