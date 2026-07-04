# Denes Construction Website

Marketing website for **Denes Construction** — a family-owned construction company
founded by Alex Denes, serving Montross VA, Stafford VA, and Fredericksburg VA.

**Live URL (after deploy):** https://marinanicolai.github.io/denes-construction/

---

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (custom navy + orange palette)
- **Formspree** for contact form (no backend required)
- **GitHub Actions** → **GitHub Pages** for CI/CD deployment

---

## Run Locally

```bash
npm install
npm run dev
# → http://localhost:5173/denes-construction/
```

---

## Connect the Contact Form (Formspree)

1. Sign up at [formspree.io](https://formspree.io) (free tier works)
2. Create a **New Form**, set notification email to `denesconstruction@gmail.com`
3. Copy your form ID (e.g. `xpwzrqvl`)
4. Open `src/components/Contact.jsx` line 5 and replace:

```js
const FORMSPREE_ID = 'YOUR_FORMSPREE_FORM_ID'
// → e.g.:
const FORMSPREE_ID = 'xpwzrqvl'
```

5. Push to main — form submissions will go straight to `denesconstruction@gmail.com`.

---

## Deploy to GitHub Pages

```bash
# Create the repo and push (first time only)
gh repo create denes-construction --public --source=. --remote=origin --push
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) runs on every push to `main`,
builds the site, and deploys it to the `gh-pages` branch automatically.

**Enable Pages in repo settings (one time):**
GitHub repo → Settings → Pages → Source: **Deploy from a branch** → Branch: `gh-pages` / `root`

Every subsequent `git push origin main` redeploys automatically — no manual steps.

---

## Custom Domain (Optional)

To serve from `www.denesconstruction.com`:

1. In `vite.config.js` change `base: '/denes-construction/'` to `base: '/'`
2. Create `public/CNAME` containing: `www.denesconstruction.com`
3. In `.github/workflows/deploy.yml` uncomment the `cname:` line
4. Add a DNS `CNAME` record: `www` → `marinanicolai.github.io`
5. Set the custom domain in GitHub repo → Settings → Pages

---

## Contact Info

| Field  | Value |
|--------|-------|
| Owner  | Alex Denes |
| Phone  | (540) 295-1060 — `tel:+15402951060` |
| Email  | denesconstruction@gmail.com |
| Area   | Montross VA · Stafford VA · Fredericksburg VA |

---

## Build for Production

```bash
npm run build   # output → ./dist/
npm run preview # preview the production build locally
```
