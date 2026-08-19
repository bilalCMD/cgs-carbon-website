/* ============================================================
   CGS Carbon — shared behavior for every page.
   Mobile drawer, mega-menu dropdowns, scroll reveals with stagger,
   header state, scroll progress, number count-up, hero parallax,
   and the inquiry form prototype.
   Loaded with `defer` after the header/footer partials.
   ============================================================ */
(function () {
  'use strict';
  var d = document;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- mobile drawer ---- */
  var burger = d.querySelector('.burger'),
      nav = d.querySelector('.nav'),
      scrim = d.querySelector('.navscrim');

  function setDrawer(open) {
    if (!nav || !burger) return;
    nav.classList.toggle('open', open);
    if (scrim) scrim.classList.toggle('on', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    d.body.style.overflow = open && window.matchMedia('(max-width:900px)').matches ? 'hidden' : '';
  }
  if (burger) {
    burger.addEventListener('click', function () {
      setDrawer(burger.getAttribute('aria-expanded') !== 'true');
    });
  }
  if (scrim) scrim.addEventListener('click', function () { setDrawer(false); });

  /* ---- dropdowns: hover on desktop, click everywhere, Esc to close ---- */
  var items = [].slice.call(d.querySelectorAll('.nav li.has-mega'));
  var desktop = function () { return window.matchMedia('(min-width:901px)').matches; };

  function closeAll(except) {
    items.forEach(function (li) {
      if (li === except) return;
      li.classList.remove('open');
      var b = li.querySelector('.navlink');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }
  items.forEach(function (li) {
    var btn = li.querySelector('.navlink');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var open = !li.classList.contains('open');
      closeAll(li);
      li.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    li.addEventListener('mouseenter', function () {
      if (!desktop()) return;
      closeAll(li);
      li.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    });
    li.addEventListener('mouseleave', function () {
      if (!desktop()) return;
      li.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
  d.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeAll(null); setDrawer(false); }
  });
  d.addEventListener('click', function (e) {
    if (!e.target.closest('.nav')) closeAll(null);
  });
  window.addEventListener('resize', function () {
    if (desktop()) { setDrawer(false); d.body.style.overflow = ''; }
  });

  /* ---- stagger: cards in a grid arrive one after another ---- */
  if (!reduced) {
    [].slice.call(d.querySelectorAll('.grid, .f-cols, .glossary')).forEach(function (group) {
      var kids = [].slice.call(group.children).filter(function (el) {
        return el.classList.contains('reveal');
      });
      kids.forEach(function (el, i) {
        el.style.setProperty('--rd', (i * 90) + 'ms');
      });
    });
  }

  /* ---- scroll reveal ---- */
  var els = [].slice.call(d.querySelectorAll('.reveal'));
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- count up any figure that starts with a number ---- */
  function countUp(el) {
    var raw = el.textContent.trim();
    var m = raw.match(/^(\d[\d,]*)(.*)$/);
    if (!m) return;
    var target = parseInt(m[1].replace(/,/g, ''), 10);
    var suffix = m[2];
    if (!target || target > 100000) return;
    var dur = 1100, start = null;
    // long values (a year) look better counting from a near miss than from zero
    var from = target > 999 ? target - 40 : 0;
    function step(ts) {
      if (start === null) start = ts;
      var t = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      var val = Math.round(from + (target - from) * eased);
      el.textContent = val + suffix;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if (!reduced && 'IntersectionObserver' in window) {
    var numEls = [].slice.call(d.querySelectorAll('.herofacts .k, .stat .k'))
      .filter(function (el) { return /^\d/.test(el.textContent.trim()); });
    var numIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { countUp(en.target); numIo.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    numEls.forEach(function (el) { numIo.observe(el); });
  }

  /* ---- header state + scroll progress ---- */
  var header = d.querySelector('.site-header');
  var bar = d.createElement('div');
  bar.className = 'scroll-progress';
  if (!reduced) d.body.appendChild(bar);

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.pageYOffset || d.documentElement.scrollTop;
      if (header) header.classList.toggle('scrolled', y > 40);

      if (!reduced) {
        var h = d.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';

        /* gentle parallax on photographic page heroes */
        var ph = d.querySelector('.page-hero.on-photo');
        if (ph && y < window.innerHeight) {
          ph.style.backgroundPosition = 'center calc(50% + ' + (y * 0.15) + 'px)';
        }
      }
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- inquiry form (front-end prototype) ---- */
  var form = d.querySelector('form.inquiry');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var ok = d.getElementById('form-ok');
      form.hidden = true;
      if (ok) {
        ok.hidden = false;
        ok.setAttribute('tabindex', '-1');
        ok.focus();
        ok.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
      }
    });
  }

  /* ---- current year ---- */
  [].slice.call(d.querySelectorAll('[data-year]')).forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
