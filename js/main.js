(function () {
  'use strict';

  // Iconos de trazo (24x24, estilo Feather/Lucide, licencia MIT).
  var icons = {
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>'
  };

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function iconNode(name) {
    var wrap = el('span', 'ico');
    wrap.setAttribute('aria-hidden', 'true');
    wrap.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" ' +
      'stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false">' +
      (icons[name] || '') + '</svg>';
    return wrap;
  }

  var links = (window.SITE && window.SITE.links) || [];
  var list = document.getElementById('links');

  if (list) {
    links.forEach(function (item) {
      var li = el('li', item.primary ? 'tile-item primary' : 'tile-item');
      var a = el('a', 'tile');
      a.href = item.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';

      var top = el('span', 'tile-top');
      top.appendChild(iconNode(item.icon));
      var arrow = el('span', 'arr', '↗');
      arrow.setAttribute('aria-hidden', 'true');
      top.appendChild(arrow);

      var body = el('span', 'tile-body');
      body.appendChild(el('span', 't', item.title));
      body.appendChild(el('span', 'a', item.detail));
      body.appendChild(el('span', 'sr-only', ' (se abre en una pestaña nueva)'));

      a.appendChild(top);
      a.appendChild(body);
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  // Los botones principales apuntan al enlace marcado como primary.
  var primary = links.filter(function (l) { return l.primary; })[0];
  if (primary) {
    document.querySelectorAll('[data-link-primary]').forEach(function (a) {
      a.href = primary.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    });
  }

  var year = document.getElementById('anio');
  if (year) year.textContent = new Date().getFullYear();

  // Aparición suave de secciones al hacer scroll (se omite con reduced motion).
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var blocks = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduce) {
    blocks.forEach(function (b) { b.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    blocks.forEach(function (b) { io.observe(b); });
  }
})();
