# Portfolio

Personal portfolio website for Junyoung Park (jaywapp). Available in Korean and English.

## Overview

A static HTML/CSS portfolio site with five sections:

- **Home** — introduction with photo grid
- **About** — personal info, education, and career timeline
- **Role** — chronological list of professional projects (2015–2021)
- **Projects** — university and side-project highlights
- **Contact** — links to email, Instagram, and Facebook

## Tech Stack

- Plain HTML5 + CSS3 (CSS Grid, keyframe animations)
- No build tools or dependencies — open directly in a browser

## Structure

```
Portfolio/
├── Home_kr.html        # Korean entry point
├── Home_eg.html        # English entry point
├── html/               # Inner pages (_kr and _eg variants)
│   ├── About_*.html
│   ├── Role_*.html
│   ├── Projects_*.html
│   ├── Contact_*.html
│   └── Template.html   # Base template
├── css/                # Stylesheets per page
├── image/              # Photos and social icons
└── README.md
```

## Setup

No installation required.

1. Clone the repository:
   ```bash
   git clone https://github.com/jaywapp/Portfolio.git
   cd Portfolio
   ```
2. Open `Home_kr.html` (Korean) or `Home_eg.html` (English) in any modern browser.

## Usage

Navigate between pages using the top navigation bar. Each page is a standalone HTML file; no server is needed.

## Contact

- Email: jaywapp16@gmail.com
- Instagram: [@jaywapp16](https://www.instagram.com/jaywapp16/)
- Facebook: [junyoungPark10](https://www.facebook.com/junyoungPark10)
