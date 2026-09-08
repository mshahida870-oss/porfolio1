# Adding your work to the site

This site is built so that **you never have to touch HTML to add a project.**
Everything on it comes from two files:

| File | What it holds |
|---|---|
| `data/profile.js` | Who you are — CV, experience, education, skills, contact details |
| `data/projects.js` | Everything you have made — projects, papers, demos, articles, ventures |

Edit those, and every page updates itself.

---

## The one rule

Both files are JavaScript. That means **commas and quotes matter**. If the site
suddenly looks empty, you almost certainly have a missing comma or an unclosed
quote. Open the page in your browser, press <kbd>F12</kbd>, and the Console tab
will point at the line.

---

## Recipe 1 — Add a project you can click and use

You have a self-contained mini-app: a simulation, a calculator, a visualisation.
Anything that is one folder with an `index.html` inside it.

1. Put the folder in `projects/`. For example `projects/wave-interference/`,
   with `projects/wave-interference/index.html` inside.
2. Open `data/projects.js` and add an entry at the top of the list:

```js
{
  slug: "wave-interference",
  title: "Wave Interference Demonstrator",
  pillar: "teaching",
  kind: "demo",
  year: 2026,
  featured: true,
  summary: "Two sources, adjustable wavelength and separation — students see the fringe pattern form.",
  tags: ["Waves", "Optics", "Interactive"],
  embed: { type: "folder", src: "projects/wave-interference/index.html" }
},
```

That is it. The project now appears on the home page, in the archive, on the
Teaching page, and gets its own page where it runs live inside the site.

> **Tip:** `projects/projectile-motion/` is a complete working example. Copy that
> folder as a starting point for a new demo.

---

## Recipe 2 — Add a paper, thesis or report (PDF)

1. Save the PDF into `assets/docs/`, e.g. `assets/docs/msc-thesis.pdf`.
2. Add or edit the entry:

```js
{
  slug: "band-gap-tuning-tmd",
  title: "Band Gap Tuning of MoSe₂ and WSe₂ Monolayers",
  pillar: "research",
  kind: "paper",
  year: 2022,
  summary: "Master's dissertation — an ab initio study of alloying and substitution.",
  tags: ["2D Materials", "DFT"],
  embed: { type: "pdf", src: "assets/docs/msc-thesis.pdf" },
  links: [{ label: "UAEU repository", url: "https://..." }]
},
```

The PDF is then readable directly on the page, with a button to open it full size.

---

## Recipe 3 — Add a written article

1. Copy `writing/aviation-physics-teaching.html` to a new name, e.g.
   `writing/why-i-teach-with-simulations.html`.
2. Change the `<title>`, the `<h1>`, the byline and the body text. Leave the
   `<header>`, `<footer>` and `<script>` lines alone — they draw the site
   navigation for you.
3. Add the entry, using `href` instead of `embed`:

```js
{
  slug: "why-i-teach-with-simulations",
  title: "Why I Teach With Simulations",
  pillar: "teaching",
  kind: "post",
  year: 2026,
  summary: "One paragraph that makes someone want to read it.",
  tags: ["Pedagogy"],
  href: "writing/why-i-teach-with-simulations.html"
},
```

---

## Recipe 4 — Add a venture

Same as any other entry, with `pillar: "ventures"`. Point it wherever the venture
actually lives:

```js
{
  slug: "my-venture",
  title: "My Venture",
  pillar: "ventures",
  kind: "venture",
  year: 2026,
  status: "live",
  summary: "What it does and who it is for.",
  tags: ["EdTech"],
  embed: { type: "site", src: "https://myventure.com" },
  links: [{ label: "Visit the site", url: "https://myventure.com" }]
},
```

Delete the `ventures-placeholder` entry once you have a real one.

---

## Recipe 5 — Embed a video

```js
embed: { type: "video", src: "https://www.youtube.com/embed/VIDEO_ID" }
```

Use the **embed** URL (`/embed/VIDEO_ID`), not the normal watch link.

---

## Field reference

| Field | Required | Notes |
|---|---|---|
| `slug` | yes | Unique. Letters, numbers and dashes only. Becomes the page URL. |
| `title` | yes | Shown everywhere. |
| `pillar` | yes | `research`, `teaching` or `ventures`. |
| `kind` | yes | `demo`, `paper`, `course`, `post`, `venture`, `dataset`, `tool`. |
| `year` | yes | A number. Sorts newest first. |
| `summary` | yes | One or two sentences for the card. |
| `status` | no | `live`, `ongoing`, `published`, `draft`, `planned`. Default `live`. |
| `featured` | no | `true` pins it to the home page. |
| `tags` | no | Array of short strings. Searchable in the archive. |
| `cover` | no | Image path. Without one, a lettered placeholder is drawn. |
| `links` | no | `[{ label, url }]` — shown as buttons. |
| `embed` | no | How the work is displayed. See recipes above. |
| `href` | no | Use instead of `embed` to link straight to another page. |

---

## Changing your CV details

Open `data/profile.js`. Everything is labelled — `experience`, `education`,
`skills`, `certifications`, `achievements`, `languages`. Add a new job by copying
an existing block and editing it. The CV page, the Teaching page and the footer
all update together.

To add ORCID, Google Scholar, ResearchGate or GitHub links, just fill in those
fields near the top. **Empty ones are hidden automatically**, so you can leave
them blank until you have them.

---

## Previewing before you publish

**The quick way:** double-click `index.html`. It opens in your browser and works
offline. (This is why the data lives in `.js` files rather than `.json` — browsers
block `.json` loading from a local file.)

**The accurate way**, which matches the live site exactly — open a terminal in the
project folder and run:

```
python -m http.server 8000
```

then visit `http://localhost:8000`.

---

## Publishing

Commit your changes and push to `main`. GitHub Actions rebuilds and deploys the
site automatically — usually within a minute. See `README.md` for the deployment
and custom-domain setup.
