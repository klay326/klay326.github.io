# Resume - LaTeX Source

This folder contains the LaTeX source files for your resume.

## Files

- `0-main.tex` — Main resume document (includes all sections)
- `00-format.tex` — Styling and formatting definitions
- `1-header.tex` — Name, contact info, links
- `2-objective.tex` — Professional objective/summary
- `3-experience.tex` — Work experience
- `4-education.tex` — Education
- `5-skills.tex` — Technical skills
- `6-projects-hobbies.tex` — Projects and hobbies

## How to Update

1. **Edit any `.tex` file** in this folder
2. **Commit and push** to GitHub
3. **GitHub Actions automatically:**
   - Compiles your LaTeX
   - Generates `resume.pdf`
   - Commits the PDF to your repo

The PDF is then available for download on your website.

## Local Compilation

To compile locally (requires `pdflatex`):

```bash
cd "Klay Resume Latex"
pdflatex -interaction=nonstopmode 0-main.tex
```

This generates `0-main.pdf` in the current directory.

## Notes

- The workflow is triggered whenever files in this folder change
- The compiled PDF is automatically renamed to `resume.pdf` and placed at repo root
- Don't manually edit `resume.pdf` — it will be overwritten by the workflow
