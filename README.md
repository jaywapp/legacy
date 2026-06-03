# web.site

Jaywapp's personal portfolio website — a static, vanilla JavaScript site with no build step.

## Pages

| File | Description |
|------|-------------|
| `home.html` | Landing page with a photo grid |
| `about.html` | Intro, education, and work experience sections |
| `experience.html` | Work experience detail |
| `portfolio.html` | Project portfolio |
| `contact.html` | Contact information |

## Structure

```
web.site/
├── data/               # JSON data files (edu, experience, intro)
├── image/              # Photo assets
├── about_edu.js        # Renders education timeline from data/edu.json
├── about_experience.js # Renders experience timeline from data/experience.json
├── about_intro.js      # Renders intro section from data/intro.json
├── home.js             # Renders photo grid on home page
├── nav.js              # Builds navigation bar (shared across all pages)
├── styles.css          # Global styles
└── *.html              # Page entry points
```

## Running locally

Open any `.html` file through a local HTTP server (required for XHR data loading):

```bash
npx serve .
# or
python -m http.server 8080
```

Directly opening HTML files via `file://` will cause XHR requests to fail due to CORS restrictions.
