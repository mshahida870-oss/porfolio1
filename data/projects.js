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
    featured: true,
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
    featured: true,
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
    summary: "Interactive exam preparation for EASA and UAE GCAA Part-66 — all seventeen " +
             "modules for Categories A, B1, B2 and B1.3, with notes, simulations, question " +
             "banks and timed papers indexed by syllabus reference.",
    body: [
      "Every sub-section carries the four things a student needs: notes and mind maps " +
      "written to the level their own licence category is examined at, simulations where " +
      "they change a value and watch the result, questions with a written explanation so a " +
      "wrong attempt teaches something, and timed papers at the official Appendix II length " +
      "and duration.",

      "That comes to 271 topics by syllabus reference, 390 note sets and concept maps, 100 " +
      "simulations, 3,720 explained questions and 32 mock papers at the 75% pass mark. A " +
      "student revising 2.3 finds everything for 2.3 in one place, and an instructor can set " +
      "work the same way.",

      "Material is graded per licence category, so a Category A student is never shown B1 or " +
      "B2 content they will not be examined on, and it is audited against the GCAA Curriculum " +
      "Manuals and Part-66 Appendix I and II, module by module. All seventeen modules open in " +
      "full: no licence, no per-student fee."
    ],
    note: "Certify66 is an independent study aid. It is not EASA or GCAA approved training " +
          "and does not replace approved Part-147 instruction — it sits alongside it as revision.",
    tags: ["Aviation", "Part-66", "Exam Preparation", "EdTech", "Free"],
    /* certify66.com refuses to be framed, so no embed — the link speaks for it. */
    links: [{ label: "Visit certify66.com", url: "https://certify66.com" }]
  },

  {
    slug: "easa-m02-simulations",
    title: "Module 2 Physics — Interactive Simulations",
    pillar: "teaching",
    kind: "demo",
    year: 2026,
    status: "live",
    featured: true,
    summary: "Eleven interactive physics simulations covering EASA Part-66 Module 2 for " +
             "Category A — students change a value and watch the result rather than reading " +
             "about it.",
    body: [
      "The pack runs as one page with a simulation picker: states of matter and the " +
      "latent-heat plateaus, moments and equilibrium, linear and rotational and periodic " +
      "motion, the three lever classes with mechanical advantage and velocity ratio, " +
      "Newton's second law, static and kinetic friction, work and energy and power, " +
      "density and specific gravity and buoyancy, pressure and hydraulics, the temperature " +
      "scales with ΔL = αLΔT, and all three modes of heat transfer.",

      "Each simulation has its own address, so a specific one can be set as homework or " +
      "linked from a lesson plan — adding #states-of-matter or #pressure-hydraulics to the " +
      "page URL opens that simulation directly.",

      "The whole pack is a single self-contained file with no build step, no network " +
      "dependency and nothing to install, so it runs from a shared classroom PC or a " +
      "student's own laptop."
    ],
    tags: ["Aviation", "Part-66", "Module 2", "Physics", "Interactive", "Classroom"],
    embed: { type: "folder", src: "projects/easa-m02-simulations/index.html" },
    links: [{ label: "Open full size", url: "projects/easa-m02-simulations/index.html" }]
  },

  {
    slug: "flight-instruments",
    title: "SixPack66",
    pillar: "teaching",
    kind: "demo",
    year: 2026,
    status: "live",
    featured: true,
    summary: "The six standard flight instruments, live in the browser. Move one control " +
             "and every gauge responds the way it would in the aircraft — built for EASA " +
             "and GCAA Part-66 students.",
    body: [
      "Six instruments with correct faces and markings rather than icons: Cessna 172 " +
      "airspeed arcs, a three-pointer altimeter, a rotating compass card. They are driven " +
      "from one shared flight state, so the altimeter, vertical speed indicator and turn " +
      "coordinator cannot disagree with each other.",

      "Direct mode moves one parameter at a time. Fly mode hands over throttle, elevator, " +
      "aileron and rudder. Rate of turn follows ω = 1091·tan(bank)/TAS, so a standard-rate " +
      "turn really is 3°/s and the bank angle needed rises with speed.",

      "Presets cover straight and level, steady climb, descent, standard-rate turns, a " +
      "climbing turn and an approach to the stall. The whole app is 40 KB. It installs from " +
      "the browser and keeps working offline on a phone or a shared classroom PC — no app " +
      "store, no login, no backend, nothing collected."
    ],
    note: "The flight model is a simplified response model built to teach instrument " +
          "behaviour, not a certified flight-dynamics model. Airspeed markings follow " +
          "Cessna 172S values and IAS is treated as TAS; every instrumentation assumption " +
          "is listed inside the app.",
    tags: ["Aviation", "Part-66", "Flight Instruments", "Interactive", "Offline app"],
    embed: { type: "site", src: "https://flight-instruments.vercel.app/", framable: true },
    links: [
      { label: "Open the live app", url: "https://flight-instruments.vercel.app/" },
      { label: "View the poster", url: "projects/sixpack66/poster.html" }
    ]
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
