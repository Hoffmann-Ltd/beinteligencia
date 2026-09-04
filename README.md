# BE Inteligência

Static landing page for **BE Inteligência** — a concept pitch to Beach Enclave for an
AI-first operating layer: a cross-referenced SOP library, live operational dashboards,
management enablement, and a personal agent for the CEO.

**Live:** https://beinteligencia.onrender.com

## Contents

| Path | What |
|------|------|
| `index.html` | The entire page — markup, styles, and scripts inline |
| `public/BE_Inteligencia_Deck.pdf` | Pitch deck (PDF) |
| `public/BE_Inteligencia_Deck.pptx` | Pitch deck (source) |
| `public/maya.png` | Deck imagery |

## Run locally

No build step, no dependencies. Serve the folder:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Deployment

Hosted on [Render](https://render.com) as a static site; pushes to `main` publish
automatically.
