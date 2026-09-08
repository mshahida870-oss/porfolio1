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
    slug: "pr-promoted-oxygen-ion-conduction-ceo2",
    title: "Theoretical Insights Into Pr-Promoted Oxygen-Ion Conduction in CeO₂: A Hybrid Functional Study",
    pillar: "research",
    kind: "paper",
    year: 2026,
    status: "published",
    venue: "International Journal of Energy Research",
    published: "31 August 2026",
    authors: ["Xiaoping Han", "Maamar Benkraouda", "Shahida Maqsood",
              "Deepa Jithin", "El Hadi Sadki", "Noureddine Amrane"],
    summary: "A hybrid-functional study of praseodymium-promoted oxygen-ion conduction " +
             "in ceria, published in the International Journal of Energy Research.",
    tags: ["DFT", "Hybrid Functional", "Ceria", "Oxygen-Ion Conduction", "Co-authored"],
    links: [{ label: "Read the paper (DOI)", url: "https://doi.org/10.1155/er/6421833" }]
  },

  {
    slug: "ferromagnetism-sm-doped-ceo2",
    title: "Theoretical Insights into Ferromagnetism in Sm-Doped CeO₂ from Hybrid Functional: Synergistic Interplay between Sm and Oxygen Vacancy",
    pillar: "research",
    kind: "paper",
    year: 2026,
    status: "published",
    venue: "ACS Omega",
    published: "21 August 2026",
    authors: ["Xiaoping Han", "Maamar Benkraouda", "Shahida Maqsood",
              "Deepa Jithin", "El Hadi Sadki", "Noureddine Amrane"],
    summary: "A hybrid-functional study of ferromagnetism in samarium-doped ceria and the " +
             "interplay between the dopant and oxygen vacancies, published in ACS Omega.",
    tags: ["DFT", "Hybrid Functional", "Ceria", "Ferromagnetism", "Co-authored"],
    links: [{ label: "Read the paper (DOI)", url: "https://doi.org/10.1021/acsomega.6c04304" }]
  },

  {
    slug: "newsletter-2026-09-07",
    title: "Aviation & MRO Notice Board — 7 September 2026",
    pillar: "teaching",
    kind: "newsletter",
    year: 2026,
    status: "published",
    featured: true,
    summary: "Weekly one-page news board on aviation maintenance, repair and overhaul, " +
             "written for administrators, faculty and students. This issue: Emirates " +
             "extends its A380 heavy maintenance deal, SWISS brings composite repair " +
             "in-house at Zurich, and a watchdog questions who may sit the A&P exam.",
    tags: ["Newsletter", "English", "Arabic", "MRO", "Aviation", "Part 147"],
    embed: { type: "folder", src: "newsletter/2026-09-07/index.html" },
    links: [{ label: "النسخة العربية · Arabic edition",
              url: "newsletter/2026-09-07/ar/index.html" }]
  },

  {
    slug: "newsletter-2026-09-02",
    title: "Aviation & MRO Notice Board — 2 September 2026",
    pillar: "teaching",
    kind: "newsletter",
    year: 2026,
    status: "published",
    summary: "Weekly one-page news board on aviation maintenance, repair and overhaul. " +
             "This issue: retired A320s being turned into spare parts, an FAA order for " +
             "repeat wing inspections on Boeing 787s, and a watchdog asking the FAA to " +
             "widen mechanic exam access.",
    tags: ["Newsletter", "English", "MRO", "Aviation", "Part 147"],
    embed: { type: "folder", src: "newsletter/2026-09-02/index.html" },
    links: [{ label: "Download the PDF",
              url: "newsletter/2026-09-02/aviation-mro-notice-board-2026-09-02.pdf" }]
  },

  {
    slug: "certify66",
    title: "Certify66",
    pillar: "ventures",
    kind: "venture",
    year: 2026,
    status: "live",
    featured: true,
    summary: "An independent venture in aviation training and certification.",
    tags: ["Aviation", "Training", "Certification", "EdTech"],
    /* certify66.com refuses to be framed, so no embed — the link speaks for it. */
    links: [{ label: "Visit certify66.com", url: "https://certify66.com" }]
  },

  {
    slug: "flight-instruments",
    title: "Flight Instruments Pack66",
    pillar: "teaching",
    kind: "demo",
    year: 2026,
    status: "live",
    featured: true,
    summary: "An interactive flight instruments pack, built as a teaching aid for " +
             "aviation students.",
    tags: ["Aviation", "Interactive", "Instruments", "Classroom"],
    embed: { type: "site", src: "https://flight-instruments.vercel.app/", framable: true },
    links: [{ label: "Open the live app", url: "https://flight-instruments.vercel.app/" }]
  },

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
    kind: "research",       /* in progress — not a publication */
    year: 2023,
    status: "ongoing",
    featured: true,
    summary: "Doctoral research at UAEU into the fundamental properties and applications " +
             "of nano-scale materials. In progress since August 2023.",
    tags: ["Nanomaterials", "PhD", "UAEU", "Condensed Matter"],
    archive: false          /* research, not built work — Research page only */
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
    tags: ["2D Materials", "Ab initio", "DFT", "Band Structure", "Master's Thesis"],
    archive: false,         /* shown on the Research page, not in the Work archive */
    venue: "United Arab Emirates University",
    published: "2022",
    links: [{ label: "Read the thesis · UAEU ScholarWorks",
              url: "https://scholarworks.uaeu.ac.ae/all_theses/1144/" }]
  }

];
