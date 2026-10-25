# ThreadVault Presentation Defense app

Open `index.html` in any modern browser (double-click it). No server, build step, network or dependency is needed.

- `index.html`, `styles.css`, `app.js` — the app.
- `data.js` — the canonical JSON as a script (so it works from `file://`). Generated from `content/PRESENTATION_DEFENSE_SCRIPT.json`; after editing that file, run `python3 tools/build_data.py`.
- `issues.js` — separate app-authored flags about the JSON (shown under "JSON issues"; not canonical content).

Use: **←/→** slides, **D** definitions so far, **B** benchmark (optional), **Q** questions, **C** deck corrections, **R** reference & notebook, **I** JSON issues, **Esc/P** back to your slide, **?** help. The "Back to slide" button also returns you to your place. Links like `index.html#/slide/12` open a slide directly.
