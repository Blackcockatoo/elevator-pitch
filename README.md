# elevator-pitch

Jewble Elevator Pitch is a single-page React experience that plays through a cinematic investor pitch one floor at a time.

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build production assets:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Deployment (Netlify)

This repo is configured for Netlify with `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- SPA fallback redirect: `/* -> /index.html` (HTTP 200)

### One-click deploy

1. Push this repo to GitHub.
2. In Netlify, click **Add new site** → **Import an existing project**.
3. Select your GitHub repo and deploy. Netlify will use the checked-in `netlify.toml` settings automatically.

### Manual deploy (Netlify CLI)

1. Build locally:

```bash
npm run build
```

2. Deploy prebuilt files:

```bash
npx netlify deploy --prod --dir=dist
```

## Node version pin

- `.nvmrc` pins Node to `20.11.0` for consistent local + CI builds.
- `package.json` also declares `engines.node >=20.11.0`.
