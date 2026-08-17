/* ============================================================
   CGS Carbon — shared behavior for every page.
   Mobile drawer, mega-menu dropdowns, scroll reveal,
   inquiry form prototype, and footer year.
   Loaded with `defer` after the header/footer partials.
   ============================================================ */
(function () {
  'use strict';
  var d = document;

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

  /* ---- scroll reveal ---- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = [].slice.call(d.querySelectorAll('.reveal'));
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px' });
    els.forEach(function (el) { io.observe(el); });
  }

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
