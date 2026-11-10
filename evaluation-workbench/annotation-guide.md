# Image Annotation and Review Guide

## Purpose

This guide standardizes how a reviewer inspects AI image-identification outputs, records object-level decisions, and documents image-level quality findings.

## 1. Before review

Record the image identifier, domain, source, original prompt or instruction when available, AI tool or model name, review date, and reviewer. Keep an unmodified copy of the source image.

## 2. Object review

For each model prediction:

1. Locate the visible object in the original image.
2. Compare the predicted class with the object visible in the image.
3. Inspect whether the bounding box covers the intended object without excessive background or clipping.
4. Check whether the same object has been predicted more than once.
5. Record the model confidence exactly as displayed, if available.
6. Set a review disposition and provide a short evidence note.

### Bounding-box guidance

- Draw the box around the visible extent of the object.
- Do not include unrelated neighboring objects unless the annotation rule defines a grouped object.
- Do not invent hidden object boundaries behind occlusions.
- For partially visible objects, annotate only the visible portion unless the project guideline says otherwise.
- Record ambiguous cases as uncertain instead of forcing a class decision.
- Keep coordinates tied to the original image dimensions.

## 3. Review dispositions

| Disposition | Use when |
|---|---|
| Accepted | The predicted label and localization are acceptable |
| Corrected label | The object is present but the predicted class is wrong |
| Poor localization | The class is acceptable but the bounding box is inadequate |
| Rejected false positive | The prediction does not correspond to a visible object |
| Duplicate prediction | A redundant prediction describes an already represented object |
| Missed object | A relevant visible object has no model prediction |
| Uncertain | There is not enough evidence for a reliable decision |

## 4. Image-quality review

Inspect the full image first, then zoom into relevant areas. Assess:

- Product or object visibility.
- Edge integrity and shape preservation.
- Sharpness and fine detail.
- Object separation and overlap.
- Text legibility when text matters to the task.
- Lighting, contrast, compression, and repeated patterns.
- Whether a visual concern affects the specific intended use.

A finding should include the region, what is visible, why it matters, severity, and recommended action.

## 5. Scoring

Use the following 1 to 5 scale for image-level criteria:

| Score | Meaning |
|---|---|
| 1 | Unusable for the stated task |
| 2 | Poor; substantial limitations |
| 3 | Usable with material caveats |
| 4 | Good; minor limitations |
| 5 | Very good for the stated task |

Score only criteria that apply. Record "not assessed" when there is insufficient evidence. Do not treat the average score as model accuracy.

## 6. Quality decisions

Choose one overall outcome:

- Accept for the stated visual review.
- Accept with caveats.
- Needs correction or additional review.
- Reject as unsuitable for the stated task.

Always explain the decision. The same image may be acceptable for broad object identification and unsuitable for small-text reading.

## 7. Reporting

Keep the following separate:

- AI model output and confidence.
- Human reviewer decision.
- Image-level quality findings.
- Corrections performed.
- Ground-truth metrics, if an appropriate reference dataset exists.

The reviewer must not claim model accuracy or label accuracy from confidence values or a qualitative image review alone.
