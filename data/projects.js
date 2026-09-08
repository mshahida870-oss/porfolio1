/* ============================================================
   YOUR WORK  —  this is the file you edit most often.

   Every project, paper, demo, course resource, venture and blog
   post on the site comes from this one list. Add a new entry to
   the top of the array and it appears everywhere automatically:
   the home page, the archive, the pillar pages and the search.

   ── FIELDS ─────────────────────────────────────────────────
   slug      required  short id, letters/numbers/dashes only.
                       Must be unique. Used in the page URL.
   title     required  display name.
   pillar    required  "research" | "teaching" | "ventures"
   kind      required  "demo" | "paper" | "course" | "post"
                       | "venture" | "dataset" | "tool"
   year      required  number, used for sorting.
   summary   required  1–2 sentences shown on the card.
   status              "live" | "ongoing" | "published"
                       | "draft" | "planned"   (default "live")
   featured            true to pin it on the home page.
   tags                array of short strings, searchable.
   cover               path to an image, e.g. "assets/img/x.jpg".
                       Omit it and a lettered placeholder is drawn.
   links               array of { label, url } shown as buttons.

   embed               how the work is shown on its own page:
     { type: "folder", src: "projects/<slug>/index.html" }
         a self-contained mini-site or interactive demo.
         Drop the folder in and it runs inside the page.
     { type: "pdf",    src: "assets/docs/paper.pdf" }
     { type: "video",  src: "https://www.youtube.com/embed/ID" }
     { type: "site",   src: "https://example.com" }
         omit `embed` entirely for a text-only entry.

   href                use INSTEAD of embed to send the card
                       straight to another page, e.g. a blog post.
   ────────────────────────────────────────────────────────────
   See ADDING-CONTENT.md for step-by-step recipes.
   ============================================================ */

window.PROJECTS = [

  {
    slug: "projectile-motion",
    title: "Projectile Motion Explorer",
    pillar: "teaching",
    kind: "demo",
    year: 2026,
    status: "live",
    featured: true,
    summary: "An interactive classroom tool for launch angle, speed and drag — " +
             "students change the parameters and watch range, apex and flight time respond.",
    tags: ["Mechanics", "Interactive", "Classroom", "Kinematics"],
    embed: { type: "folder", src: "projects/projectile-motion/index.html" }
  },

  {
    slug: "aviation-physics-teaching",
    title: "Teaching Aviation Physics: Bridging Theory and Practice",
    pillar: "teaching",
    kind: "post",
    year: 2024,
    status: "published",
    featured: true,
    summary: "On closing the gap between abstract mechanics and the aircraft systems " +
             "students will actually maintain, inside the CAR Part 147 framework.",
    tags: ["Aviation Education", "CAR Part 147", "Pedagogy"],
    href: "writing/aviation-physics-teaching.html"
  },

  {
    slug: "phd-nanomaterials",
    title: "Advanced Physics Applications in Nano Materials",
    pillar: "research",
    kind: "paper",
    year: 2023,
    status: "ongoing",
    featured: true,
    summary: "Doctoral research at UAEU into the fundamental properties and applications " +
             "of nano-scale materials. In progress since August 2023.",
    tags: ["Nanomaterials", "PhD", "UAEU", "Condensed Matter"]
    /* When you have a preprint or poster, add:
       embed: { type: "pdf", src: "assets/docs/phd-poster.pdf" }   */
  },

  {
    slug: "band-gap-tuning-tmd",
    title: "Band Gap Tuning of MoSe₂ and WSe₂ Monolayers",
    pillar: "research",
    kind: "paper",
    year: 2022,
    status: "published",
    featured: true,
    summary: "Master's dissertation: an ab initio study of how alloying and substitution " +
             "shift the electronic band gap in transition metal dichalcogenide monolayers.",
    tags: ["2D Materials", "Ab initio", "DFT", "Band Structure", "Master's Thesis"]
    /* To display the thesis, save the PDF into assets/docs/ and add:
       embed: { type: "pdf", src: "assets/docs/msc-thesis.pdf" },
       links: [{ label: "UAEU repository", url: "https://..." }]      */
  },

  {
    slug: "ventures-placeholder",
    title: "Your first venture goes here",
    pillar: "ventures",
    kind: "venture",
    year: 2026,
    status: "planned",
    summary: "A placeholder so the Ventures section renders. Replace this entry with a " +
             "real project, or delete it once you have one.",
    tags: ["Placeholder"]
  }

];
