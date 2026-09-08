/* ============================================================
   Site runtime — shared header/footer, project rendering,
   filtering and the project detail view.
   No dependencies. Works from file:// as well as a web server.
   ============================================================ */
(function () {
  "use strict";

  var P = window.PROFILE || {};
  var ALL = window.PROJECTS || [];
  var body = document.body;
  var ROOT = body.getAttribute("data-root") || "";   /* "" or "../" */
  var PAGE = body.getAttribute("data-page") || "";

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function el(id) { return document.getElementById(id); }
  function u(path) { return ROOT + path; }

  var STATUS_LABEL = {
    live: "Live", ongoing: "In progress", published: "Published",
    draft: "Draft", planned: "Planned"
  };
  var KIND_LABEL = {
    demo: "Interactive", paper: "Research", course: "Teaching resource",
    post: "Article", venture: "Venture", dataset: "Dataset", tool: "Tool",
    newsletter: "Newsletter"
  };

  function pillarOf(id) {
    var list = P.pillars || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return { id: id, label: id, title: id };
  }

  /* Where does a card point to? */
  function hrefOf(p) {
    if (p.href) return u(p.href);
    return u("project.html?p=" + encodeURIComponent(p.slug));
  }

  /* ---------- header & footer ---------- */
  var NAV = [
    { href: "index.html",    label: "Home",     page: "home" },
    { href: "research.html", label: "Research", page: "research" },
    { href: "teaching.html", label: "Teaching", page: "teaching" },
    { href: "ventures.html", label: "Ventures", page: "ventures" },
    { href: "projects.html", label: "Work",     page: "projects" },
    { href: "writing.html",  label: "Writing",  page: "writing" },
    { href: "cv.html",       label: "CV",       page: "cv" }
  ];

  function renderHeader() {
    var host = el("site-header");
    if (!host) return;
    var links = NAV.map(function (n) {
      var cur = n.page === PAGE ? ' aria-current="page"' : "";
      return '<a href="' + u(n.href) + '"' + cur + ">" + esc(n.label) + "</a>";
    }).join("");

    host.className = "site-header";
    host.innerHTML =
      '<div class="wrap">' +
        '<a class="brand" href="' + u("index.html") + '">' +
          '<span class="mark">' + esc(P.initials || "") + "</span>" +
          "<span>" + esc(P.name || "") + "</span>" +
        "</a>" +
        '<button class="nav-toggle" type="button" aria-expanded="false" aria-label="Menu">☰</button>' +
        '<nav class="site-nav">' + links + "</nav>" +
      "</div>";

    var btn = host.querySelector(".nav-toggle");
    btn.addEventListener("click", function () {
      var open = host.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function contactLinks() {
    var out = [];
    if (P.email)         out.push(['✉ Email', "mailto:" + P.email]);
    if (P.linkedin)      out.push(["LinkedIn", P.linkedin]);
    if (P.orcid)         out.push(["ORCID", P.orcid]);
    if (P.googleScholar) out.push(["Google Scholar", P.googleScholar]);
    if (P.researchGate)  out.push(["ResearchGate", P.researchGate]);
    if (P.github)        out.push(["GitHub", P.github]);
    return out;
  }

  function renderFooter() {
    var host = el("site-footer");
    if (!host) return;
    var links = contactLinks().map(function (c) {
      var ext = c[1].indexOf("mailto:") === 0 ? "" : ' target="_blank" rel="noopener"';
      return '<a class="chip" href="' + esc(c[1]) + '"' + ext + ">" + esc(c[0]) + "</a>";
    }).join("");

    host.className = "site-footer";
    host.innerHTML =
      '<div class="wrap">' +
        '<div class="footer-grid">' +
          "<div>" +
            '<div class="name">' + esc(P.name || "") + "</div>" +
            "<p>" + esc(P.tagline || "") + "</p>" +
            (P.location ? "<p>" + esc(P.location) + "</p>" : "") +
          "</div>" +
          '<div class="footer-links">' + links + "</div>" +
        "</div>" +
        '<div class="footer-bottom">' +
          "<span>© " + new Date().getFullYear() + " " + esc(P.name || "") + "</span>" +
          "<span>Built as a living archive — updated as the work grows.</span>" +
        "</div>" +
      "</div>";
  }

  /* ---------- project cards ---------- */
  function coverHTML(p) {
    if (p.cover) {
      return '<div class="card-cover"><img src="' + esc(u(p.cover)) + '" alt="" loading="lazy"></div>';
    }
    var glyph = (p.title || "?").trim().charAt(0).toUpperCase();
    return '<div class="card-cover" style="background:var(--' + esc(p.pillar) + '-soft)">' +
           '<span class="glyph" style="color:var(--' + esc(p.pillar) + ')">' + esc(glyph) + "</span></div>";
  }

  function cardHTML(p) {
    var status = p.status || "live";
    var statusTag = (status === "draft" || status === "planned")
      ? '<span class="tag tag-' + esc(status) + '">' + esc(STATUS_LABEL[status]) + "</span>"
      : "";
    return '<a class="card" href="' + esc(hrefOf(p)) + '">' +
        coverHTML(p) +
        '<div class="card-body">' +
          "<h3>" + esc(p.title) + "</h3>" +
          "<p>" + esc(p.summary) + "</p>" +
          '<div class="card-foot">' +
            '<span class="tag" data-pillar="' + esc(p.pillar) + '">' + esc(pillarOf(p.pillar).label) + "</span>" +
            statusTag +
            "<span>" + esc(p.venue || KIND_LABEL[p.kind] || p.kind) + "</span>" +
            "<span>·</span><span>" + esc(p.year) + "</span>" +
          "</div>" +
        "</div>" +
      "</a>";
  }

  function paint(host, list, emptyMsg) {
    if (!host) return;
    if (!list.length) {
      host.innerHTML = '<div class="empty">' + esc(emptyMsg || "Nothing here yet.") + "</div>";
      host.className = "";
      return;
    }
    host.className = "card-grid";
    host.innerHTML = list.map(cardHTML).join("");
  }

  function byYear(a, b) { return (b.year || 0) - (a.year || 0); }

  /* ---------- generic mount points ---------- */
  /* <div data-projects="research"> renders that pillar.
     data-projects="featured" | "all" | "posts" | "no-posts" also work.
     Optional data-limit="3".                                        */
  function mountLists() {
    var hosts = document.querySelectorAll("[data-projects]");
    Array.prototype.forEach.call(hosts, function (host) {
      var mode = host.getAttribute("data-projects");
      var limit = parseInt(host.getAttribute("data-limit"), 10);
      var list = ALL.slice();

      if (mode === "featured")      list = list.filter(function (p) { return p.featured; });
      else if (mode === "posts")    list = list.filter(function (p) { return p.kind === "post"; });
      else if (mode === "no-posts") list = list.filter(function (p) { return p.kind !== "post"; });
      else if (mode !== "all")      list = list.filter(function (p) { return p.pillar === mode; });

      /* optional data-kind="demo" narrows to one kind; data-kind="!demo"
         excludes it. Lets a page give demos their own heading. */
      var kind = host.getAttribute("data-kind");
      if (kind) {
        if (kind.charAt(0) === "!") {
          var not = kind.slice(1);
          list = list.filter(function (p) { return p.kind !== not; });
        } else {
          list = list.filter(function (p) { return p.kind === kind; });
        }
      }

      list.sort(byYear);
      var off = parseInt(host.getAttribute("data-offset"), 10);
      if (off > 0) list = list.slice(off);
      if (limit > 0) list = list.slice(0, limit);
      paint(host, list, host.getAttribute("data-empty"));
    });
  }

  /* ---------- show the newest issue of a kind in full ----------
     The posters are laid out for A3, so they are rendered at their natural
     width in an off-screen-width frame and scaled down to fit the column.
     Scaling the frame keeps the layout intact; setting the frame narrow
     would reflow the poster and break its three-column grid.            */
  var POSTER_W = 1160, POSTER_H = 1640;   /* fallback until the frame reports its own size */

  function mountFeatureEmbed() {
    var hosts = document.querySelectorAll("[data-embed-latest]");
    Array.prototype.forEach.call(hosts, function (host) {
      var kind = host.getAttribute("data-embed-latest");
      var list = ALL.filter(function (p) { return p.kind === kind && p.embed && p.embed.src; })
                    .sort(byYear);
      var p = list[0];
      if (!p) { host.innerHTML = ""; return; }

      var links = (p.links || []).map(function (l) {
        var href = /^https?:/.test(l.url) ? l.url : u(l.url);
        return '<a class="btn btn-ghost btn-sm" href="' + esc(href) + '" target="_blank" rel="noopener">' + esc(l.label) + " ↗</a>";
      }).join("");

      host.innerHTML =
        '<div class="poster-head">' +
          "<div><h3>" + esc(p.title) + "</h3>" +
          '<p class="muted">' + esc(p.summary) + "</p></div>" +
        "</div>" +
        '<div class="poster-wrap"><iframe class="poster-frame" src="' + esc(u(p.embed.src)) +
          '" title="' + esc(p.title) + '" loading="lazy" scrolling="no"></iframe></div>' +
        '<div class="cta-row" style="margin-top:16px">' +
          '<a class="btn btn-primary btn-sm" href="' + esc(u(p.embed.src)) + '" target="_blank" rel="noopener">Open full size ↗</a>' +
          links +
        "</div>";

      var wrap = host.querySelector(".poster-wrap");
      var frame = host.querySelector(".poster-frame");
      var natW = POSTER_W, natH = POSTER_H;

      /* The poster is same-origin, so its real laid-out size can be measured
         rather than assumed. Guessing A3 in pixels clipped the last column. */
      function measure() {
        try {
          var d = frame.contentDocument;
          if (!d || !d.body) return;
          var sheet = d.querySelector(".sheet") || d.body.firstElementChild;
          var cs = d.defaultView.getComputedStyle(d.body);
          var padX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
          var padY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
          if (sheet) {
            var r = sheet.getBoundingClientRect();
            if (r.width > 0) { natW = Math.ceil(r.width + padX); natH = Math.ceil(r.height + padY); }
          } else {
            natW = d.documentElement.scrollWidth;
            natH = d.documentElement.scrollHeight;
          }
        } catch (err) { /* cross-origin: keep the fallback size */ }
      }

      function fit() {
        var w = wrap.clientWidth;
        if (!w) return;
        var k = w / natW;
        frame.style.width = natW + "px";
        frame.style.height = natH + "px";
        frame.style.transform = "scale(" + k + ")";
        wrap.style.height = Math.round(natH * k) + "px";
      }

      frame.addEventListener("load", function () { measure(); fit(); });
      /* A scrollbar appearing after the first fit changes the column width,
         so track the wrapper rather than fitting once. */
      if (window.ResizeObserver) new ResizeObserver(fit).observe(wrap);
      else window.addEventListener("resize", fit);
      fit();
    });
  }

  /* ---------- archive page: filters + search ---------- */
  function mountArchive() {
    var host = el("archive-grid");
    if (!host) return;
    var buttons = document.querySelectorAll("#archive-filters .filter");
    var search = el("archive-search");
    var count = el("archive-count");
    var active = "all";

    function apply() {
      var q = (search && search.value || "").trim().toLowerCase();
      var list = ALL.filter(function (p) {
        if (p.archive === false) return false;   /* kept on its pillar page only */
        if (active !== "all" && p.pillar !== active) return false;
        if (!q) return true;
        var hay = [p.title, p.summary, p.kind, p.year, (p.tags || []).join(" ")].join(" ").toLowerCase();
        return hay.indexOf(q) !== -1;
      }).sort(byYear);

      paint(host, list, q ? "No work matches “" + q + "”." : "Nothing in this section yet.");
      if (count) {
        count.textContent = list.length + (list.length === 1 ? " item" : " items");
      }
    }

    Array.prototype.forEach.call(buttons, function (b) {
      b.addEventListener("click", function () {
        active = b.getAttribute("data-filter");
        Array.prototype.forEach.call(buttons, function (x) {
          x.setAttribute("aria-pressed", x === b ? "true" : "false");
        });
        apply();
      });
    });
    if (search) search.addEventListener("input", apply);
    apply();
  }

  /* ---------- project detail page ---------- */
  function embedHTML(p) {
    var e = p.embed;
    /* No embed: show nothing. The links in the header already carry the entry,
       and a note addressed to the site's author does not belong on a live page. */
    if (!e || !e.type || e.type === "none") return "";
    var src = (e.type === "video" || e.type === "site") ? e.src : u(e.src);

    /* Most sites refuse to be framed (X-Frame-Options / frame-ancestors), and a
       refused frame renders as a blank box with no way to detect it from here.
       So an external site gets a link panel unless it is known to allow framing
       and opts in with framable: true. */
    if (e.type === "site" && !e.framable) {
      var host = src.replace(/^https?:\/\//, "").replace(/\/$/, "");
      return '<a class="visit-panel" href="' + esc(src) + '" target="_blank" rel="noopener">' +
          '<span class="visit-label">Live site</span>' +
          '<span class="visit-host">' + esc(host) + "</span>" +
          '<span class="visit-cta">Open the site ↗</span>' +
        "</a>";
    }

    var openLabel = e.type === "pdf" ? "Open the PDF" : "Open in a new tab";
    return '<div class="embed-bar">' +
        '<span class="label">' + (e.type === "pdf" ? "Document" : "Live") + "</span>" +
        '<a class="btn btn-ghost btn-sm" href="' + esc(src) + '" target="_blank" rel="noopener">' + openLabel + " ↗</a>" +
      "</div>" +
      '<iframe class="embed-frame" src="' + esc(src) + '" title="' + esc(p.title) + '" ' +
        'loading="lazy" allowfullscreen></iframe>';
  }

  /* A publication needs its venue and its full author list; a card summary is
     not a citation. Shown only when the entry carries them. */
  function citationHTML(p) {
    if (!p.venue && !p.authors) return "";
    var who = "";
    if (p.authors && p.authors.length) {
      who = '<p class="cite-authors">' + p.authors.map(function (a) {
        return a === (P.name || "")
          ? "<strong>" + esc(a) + "</strong>"
          : esc(a);
      }).join(", ") + "</p>";
    }
    var where = "";
    if (p.venue) {
      where = '<p class="cite-venue"><em>' + esc(p.venue) + "</em>" +
              (p.published ? " · " + esc(p.published) : "") + "</p>";
    }
    return '<div class="citation">' + who + where + "</div>";
  }

  function mountDetail() {
    var host = el("project-detail");
    if (!host) return;

    var slug = new URLSearchParams(location.search).get("p");
    var p = null;
    for (var i = 0; i < ALL.length; i++) if (ALL[i].slug === slug) { p = ALL[i]; break; }

    if (!p) {
      document.title = "Not found · " + (P.name || "");
      host.innerHTML =
        '<div class="wrap-narrow" style="padding-top:80px;padding-bottom:80px">' +
          '<p class="eyebrow">404</p>' +
          "<h1 style=\"font-family:var(--display);font-size:2rem;margin-bottom:12px\">That project isn't here</h1>" +
          '<p class="muted" style="margin-bottom:24px">It may have been renamed, or the link is out of date.</p>' +
          '<a class="btn btn-primary" href="' + u("projects.html") + '">Browse all work</a>' +
        "</div>";
      return;
    }

    /* a post entry should never land here — send it on */
    if (p.href) { location.replace(u(p.href)); return; }

    document.title = p.title + " · " + (P.name || "");
    var status = p.status || "live";
    var tags = (p.tags || []).map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("");
    var links = (p.links || []).map(function (l) {
      return '<a class="btn btn-ghost btn-sm" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + " ↗</a>";
    }).join("");

    var related = ALL.filter(function (x) {
      return x.pillar === p.pillar && x.slug !== p.slug;
    }).sort(byYear).slice(0, 3);

    host.innerHTML =
      '<section class="section" style="padding-bottom:40px"><div class="wrap">' +
        '<p class="eyebrow">' + (function () {
          /* "Research · Research" reads as a mistake; show one label when the
             pillar and the kind happen to carry the same name. */
          var a = pillarOf(p.pillar).title, k = KIND_LABEL[p.kind] || p.kind;
          return esc(a.toLowerCase() === k.toLowerCase() ? a : a + " · " + k);
        })() + "</p>" +
        '<h1 style="font-family:var(--display);font-size:clamp(2rem,4.6vw,3rem);line-height:1.08;letter-spacing:-.03em;margin-bottom:16px">' +
          esc(p.title) + "</h1>" +
        '<p style="font-size:1.13rem;color:var(--ink-2);max-width:66ch;margin-bottom:22px">' + esc(p.summary) + "</p>" +
        citationHTML(p) +
        '<div class="hero-meta">' +
          '<span class="chip">' + esc(STATUS_LABEL[status] || status) + "</span>" +
          '<span class="chip">' + esc(p.year) + "</span>" + tags +
        "</div>" +
        (links ? '<div class="cta-row" style="margin-bottom:8px">' + links + "</div>" : "") +
      "</div></section>" +

      (function () {
        var body = embedHTML(p);
        return body ? '<section style="padding-bottom:72px"><div class="wrap">' + body + "</div></section>" : "";
      })() +

      (related.length
        ? '<section class="section section-alt"><div class="wrap">' +
            '<div class="section-head"><h2>More in ' + esc(pillarOf(p.pillar).title) + "</h2></div>" +
            '<div class="card-grid">' + related.map(cardHTML).join("") + "</div>" +
          "</div></section>"
        : "");
  }

  /* ---------- profile-driven blocks ---------- */
  function mountProfileBits() {
    var h;

    if ((h = el("stats"))) {
      h.innerHTML = (P.stats || []).map(function (s) {
        return '<div class="stat"><div class="v">' + esc(s.value) + '</div><div class="l">' + esc(s.label) + "</div></div>";
      }).join("");
    }

    if ((h = el("pillars"))) {
      h.innerHTML = (P.pillars || []).map(function (p) {
        return '<a class="pillar" data-pillar="' + esc(p.id) + '" href="' + u(p.id + ".html") + '">' +
            '<div class="pi">' + esc(p.icon || "") + "</div>" +
            "<h3>" + esc(p.title) + "</h3>" +
            "<p>" + esc(p.lede) + "</p>" +
            '<span class="more">Explore ' + esc(p.title.toLowerCase()) + " →</span>" +
          "</a>";
      }).join("");
    }

    if ((h = el("hero-meta"))) {
      /* location already appears as the page eyebrow and in the footer */
      var bits = [];
      contactLinks().forEach(function (c) {
        var ext = c[1].indexOf("mailto:") === 0 ? "" : ' target="_blank" rel="noopener"';
        bits.push('<a class="chip" href="' + esc(c[1]) + '"' + ext + ">" + esc(c[0]) + "</a>");
      });
      h.innerHTML = bits.join("");
    }

    if ((h = el("about"))) {
      h.innerHTML = (P.about || []).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");
    }

    if ((h = el("experience"))) {
      h.innerHTML = (P.experience || []).map(function (j) {
        return '<div class="tl-item' + (j.current ? " is-current" : "") + '">' +
            '<div class="tl-head"><h3>' + esc(j.role) + "</h3>" +
              '<span class="tl-org">' + esc(j.org) + "</span>" +
              '<span class="tl-period">' + esc(j.period) + "</span></div>" +
            "<ul>" + (j.points || []).map(function (pt) {
              return "<li><strong>" + esc(pt[0]) + ":</strong> " + esc(pt[1]) + "</li>";
            }).join("") + "</ul>" +
          "</div>";
      }).join("");
    }

    if ((h = el("education"))) {
      h.innerHTML = (P.education || []).map(function (e) {
        return '<div class="tl-item">' +
            '<div class="tl-head"><h3>' + esc(e.degree) +
              (e.note ? ' <span class="muted" style="font-weight:400;font-size:.9rem">· ' + esc(e.note) + "</span>" : "") +
            "</h3>" +
              '<span class="tl-org">' + esc(e.org) + "</span>" +
              '<span class="tl-period">' + esc(e.period) + "</span></div>" +
            "<ul>" + (e.details || []).map(function (d) {
              return "<li><strong>" + esc(d[0]) + ":</strong> " + esc(d[1]) + "</li>";
            }).join("") + "</ul>" +
          "</div>";
      }).join("");
    }

    if ((h = el("skills"))) {
      var sk = P.skills || {};
      h.innerHTML = Object.keys(sk).map(function (g) {
        return '<div class="skill-group"><h4>' + esc(g) + '</h4><div class="skill-tags">' +
          sk[g].map(function (s) { return "<span>" + esc(s) + "</span>"; }).join("") + "</div></div>";
      }).join("");
    }

    function certList(id, arr) {
      var host = el(id);
      if (!host) return;
      host.innerHTML = (arr || []).map(function (c) {
        return '<div class="cert"><b>' + esc(c.title) + "</b><span>" + esc(c.issuer) + "</span></div>";
      }).join("");
    }
    certList("certifications", P.certifications);
    certList("memberships", P.memberships);
    certList("training", P.training);

    if ((h = el("achievements"))) {
      h.innerHTML = (P.achievements || []).map(function (a) {
        return "<li><strong>" + esc(a[0]) + ":</strong> " + esc(a[1]) + "</li>";
      }).join("");
    }

    if ((h = el("activities"))) {
      h.innerHTML = (P.activities || []).map(function (a) {
        return '<div class="pill" style="text-align:left">' +
          '<div style="font-size:1.15rem;margin-bottom:6px">' + esc(a.icon) + "</div>" +
          "<strong>" + esc(a.title) + "</strong>" +
          '<p class="muted" style="font-size:.86rem;font-weight:400;margin:6px 0 0">' + esc(a.text) + "</p></div>";
      }).join("");
    }

    if ((h = el("languages"))) {
      h.innerHTML = (P.languages || []).map(function (l) { return "<span>" + esc(l) + "</span>"; }).join("");
    }

    if ((h = el("research-interests"))) {
      h.innerHTML = ((P.research || {}).interests || []).map(function (i) {
        return '<div class="pill">' + esc(i) + "</div>";
      }).join("");
    }

    /* <a data-profile-link="linkedin"> takes its href from the profile, so a
       contact link is never hardcoded into a page and cannot drift. An empty
       field hides the link rather than leaving it pointing nowhere. */
    Array.prototype.forEach.call(document.querySelectorAll("[data-profile-link]"), function (a) {
      var v = P[a.getAttribute("data-profile-link")];
      if (v) {
        a.setAttribute("href", v);
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
      } else {
        a.hidden = true;
      }
    });

    /* simple text slots */
    Array.prototype.forEach.call(document.querySelectorAll("[data-profile]"), function (n) {
      var path = n.getAttribute("data-profile").split(".");
      var v = P;
      for (var i = 0; i < path.length && v != null; i++) v = v[path[i]];
      if (v != null) n.textContent = v;
    });
  }

  /* ---------- boot ---------- */
  function boot() {
    renderHeader();
    renderFooter();
    mountProfileBits();
    mountLists();
    mountFeatureEmbed();
    mountArchive();
    mountDetail();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
