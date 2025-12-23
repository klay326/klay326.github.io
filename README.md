# Klay Adams - Personal Website

A clean, minimal personal website built with pure HTML and CSS. Features a hacker/terminal aesthetic with three theme options and an automated LaTeX resume compilation workflow.

**Live Site:** [klayadams.com](https://klayadams.com)

## Features

✨ **No Dependencies** — Pure HTML/CSS, no frameworks or build tools  
🎨 **Three Themes** — Terminal White, Matrix Green, Ember DEC  
📱 **Fully Responsive** — Works on desktop, tablet, and mobile  
⚡ **Live Development Server** — Hot reload on file changes  
📄 **Automated Resume** — LaTeX compiles to PDF via GitHub Actions  
🖤 **OLED Optimized** — Pure black background for power efficiency  
🔧 **Terminal Aesthetic** — CRT scanline effect and monospace fonts  

## Project Structure

```
.
├── index.html              # Home page
├── about.html              # About/Resume page
├── blog.html               # Blog posts
├── style.css               # Global styles (all themes in CSS variables)
├── script.js               # Theme switcher logic
├── favicon.svg             # Site icon
├── resume.pdf              # Compiled resume (auto-generated)
├── serve.py                # Local dev server
├── dev.sh                  # Dev server shortcut
├── Klay Resume Latex/      # LaTeX source files
│   ├── 0-main.tex         # Main resume document
│   ├── 00-format.tex      # Styling
│   ├── 1-header.tex       # Contact info
│   ├── 2-objective.tex    # Summary
│   ├── 3-experience.tex   # Work history
│   ├── 4-education.tex    # Education
│   ├── 5-skills.tex       # Skills
│   ├── 6-projects-hobbies.tex  # Projects
│   └── README.md           # LaTeX instructions
├── .github/workflows/      # GitHub Actions
│   └── compile-resume.yml  # Auto-compile LaTeX workflow
└── package.json            # Project metadata
```

## Getting Started

### Local Development

Start the development server:

```bash
python3 serve.py
```

Or use the shortcut:

```bash
./dev.sh
```

The site will open at `http://localhost:8000` with live reload on file changes.

### Editing Content

**Home Page** — Edit `index.html`  
**About & Resume** — Edit `about.html`  
**Blog** — Add articles to `blog.html`  
**Styling** — Edit `style.css` (uses CSS variables for themes)  

### Adding Blog Posts

Edit `blog.html` and add an article:

```html
<article class="blog-post" id="post-3">
    <h2><a href="#post-3">Your Post Title</a></h2>
    <p class="post-date">December 23, 2025</p>
    <p>Your post content here...</p>
</article>
```

## Resume Management

### Editing Your Resume

The resume is stored as LaTeX in `Klay Resume Latex/`:

1. **Edit any `.tex` file** in that folder
2. **Push to GitHub** — The workflow automatically:
   - Compiles your LaTeX
   - Generates `resume.pdf`
   - Commits it back to the repo
3. **Pull locally** to see the updated PDF

### Local LaTeX Compilation

If you have `pdflatex` installed:

```bash
cd "Klay Resume Latex"
pdflatex -interaction=nonstopmode 0-main.tex
```

See [LaTeX README](Klay Resume Latex/README.md) for more details.

## Themes

The site includes three terminal-inspired themes accessible via the dropdown in the navbar:

| Theme | Style | Colors |
|-------|-------|--------|
| **Terminal White** | Clean monospace on black | White text, pure black background |
| **Matrix Green** | Classic hacker aesthetic | Bright green text, black background |
| **Ember DEC** | Vintage DEC terminal | Orange/amber text, dark background |

Your theme preference is saved locally and persists across visits.

## Deployment

The site is deployed to GitHub Pages at [klayadams.com](https://klayadams.com).

**CNAME file** configures the custom domain.  
**GitHub Actions** automatically compiles your resume on each push.

To deploy: Simply push to `main` branch.

```bash
git add -A
git commit -m "Your changes"
git push origin main
```

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties (variables), flexbox, media queries
- **JavaScript** — Theme switching with localStorage
- **GitHub Actions** — LaTeX compilation automation
- **Python** — Local dev server (serve.py)

## File Size & Performance

- **HTML:** ~2.5 KB each
- **CSS:** ~12 KB
- **JavaScript:** ~3 KB
- **Total:** ~20 KB (before resume PDF)

Minimal, fast, and efficient.

## Customization

### Change Theme Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --bg-color: #000000;
    --text-color: #ffffff;
    --accent-color: #ffffff;
    /* ... more variables ... */
}
```

### Add a New Theme

1. Add theme object to `THEMES` in `script.js`
2. Add option to the `<select>` in HTML files
3. Define CSS variables for the theme

### Modify Resume Layout

Edit files in `Klay Resume Latex/` folder. See the [LaTeX README](Klay Resume Latex/README.md) for detailed instructions.

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License — See [LICENSE.txt](LICENSE.txt)

## Questions?

Have ideas for improvements? Feel free to open an issue or make a pull request!

---

**Last Updated:** December 23, 2025  
**Author:** Klay Adams  
**Contact:** [klayaa@me.com](mailto:klayaa@me.com)
