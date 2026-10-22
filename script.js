/* =====================================================================
   SITE ENGINE  -  builds the page from content.js and handles the clicks
   (filters, case-study pop-ups, light/dark toggle).
   You normally never need to edit this file. Text lives in content.js,
   colors and fonts live in style.css.
   ===================================================================== */
(function () {
  'use strict';

  var root = document.getElementById('site');
  if (!root) return;

  function showError(detail) {
    var box = document.createElement('div');
    box.setAttribute('style', 'max-width:640px;margin:4rem auto;padding:1.5rem;border:1px solid #c44;border-radius:8px;font:15px/1.6 sans-serif;color:#c44;background:#fff5f5');
    box.textContent = 'The page content could not be loaded. If you just edited content.js, look for a missing "quote" or comma near your change, or revert the last change from the file\'s History on GitHub.' + (detail ? ' (' + detail + ')' : '');
    root.replaceChildren(box);
  }

  if (typeof SITE === 'undefined') {
    showError('content.js did not load');
    return;
  }

  try {
    build(SITE);
  } catch (err) {
    console.error(err);
    showError(err && err.message);
  }

  /* ------------------------------------------------------------------ */

  function el(tag, opts, children) {
    var n = document.createElement(tag);
    opts = opts || {};
    if (opts.cls) n.className = opts.cls;
    if (opts.id) n.id = opts.id;
    if (opts.text != null) n.textContent = opts.text;
    if (opts.style) n.setAttribute('style', opts.style);
    if (opts.attrs) for (var k in opts.attrs) n.setAttribute(k, opts.attrs[k]);
    (children || []).forEach(function (c) { if (c != null) n.append(c); });
    return n;
  }

  function build(S) {
    var L = S.links;
    var DOTS = ['cyan', 'purple', 'gold', 'teal'];

    function href(item) {
      if (item.link === 'email') return 'mailto:' + L.email;
      if (item.link === 'linkedin') return L.linkedin;
      if (item.link === 'site') return L.site;
      return item.url;
    }
    function anchor(item, cls) {
      var h = href(item);
      var a = el('a', { cls: cls, text: item.label, attrs: { href: h } });
      if (h.indexOf('mailto:') !== 0) a.setAttribute('target', '_blank');
      return a;
    }
    function bare(url) { return url.replace(/^https?:\/\//, '').replace(/\/$/, ''); }

    function windowShell(id, fileName, index) {
      var body = el('div', { cls: 'file-body' });
      var w = el('div', { cls: 'file-window', id: id }, [
        el('div', { cls: 'file-tab-bar' }, [
          el('span', { cls: 'file-dot', style: 'background: var(--accent-' + DOTS[index % DOTS.length] + ');' }),
          el('span', { cls: 'filename', text: fileName }),
          el('span', { cls: 'close', text: '×' })
        ]),
        body
      ]);
      return { win: w, body: body };
    }

    function subtitle(text, hint, hintFirst) {
      text = text || '';
      if (!text && hint) return el('div', { cls: 'section-sub screen-only', text: hint });
      var d = el('div', { cls: 'section-sub' });
      if (hint && hintFirst) d.append(el('span', { cls: 'screen-only', text: hint + ' ' }));
      d.append(text);
      if (hint && !hintFirst) d.append(el('span', { cls: 'screen-only', text: ' ' + hint }));
      return d;
    }

    /* ---------- top bar ---------- */
    var H = S.header;
    var toggle = el('div', { cls: 'theme-toggle' });
    var header = el('header', { cls: 'workspace-header' }, [
      el('div', { cls: 'container workspace-header-inner' }, [
        el('div', { cls: 'breadcrumb' }, [
          el('span', { cls: 'traffic' }, [el('span'), el('span'), el('span')]),
          el('strong', { text: H.name }),
          el('span', { cls: 'crumb-mid' }, [el('span', { cls: 'sep', text: '/' }), H.section]),
          el('span', { cls: 'sep', text: '/' }),
          el('span', { cls: 'branch', text: '⎇ ' + H.branch })
        ]),
        el('div', { cls: 'header-right' }, [
          el('span', { cls: 'breadcrumb saved', text: H.status }),
          toggle
        ])
      ])
    ]);

    var container = el('div', { cls: 'container' });

    /* ---------- printed header (only shows when printing / saving as PDF) ---------- */
    var P = S.profile;
    container.append(el('div', { cls: 'print-only print-masthead' }, [
      el('strong', { text: P.name }),
      ' · ' + P.location + ' · ',
      el('a', { text: L.email, attrs: { href: 'mailto:' + L.email } }), ' · ',
      el('a', { text: bare(L.linkedin), attrs: { href: L.linkedin } }), ' · ',
      el('a', { text: bare(L.site), attrs: { href: L.site } })
    ]));

    /* ---------- hero ---------- */
    container.append(el('section', { cls: 'hero' }, [
      el('div', { cls: 'hero-label', text: S.hero.label }),
      el('h1', { text: S.hero.headline }),
      el('p', { text: S.hero.text })
    ]));

    /* ---------- 1 overview ---------- */
    var O = S.overview;
    var ov = windowShell('overview', O.fileName, 0);
    var noteCmd = el('span', { id: 'noteCmd', text: '--' + O.notes[0].command });
    var noteOut = el('div', { cls: 'note-output', id: 'noteOutput', text: O.notes[0].text });
    var noteBtns = O.notes.map(function (n, i) {
      var b = el('button', { cls: 'note-btn' + (i === 0 ? ' active' : ''), text: '--' + n.command });
      b.addEventListener('click', function () {
        noteBtns.forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        noteCmd.textContent = '--' + n.command;
        noteOut.textContent = n.text;
      });
      return b;
    });
    ov.body.append(
      el('div', { cls: 'section-title', text: O.title }),
      subtitle('', O.prompt),
      el('div', { cls: 'notes-panel' }, [
        el('div', { cls: 'notes-title', text: O.shell }),
        el('div', { cls: 'note-buttons' }, noteBtns),
        el('div', { cls: 'note-prompt' }, [el('span', { cls: 'user', text: O.user }), ':~$ notes ', noteCmd]),
        noteOut
      ]),
      el('div', { cls: 'print-only', id: 'printNotes' }, O.notes.map(function (n) {
        return el('div', { cls: 'print-note' }, [
          el('div', { cls: 'print-note-label', text: '--' + n.command }),
          el('p', { text: n.text })
        ]);
      }))
    );
    container.append(ov.win);

    /* ---------- 2 profile ---------- */
    var pr = windowShell('profile', P.fileName, 1);
    pr.body.append(el('div', { cls: 'ticket' }, [
      el('div', { cls: 'ticket-status', text: P.status }),
      el('div', { cls: 'ticket-id', text: P.ticketId }),
      el('h2', { text: P.name }),
      el('div', { cls: 'role', text: P.role }),
      el('div', { cls: 'loc', text: P.location }),
      el('div', { cls: 'ticket-actions' }, P.buttons.map(function (b) { return anchor(b, b.primary ? 'primary' : ''); })),
      el('div', { cls: 'ticket-stats' }, P.stats.map(function (s) {
        return el('div', { cls: 'stat' }, [el('div', { cls: 'val', text: s.value }), el('div', { cls: 'lbl', text: s.label })]);
      }))
    ]));
    container.append(pr.win);

    /* ---------- 3 experience ---------- */
    var E = S.experience;
    var ex = windowShell('experience', E.fileName, 2);
    ex.body.append(
      el('div', { cls: 'section-title', text: E.title }),
      subtitle(E.subtitle),
      el('div', { cls: 'roadmap' }, E.items.map(function (it) {
        return el('div', { cls: 'roadmap-item' + (it.now ? ' now' : '') }, [
          el('div', { cls: 'roadmap-tag', text: it.tag }),
          el('div', { cls: 'role', text: it.title }),
          el('div', { cls: 'meta', text: it.dates }),
          el('div', { cls: 'blurb', text: it.text })
        ]);
      }))
    );
    container.append(ex.win);

    /* ---------- 4 case studies (cards + pop-ups) ---------- */
    var C = S.cases;
    var cs = windowShell('cases', C.fileName, 3);
    var modals = [];
    function closeAll() { modals.forEach(function (m) { m.classList.remove('active'); }); document.body.style.overflow = 'auto'; }
    function openModal(m) { m.classList.add('active'); document.body.style.overflow = 'hidden'; }

    function detailSection(d) {
      var content;
      if (d.text != null) content = el('p', { text: d.text });
      else if (d.bullets) content = el('ul', { cls: d.style === 'dots' ? 'dots' : '' }, d.bullets.map(function (t) { return el('li', { text: t }); }));
      else if (d.steps) content = el('div', { cls: 'flow' }, d.steps.map(function (t) { return el('span', { cls: 'flow-step', text: t }); }));
      else if (d.decisions) content = el('div', { cls: 'decisions' }, d.decisions.map(function (x) {
        return el('div', { cls: 'decision' }, [el('strong', { text: x.title }), el('p', { text: x.text })]);
      }));
      else if (d.before != null) content = el('div', { cls: 'compare' }, [
        el('div', { cls: 'compare-col before' }, [el('div', { cls: 'compare-label', text: 'Before' }), el('p', { text: d.before })]),
        el('div', { cls: 'compare-col after' }, [el('div', { cls: 'compare-label', text: 'After' }), el('p', { text: d.after })])
      ]);
      else content = el('p', { text: '' });
      return el('div', { cls: 'modal-section' }, [el('h4', { text: d.heading }), content]);
    }

    var cards = C.items.map(function (item, i) {
      var num = String(i + 1);
      if (num.length < 2) num = '0' + num;
      var modal = el('div', { cls: 'modal', id: 'modal' + (i + 1) }, [
        el('div', { cls: 'modal-content' }, [
          (function () { var b = el('button', { cls: 'modal-close', text: '×' }); b.addEventListener('click', closeAll); return b; })(),
          el('h2', { text: item.title })
        ].concat((item.details || []).map(detailSection)))
      ]);
      modal.addEventListener('click', function (e) { if (e.target === modal) closeAll(); });
      modals.push(modal);

      var card = el('div', { cls: 'board-card' }, [
        el('div', { cls: 'card-id', text: 'CASE-' + num + ' · ' + item.tag }),
        el('div', { cls: 'tag', text: item.tag }),
        el('h3', { text: item.title }),
        el('div', { cls: 'constraint', text: item.summary }),
        el('div', { cls: 'chips' }, (item.chips || []).map(function (c) { return el('span', { text: c }); })),
        el('div', { cls: 'open-cta', text: 'Open ticket →' })
      ]);
      card.addEventListener('click', function () { openModal(modal); });
      return card;
    });
    cs.body.append(el('div', { cls: 'section-title', text: C.title }), subtitle('', C.hint), el('div', { cls: 'board-scroll' }, cards));
    modals.forEach(function (m) { cs.body.append(m); });
    container.append(cs.win);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(); });

    /* ---------- filterable tag clouds (skills, brands) ---------- */
    function cloud(groups) {
      var total = groups.reduce(function (n, g) { return n + g.items.length; }, 0);
      var pills = [];
      var chips = [];

      function pill(label, count, cat, color) {
        var b = el('button', { cls: 'filter-pill' + (cat === 'all' ? ' active' : ''), attrs: { 'data-cat': cat } }, [
          label + ' ', el('span', { cls: 'pill-count', text: String(count) })
        ]);
        if (color) b.setAttribute('style', '--pill-color: var(--accent-' + color + ');');
        b.addEventListener('click', function () {
          pills.forEach(function (p) { p.classList.remove('active'); });
          b.classList.add('active');
          chips.forEach(function (c) { c.classList.toggle('chip-hidden', cat !== 'all' && c.getAttribute('data-cat') !== cat); });
        });
        pills.push(b);
        return b;
      }

      pill('All', total, 'all');
      groups.forEach(function (g, i) { pill(g.label, g.items.length, 'g' + i, g.color); });
      groups.forEach(function (g, i) {
        g.items.forEach(function (t) {
          chips.push(el('span', { cls: 'tag-chip', text: t, attrs: { 'data-cat': 'g' + i }, style: '--chip-color: var(--accent-' + g.color + ');' }));
        });
      });
      return { total: total, bar: el('div', { cls: 'filter-bar' }, pills), cloud: el('div', { cls: 'tag-cloud' }, chips) };
    }

    /* ---------- 5 skills ---------- */
    var K = S.skills;
    var sk = windowShell('skills', K.fileName, 4);
    var skCloud = cloud(K.groups);
    sk.body.append(el('div', { cls: 'section-title', text: K.title }), subtitle(K.subtitle, K.hint, K.hintFirst), skCloud.bar, skCloud.cloud);
    container.append(sk.win);

    /* ---------- 6 education ---------- */
    var D = S.education;
    var ed = windowShell('education', D.fileName, 5);
    ed.body.append(
      el('div', { cls: 'section-title', text: D.title }),
      subtitle(D.subtitle),
      el('div', { cls: 'credentials' }, D.items.map(function (it) {
        return el('div', { cls: 'credential-item' }, [
          el('div', { cls: 'credential-title', text: it.title }),
          el('div', { cls: 'credential-meta', text: it.meta }),
          it.text ? el('div', { cls: 'credential-desc', text: it.text }) : null
        ]);
      }))
    );
    container.append(ed.win);

    /* ---------- 7 brands ---------- */
    var B = S.brands;
    var br = windowShell('brands', B.fileName, 6);
    var brCloud = cloud(B.groups);
    br.body.append(
      el('div', { cls: 'section-title', text: B.title }),
      subtitle(B.subtitle.replace('{total}', brCloud.total), B.hint),
      el('div', { cls: 'ticket-stats mini-stats' }, B.groups.map(function (g) {
        return el('div', { cls: 'stat' }, [el('div', { cls: 'val', text: String(g.items.length) }), el('div', { cls: 'lbl', text: g.statLabel || g.label })]);
      })),
      brCloud.bar, brCloud.cloud
    );
    container.append(br.win);

    /* ---------- 8 contact ---------- */
    var T = S.contact;
    var ct = windowShell('contact', T.fileName, 7);
    ct.body.append(
      el('div', { cls: 'log-entry' }, [el('span', { text: '##' }), ' ' + T.logLine]),
      el('div', { cls: 'contact-grid' }, T.columns.map(function (col) {
        return el('div', { cls: 'contact-col' }, [
          el('h4', { text: col.title }),
          el('ul', {}, col.links.map(function (l) { return el('li', {}, [anchor(l)]); }))
        ]);
      })),
      el('div', { cls: 'tagline', text: T.copyright })
    );
    container.append(ct.win);

    /* ---------- theme toggle ---------- */
    function applyTheme(t) {
      document.documentElement.setAttribute('data-theme', t);
      toggle.classList.toggle('dark', t === 'dark');
    }
    toggle.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked: toggle still works for this visit */ }
    });
    applyTheme(document.documentElement.getAttribute('data-theme') || 'dark');

    root.replaceChildren(header, container);
  }
})();
