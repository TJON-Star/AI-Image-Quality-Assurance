# AI Image Identification & Quality Assurance

Hands-on portfolio showcasing practical use of AI image-identification and computer-vision tools across retail, urban traffic, wildlife and produce imagery. Focus areas include object detection, image classification, visual inspection, annotation and label review, edge-case analysis, and structured quality reporting.

### 👉 Live portfolio: **[pixel-clue-gallery.lovable.app](https://pixel-clue-gallery.lovable.app)**

[![Home page of the portfolio](https://pixel-clue-gallery.lovable.app/__l5e/assets-v1/edd27177-c089-4091-a6ec-fea346eba024/portfolio-home.jpg)](https://pixel-clue-gallery.lovable.app)

---

## Projects

Case studies in urban street object detection, retail shelf product recognition, wildlife camera-trap identification and produce defect detection: each shown with the bounding boxes and labels I reviewed.

[![Projects page with annotated case studies](https://pixel-clue-gallery.lovable.app/__l5e/assets-v1/ad367a43-f6d2-437c-ae6f-df2b6a028096/portfolio-projects.jpg)](https://pixel-clue-gallery.lovable.app/projects)

## Try AI: live demo

Upload any photo and an AI model identifies the objects in it and draws a labelled box around each one. Below, it found a giraffe, two zebras and three trees in a wildlife photo.

[![Try AI demo detecting a giraffe and zebras](https://pixel-clue-gallery.lovable.app/__l5e/assets-v1/5c9af317-ed10-4ed7-a42b-508337bacc99/portfolio-try-ai.jpg)](https://pixel-clue-gallery.lovable.app/identify)

**[Try it yourself →](https://pixel-clue-gallery.lovable.app/identify)**

## About

My background and skills:

- Image classification
- Object detection (bounding boxes)
- Label quality review
- Guideline writing
- Edge-case handling (blur, low light, overlap, partial views)
- Reporting

[![About page](https://pixel-clue-gallery.lovable.app/__l5e/assets-v1/c06c4ced-1a48-4430-9faf-ea1dee8b2108/portfolio-about.jpg)](https://pixel-clue-gallery.lovable.app/about)

## Contact

Have an image identification or dataset QA project? Send me a message through the portfolio or email **Taiwojohnson1989@gmail.com**.

[![Contact form](https://pixel-clue-gallery.lovable.app/__l5e/assets-v1/b08ad7be-2ceb-49b6-9729-feab5e595b57/portfolio-contact.jpg)](https://pixel-clue-gallery.lovable.app/contact)

---

Built with TanStack Start, React, TypeScript and Tailwind CSS, with Lovable Cloud powering the contact form and AI identification.

## Case study documentation

The repository now includes dedicated written case studies for domain-specific visual assessment.

- [Retail Product Image Quality and Visual Inspection](case-studies/retail-product-image-quality-assessment/README.md): comprehensive retail image quality review and assessment criteria.
- [Case Studies Index](case-studies/README.md): overview of the retail and urban traffic assessment tracks.
- [Lagos Traffic Scene Visual Assessment](case-studies/lagos-traffic-scene-visual-assessment/README.md): separate urban traffic image review.

## Evaluation workbench

**[Open the AI Image Evaluation Workbench](https://tjon-star.github.io/AI-Image-Quality-Assurance/evaluation-workbench/)** in a modern browser. It loads as a normal web page: load a local image, mark object regions, compare AI-provided and reviewer-drawn boxes, record prediction decisions, log visual quality findings, rate image-level criteria, and export JSON or CSV review records. Your review is saved in your own browser as you work, so you can close the tab and pick up where you left off, and each image keeps its own separate review.

The workbench does not run AI inference. Predictions and confidence values must be copied from the selected AI tool. Review data remains in the browser until exported. Saved JSON sessions can be imported later after reloading the same source image. Nine optional quality ratings cover visibility, edge integrity, sharpness, object separation, text legibility, instruction adherence, structure and alignment, shape integrity, and pattern consistency.

A downloadable copy of the page is also available: [evaluation-workbench/index.html](https://raw.githubusercontent.com/TJON-Star/AI-Image-Quality-Assurance/main/evaluation-workbench/index.html). Save it and open the saved file in a browser. Opening that address directly shows the page source as text instead of running it.

- [Workbench instructions](evaluation-workbench/README.md)
- [Defect taxonomy](evaluation-workbench/defect-taxonomy.md)
- [Annotation and review guide](evaluation-workbench/annotation-guide.md)
- [Tools and capabilities](tools-and-workflows/README.md)
- [Assessment report template](reports/assessment-report-template.md)

## Automated workbench checks

A GitHub Actions workflow validates the workbench's inline JavaScript syntax, required interface controls, JSON and CSV templates, and the repository's no-em-dash documentation style when relevant files change. These are static checks. They do not replace manual browser testing or verify AI model performance.

- [Validation script](scripts/validate-workbench.mjs)
- [GitHub Actions workflow](.github/workflows/validate-workbench.yml)
