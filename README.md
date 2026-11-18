# AI Image Identification & Quality Assurance

A practical portfolio showcasing image identification, computer-vision review and image-quality assurance across retail, urban traffic, wildlife and produce imagery.

<p align="center">
  <a href="https://tjohnson-tech.lovable.app/">
    <img src="https://tjohnson-tech.lovable.app/__l5e/assets-v1/edd27177-c089-4091-a6ec-fea346eba024/portfolio-home.jpg" alt="Tjohnson Tech portfolio homepage" width="100%">
  </a>
</p>

<p align="center">
  <strong><a href="https://tjohnson-tech.lovable.app/">Open the live portfolio</a></strong>
  &nbsp; · &nbsp;
  <strong><a href="https://tjohnson-tech.lovable.app/identify">Try AI image identification</a></strong>
  &nbsp; · &nbsp;
  <strong><a href="https://github.com/TJON-Star/AI-Image-Quality-Assurance">View source on GitHub</a></strong>
</p>

## Portfolio overview

The live application presents practical examples of image identification and review. The work covers object detection, image classification, visual inspection, annotation and label review, edge-case handling, and structured quality reporting.

### Project gallery

<p align="center">
  <img src="https://tjohnson-tech.lovable.app/__l5e/assets-v1/ad367a43-f6d2-437c-ae6f-df2b6a028096/portfolio-projects.jpg" alt="Portfolio projects gallery" width="100%">
</p>

The project examples cover:

- Urban street object detection
- Retail shelf product recognition
- Wildlife camera-trap identification
- Produce defect detection

### Try AI: image identification

<p align="center">
  <img src="https://tjohnson-tech.lovable.app/__l5e/assets-v1/5c9af317-ed10-4ed7-a42b-508337bacc99/portfolio-try-ai.jpg" alt="AI image identification interface" width="100%">
</p>

Upload an image in the live application to see the AI identification experience. Model predictions should be treated as outputs to review, not as independently verified ground truth.

**[Open the AI image identification demo](https://tjohnson-tech.lovable.app/identify)**

## Evaluation workbench

**[Open the AI Image Evaluation Workbench](https://tjon-star.github.io/AI-Image-Quality-Assurance/evaluation-workbench/)**

The standalone browser-based workbench supports:

- Loading a local image and marking object regions
- Recording model-predicted and reviewer-assessed labels
- Comparing AI-provided and reviewer-drawn bounding boxes
- Recording prediction decisions and visual-quality findings
- Rating image-level quality criteria
- Exporting review records as JSON or CSV

The workbench does not run AI inference. Predictions and confidence values must be copied from the selected AI tool. Review data remains in the browser until exported. The exported JSON does not embed the source image.

Supporting documentation:

- [Workbench instructions](evaluation-workbench/README.md)
- [Defect taxonomy](evaluation-workbench/defect-taxonomy.md)
- [Annotation and review guide](evaluation-workbench/annotation-guide.md)
- [Assessment report template](reports/assessment-report-template.md)

## Case studies

- [Retail Product Image Quality and Visual Inspection](case-studies/retail-product-image-quality-assessment/README.md)
- [Lagos Traffic Scene Visual Assessment](case-studies/lagos-traffic-scene-visual-assessment/README.md)
- [Case Studies Index](case-studies/README.md)

## Methods and capabilities

- Image classification
- Object detection and bounding-box review
- Label quality assessment
- Annotation and guideline review
- Edge-case handling, including blur, low light, overlap and partial visibility
- Structured findings and reporting

## About and contact

This repository documents portfolio projects and simulated/practice work. It does not represent client engagements unless explicitly identified as such.

For image-identification or dataset-QA enquiries, use the [contact page](https://tjohnson-tech.lovable.app/contact) or email **Taiwojohnson1989@gmail.com**.

## Technology

The live portfolio is built with TanStack Start, React, TypeScript and Tailwind CSS, with Lovable Cloud powering the contact form and AI identification experience.

---

**Live portfolio:** [tjohnson-tech.lovable.app](https://tjohnson-tech.lovable.app/)
