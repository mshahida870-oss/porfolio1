# Shahida Maqsood — portfolio

A personal portfolio and living archive: research, teaching and independent
ventures in one place, designed so that new work can be added over time without
anything getting lost.

**Live site:** https://mshahida870-oss.github.io/porfolio1/
*(after the first deployment finishes — see “Deployment” below)*

---

## What is here

| Page | Purpose |
|---|---|
| `index.html` | Home — introduction, the three strands, featured work |
| `research.html` | Doctoral and master's research, interests, research output |
| `teaching.html` | Teaching career, resources and demonstrations |
| `ventures.html` | Independent projects and products |
| `projects.html` | The full archive, filterable and searchable |
| `project.html` | A single project, with the work running inside the page |
| `writing.html` | Articles index |
| `cv.html` | Full CV — printable straight to PDF |

---

## How to add your work

**→ See [`ADDING-CONTENT.md`](ADDING-CONTENT.md).** Short version: you edit
`data/projects.js` and `data/profile.js`, and never touch HTML.

---

## How it is built

Plain HTML, CSS and JavaScript. **No build step, no framework, no dependencies.**
That is deliberate — it means the site still works years from now, opens by
double-clicking a file, and can be edited by anyone who can edit a text file.

```
├── index.html … cv.html      the pages
├── data/
│   ├── profile.js            your CV and personal details
│   └── projects.js           everything you have made   ← edit this most
├── assets/
│   ├── css/site.css          the whole design, one file
│   ├── js/site.js            shared header, footer, cards, search
│   └── docs/                 PDFs (papers, theses, decks)
├── projects/<slug>/          self-contained demos, embedded live
├── writing/<slug>.html       articles
└── .github/workflows/        automatic deployment
```

Design: Fraunces + Inter, a warm paper palette with a burnt-clay accent, and a
colour per strand — green for research, clay for teaching, indigo for ventures.

---

## Running it locally

Double-click `index.html`, or for an exact match to the live site:

```bash
python -m http.server 8000     # then open http://localhost:8000
```

---

## Deployment

Pushing to `main` deploys the site automatically via GitHub Actions
(`.github/workflows/deploy.yml`). The workflow enables GitHub Pages on the first
run, so there is nothing to switch on by hand.

To check on a deployment: **Actions** tab → the most recent “Deploy site to
GitHub Pages” run. The live URL is printed at the end of the run.

### Using your own domain

The free address is `mshahida870-oss.github.io/porfolio1`. To use a domain such
as `shahidamaqsood.com`:

1. **Buy the domain** from any registrar (Cloudflare, Namecheap, GoDaddy…).

2. **Point its DNS at GitHub.** For the bare domain, create four `A` records:

   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   And for `www`, one `CNAME` record pointing at `mshahida870-oss.github.io`.

3. **Tell the repository about it.** Create a file named `CNAME` (no extension)
   in the project root containing only your domain:

   ```
   shahidamaqsood.com
   ```

4. **Set it in the repository.** Settings → Pages → Custom domain → enter the
   domain → Save, then tick **Enforce HTTPS** once the certificate is issued
   (this can take up to an hour).

### A note on the repository name

The repository is currently `porfolio1`, so the free URL contains that spelling.
Two ways to improve it, both optional:

- **Rename the repository** to `portfolio` (Settings → General → Repository name).
  The URL becomes `mshahida870-oss.github.io/portfolio`.
- **Rename it to `mshahida870-oss.github.io`.** GitHub then serves it at
  `https://mshahida870-oss.github.io/` with no path at all.

Either way, a custom domain makes the repository name invisible to visitors.

---

## Licence and content

The code in this repository is free for you to reuse. The written content, CV
details and research descriptions are Shahida Maqsood's own.
