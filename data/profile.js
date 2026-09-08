/* ============================================================
   PROFILE DATA  —  edit this file to update your details.
   Plain JavaScript object. Keep the quotes and commas intact.
   ============================================================ */
window.PROFILE = {

  name: "Shahida Maqsood",
  initials: "SM",
  tagline: "Physics & Mathematics Instructor · PhD Candidate · Educator",
  blurb: "Two decades of teaching physics and mathematics in higher education, " +
         "alongside doctoral research in nanomaterials at UAEU.",

  location: "Al Ain, United Arab Emirates",
  email: "shahida.maqsood@actvet.gov.ae",
  linkedin: "https://www.linkedin.com/in/s-m-092a7641",

  /* Optional — leave as empty strings until you have them.
     Any link with an empty url is hidden automatically. */
  orcid: "",
  googleScholar: "",
  researchGate: "",
  github: "",

  /* The three pillars of the site. Order controls display order. */
  pillars: [
    {
      id: "research",
      label: "Researcher",
      title: "Research",
      lede: "Doctoral research in nanomaterials physics, with a background in " +
            "ab initio studies of two-dimensional materials.",
      icon: "⚛"
    },
    {
      id: "teaching",
      label: "Instructor",
      title: "Teaching",
      lede: "Twenty years of physics and mathematics instruction, currently " +
            "within the CAR Part 147 aviation framework.",
      icon: "✎"
    },
    {
      id: "ventures",
      label: "Entrepreneur",
      title: "Ventures",
      lede: "Independent projects and products built around education, " +
            "training and applied physics.",
      icon: "◈"
    }
  ],

  stats: [
    { value: "20+",  label: "Years teaching" },
    { value: "PhD",  label: "In progress, UAEU" },
    { value: "3.5",  label: "Master's GPA / 4.0" },
    { value: "6+",   label: "Certifications" }
  ],

  about: [
    "Physics and Mathematics instructor with over two decades of progressive teaching " +
    "experience in higher education. Currently pursuing a PhD in Physics at UAEU while " +
    "teaching at Abu Dhabi Polytechnic, Al Ain.",

    "I bring proven expertise in delivering quality undergraduate education with a strong " +
    "commitment to student success and academic excellence. My specialization in advanced " +
    "physics applications, particularly in nanomaterials research, combined with extensive " +
    "practical teaching experience, enables me to bridge theoretical knowledge with " +
    "real-world applications.",

    "I am passionate about developing innovative curricula, mentoring students, and " +
    "contributing to institutional growth through effective teamwork and leadership. My " +
    "experience spans multiple educational systems and cultures, providing a unique " +
    "perspective on diverse learning approaches. I actively organize student participation " +
    "in professional development activities, including aviation air shows and Women in " +
    "Aviation conferences."
  ],

  research: {
    current: {
      title: "Advanced Physics Applications in Nano Materials",
      institution: "United Arab Emirates University (UAEU)",
      period: "August 2023 – Present",
      status: "In progress · expected completion 2026–2027",
      description: "Research in nanomaterials physics, focusing on the fundamental " +
        "properties and applications of nano-scale materials, and on material behaviour " +
        "at the nanoscale and its practical applications in modern technology."
    },
    masters: {
      title: "Band Gap Tuning of MoSe₂ and WSe₂ Monolayers through Alloying and Substitution: An Ab initio Study",
      institution: "United Arab Emirates University (UAEU)",
      period: "2022",
      method: "Ab initio computational study",
      description: "Investigated the manipulation of electronic band gaps through alloying " +
        "and substitution in transition metal dichalcogenide monolayers, contributing " +
        "insights to 2D materials science and their potential applications in electronic devices."
    },
    interests: [
      "Nanomaterials Physics",
      "2D Materials",
      "Electronic Properties",
      "Materials Science",
      "Computational Physics",
      "Ab initio Methods"
    ]
  },

  experience: [
    {
      role: "Instructor",
      org: "Abu Dhabi Polytechnic, Al Ain",
      period: "August 2016 – Present",
      current: true,
      points: [
        ["Curriculum delivery", "Teach advanced Mathematics and Physics (Modules 1 & 2) to aviation students within the CAR Part 147 certification framework."],
        ["Laboratory management", "Design and conduct laboratory sessions for degree-level courses, ensuring hands-on learning experiences."],
        ["Assessment development", "Create, administer and evaluate quizzes, examinations and tutorials to measure student competency and progress."],
        ["Curriculum innovation", "Collaborate in designing new courses and instructional materials aligned with industry standards and regulatory requirements."],
        ["Academic mentoring", "Provide personal and academic support to students, fostering their professional development."],
        ["Interactive learning", "Facilitate classroom discussions and encourage critical thinking through structured debates and collaborative learning."]
      ]
    },
    {
      role: "Adjunct Lecturer",
      org: "Higher Colleges of Technology, Sharjah",
      period: "February 2015 – May 2016",
      points: [
        ["Undergraduate instruction", "Delivered teaching and instruction at undergraduate level with a focus on physics and mathematics."],
        ["Practical education", "Conducted laboratory sessions for degree-level courses, integrating theoretical knowledge with practical applications."],
        ["Academic administration", "Organized and managed quizzes, examinations and tutorial sessions to enhance student learning outcomes."],
        ["Performance evaluation", "Assessed student coursework and conducted examination setup with accurate marking and feedback."]
      ]
    },
    {
      role: "Lecturer",
      org: "I.M.C.G (PG) College for Women, Islamabad",
      period: "January 2003 – December 2014",
      points: [
        ["Advanced instruction", "Delivered lectures to diverse student groups using innovative teaching methodologies."],
        ["Program management", "Organized, implemented and monitored academic programs and assessment frameworks."],
        ["Course material development", "Prepared learning materials and designed relevant practical activities."],
        ["Institutional committees", "Served on Admission, Audit and Transport committees, contributing to institutional governance."],
        ["Student recruitment", "Participated in interviewing prospective students, ensuring quality admissions aligned with institutional standards."]
      ]
    }
  ],

  education: [
    {
      degree: "PhD in Physics",
      note: "In progress",
      org: "United Arab Emirates University (UAEU)",
      period: "August 2023 – Present",
      details: [["Research focus", "Advanced Physics Applications (Nano Materials)"]]
    },
    {
      degree: "Master of Science in Physics",
      org: "United Arab Emirates University (UAEU)",
      period: "June 2022",
      details: [
        ["GPA", "3.5 / 4.0"],
        ["Dissertation", "Band gap tuning of MoSe₂ and WSe₂ monolayers through alloying and substitution: an ab initio study"],
        ["Specialization", "Materials Science"]
      ]
    },
    {
      degree: "Bachelor of Science in Physics",
      org: "Quaid-e-Azam University",
      period: "January 2000",
      details: [
        ["Specialization", "Plasma Physics"],
        ["Additional coursework", "Advanced physics modules with theoretical and practical components"]
      ]
    }
  ],

  skills: {
    "Teaching & Education": ["Curriculum Development", "Laboratory Management", "Assessment Design", "Student Mentoring"],
    "Technical": ["Physics", "Mathematics", "Nano Materials", "Materials Science"],
    "Research": ["Ab initio Methods", "Computational Physics", "2D Materials", "Band Gap Engineering"],
    "Aviation & Industry": ["CAR Part 147", "EASA Regulations", "Aviation Mathematics", "Aviation Physics"],
    "Technology": ["AI Fundamentals", "Learning Management Systems", "Digital Assessment", "Educational Technology"],
    "Professional": ["Leadership", "Communication", "Team Player", "Adaptability"]
  },

  certifications: [
    { title: "Internal Verifier (NQA)", issuer: "2025" },
    { title: "Artificial Intelligence Fundamentals", issuer: "IBM · 2024" },
    { title: "PART/CAR 66 Foundation", issuer: "Abu Dhabi Polytechnic · 2021" },
    { title: "EASA/GCAA CAR/PART147 Regulatory Training", issuer: "Abu Dhabi Polytechnic · 2021" },
    { title: "Leading High-Performance Team", issuer: "UQL · 2018" },
    { title: "Train The Trainer", issuer: "Glans Training Centre, UAE · 2017" }
  ],

  memberships: [
    { title: "Australian Institute of Physics (AIP)", issuer: "Active member" }
  ],

  training: [
    { title: "GCAA Voluntary Reporting Service (VORSY)", issuer: "Based on AMC-57 · Abu Dhabi Polytechnic · 2021" },
    { title: "MTO, LMS/BB, Invigilation", issuer: "Abu Dhabi Polytechnic, Al Ain" },
    { title: "Teaching of Mathematics and Physics", issuer: "Professional certification" }
  ],

  achievements: [
    ["Academic excellence", "3.5 GPA in Master of Science in Physics from UAEU."],
    ["IELTS Academic 7.5", "Advanced English proficiency for international academic collaboration (2013)."],
    ["ICT Certification", "Advanced technology training in South Korea (2006)."],
    ["IC3 Certification", "Certified in computer literacy and digital skills (2017)."],
    ["20+ years teaching", "Sustained involvement in academia with consistent professional development and student success focus."],
    ["Cross-cultural teaching", "Adapted teaching methodologies across different educational systems in Pakistan and the UAE."],
    ["Research leadership", "Conducting PhD research in nanomaterials physics at UAEU."],
    ["Professional development leadership", "Organized student participation in aviation air shows and Women in Aviation conferences."],
    ["Committee service", "Served on institutional committees including Admission, Audit and Transport."],
    ["Regulatory expertise", "Specialized training in aviation industry standards (CAR Part 147, EASA regulations)."]
  ],

  activities: [
    { icon: "\u{1F393}", title: "Student development", text: "Mentoring and academic advising to support career development and academic excellence across diverse student populations." },
    { icon: "✈", title: "Industry engagement", text: "Participation in aviation industry events and conferences, connecting students with professional opportunities." },
    { icon: "\u{1F52C}", title: "Research contribution", text: "Advancing knowledge in nanomaterials physics through doctoral research at UAEU." }
  ],

  languages: ["English", "Urdu", "Arabic"]
};
