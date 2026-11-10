# Image and Prediction Review Taxonomy

Use this taxonomy to make review records consistent. Select the narrowest category supported by the visible evidence. Do not infer the technical cause of a defect from appearance alone.

## A. Model prediction and annotation outcomes

| Code | Category | Meaning | Typical review action |
|---|---|---|---|
| PRED-01 | Correct prediction | The predicted class matches the visible object | Accept |
| PRED-02 | Incorrect class | The object is visible but the predicted class is wrong | Correct label |
| PRED-03 | False positive | The model reports an object that is not supported by the image | Reject prediction |
| PRED-04 | Missed object | A relevant visible object has no corresponding model prediction | Add reviewer region and record miss |
| PRED-05 | Poor localization | The box does not adequately cover the intended object | Correct or flag box |
| PRED-06 | Duplicate prediction | The same visible object is represented by redundant predictions | Flag duplicate |
| PRED-07 | Uncertain | Available visual evidence is insufficient for a reliable decision | Escalate or retain as uncertain |
| PRED-08 | Partial visibility | The object is partly outside the frame or obscured | Apply the project annotation rule |

## B. Image-level visual quality findings

| Code | Category | What to inspect |
|---|---|---|
| IMG-01 | Blur or softness | Focus, motion blur, and loss of detail |
| IMG-02 | Edge integrity | Jagged boundaries, halos, fringing, or broken contours |
| IMG-03 | Low contrast | Subject and background separation |
| IMG-04 | Low-light or exposure | Shadow detail, highlights, and visibility |
| IMG-05 | Compression artifacts | Blocking, ringing, or visible degradation |
| IMG-06 | Text legibility | Whether visible text can be read at the available resolution |
| IMG-07 | Object separation | Whether adjacent objects remain distinguishable |
| IMG-08 | Occlusion or overlap | Whether one object obscures another |
| IMG-09 | Repeated pattern | Unusual repetition that warrants closer examination |
| IMG-10 | Shape or geometry | Distorted or inconsistent object structure |
| IMG-11 | Color or texture | Unnatural color, texture, or surface transitions |
| IMG-12 | Other | A clearly described issue not covered above |

## C. Severity

| Severity | Definition |
|---|---|
| Critical | The issue prevents the image or relevant output from being used for the stated task |
| Major | The issue materially affects identification or review and needs correction or escalation |
| Minor | The issue is visible but does not prevent the stated task |
| Observation | A point worth recording, not yet established as a defect |

Severity is task-dependent. A small text issue may be major for OCR and minor for general shelf inspection.

## D. Evidence rules

- Record what is visible before proposing a cause.
- Use "possible artifact" or "requires further inspection" when the evidence is inconclusive.
- Separate model prediction errors from image-quality problems.
- Record the exact region or object when possible.
- Preserve the original model output alongside any corrected reviewer label.
- Do not treat visual similarity as proof of duplicated generation.
- Do not convert model confidence into a human accuracy score.
