# PressPoint: project page

This repository holds the public project page for **PressPoint**, a capstone project from the College of Computer Studies, Laguna State Polytechnic University – Sta. Cruz Campus.

PressPoint is a cloud-based interactive kiosk system with real-time editorial content management for *The Gears*, the official student publication of LSPU – Sta. Cruz Campus. It is a touchscreen kiosk plus an editorial dashboard. It replaces carrying updates to the kiosk on flash drives with real-time publishing, and adds campus navigation, searchable archives and a 360° virtual tour.

- **Live system:** https://presspoint-gears.me
- **This page:** *add the GitHub Pages link once it's published*

## What this page is for

The page presents the study in one place, for the research panel, *The Gears* staff, students and anyone curious about the system. It covers:

- what PressPoint is and the problem it solves
- the research team and the partner organization
- the study's objectives, scope and limitations
- how the system was built and evaluated
- what the system does: the kiosk, the dashboards, the database and the tech stack
- the results: a **98.21%** black-box test passing rate (275 of 280 test instances) and overall acceptance means of **4.83 to 5.00** from **290** respondents
- the conclusion and recommendations
- links to the live system, demo video and manuscript

It's a showcase of the study, not the system itself. The PressPoint application lives in its own repository.

## What's in this repository

| File or folder | What it is |
|---|---|
| `index.html` | The page. GitHub Pages serves it at the site root. |
| `styles/` | The stylesheets, one folder per reusable component (navbar, buttons, footer, content blocks). |
| `assets/fonts/` | Self-hosted fonts and their licences. |
| `images/` | Screenshots and figures from the manuscript. |
| `CONTENT.md` | The content guide: every section's copy and figures, taken from the capstone manuscript. |
| `DESIGN.md` | The design specification: colours, type, components, accessibility and how the files are organized. |

The page is plain HTML and CSS with one small script for the menu. There's no build step and no framework.

## Viewing it locally

Open `index.html` in a browser. To serve it the way GitHub Pages does, run this from the repository folder and open http://localhost:8000:

```bash
python3 -m http.server 8000
```

## Publishing on GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick the main branch and the `/ (root)` folder, then save.
4. The page appears at `https://<username>.github.io/<repository>/` after a minute or two.

All paths in the page are relative, so it works under a project path without changes.

## Editing the page

- **Words and figures** come from `CONTENT.md`, and the manuscript is the source of truth. Don't change facts or figures on the page without changing them there first.
- **Look and layout** follow `DESIGN.md`. Section 9 explains the folders and class names. Section 10 lists the checks the page must pass.
- **Unfinished spots** are marked in `index.html` with comments starting `EDIT:`. Search for `EDIT:` to find every missing link, image and value, along with the markup to paste in.

## Status

The page is built but still waiting on some content:

- the demo video and manuscript links
- the screenshots and figures listed in the `CONTENT.md` assets checklist
- the Perceived Usefulness percentage in the results
- optional team photos

## Credits

- **Proponents:** John Paul B. Bajao, Justine Rheign D. Rebong and Lance Aeriel T. Sisante
- **Thesis adviser:** Gener F. Mosico, MSIT
- **Partner organization:** *The Gears* Publication, LSPU – Sta. Cruz Campus

Fonts: [Archivo Black](assets/fonts/LICENSES/ArchivoBlack-OFL.txt), [Space Grotesk](assets/fonts/LICENSES/SpaceGrotesk-OFL.txt) and [JetBrains Mono](assets/fonts/LICENSES/JetBrainsMono-OFL.txt), under the SIL Open Font License.

© 2026 Bajao, Rebong, Sisante
