# The Archive

A production-structured, self-contained Three.js scrapbook intro with procedurally generated parchment, animated page curl, soft shadows, dust, volumetric shafts, depth of field, and GSAP camera choreography.

## Run locally

Install the project dependencies and start Vite:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. For deployment, run `npm run build` and serve the generated `dist` directory.

## Controls

- Select **Open the book** to begin.
- Use the arrow buttons, keyboard arrows, mouse wheel, or a horizontal drag/swipe.
- Reduced-motion preferences shorten transitions automatically.

## Structure

- `index.html` — accessible interface and import map
- `styles.css` — cinematic overlay, typography, responsive states
- `src/main.js` — Three.js scene, procedural textures, shaders, interaction, and GSAP timelines

Three.js and GSAP are bundled by Vite, so the production output has no runtime CDN dependency.
