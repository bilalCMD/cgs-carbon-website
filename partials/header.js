/* ============================================================
   CGS Carbon — shared site header partial.
   Copy follows the Website Copy Deck (v8).
   Edit the markup here once; every page picks it up via
   <script src="partials/header.js"></script>.
   ============================================================ */
(function () {
  'use strict';
  var ARROW = '<span class="ico" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';

  var html =
    '<header class="site-header">' +
      '<div class="wrap hdr">' +
        '<a class="brand" href="/" aria-label="CGS Carbon &mdash; home">' +
          '<img src="assets/img/logo-mark.svg" alt="" width="42" height="42">' +
          '<span class="brand-txt">' +
            '<span class="brand-name">CGS <span>Carbon</span></span>' +
          '</span>' +
        '</a>' +
        '<button class="burger" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu"><span></span><span></span><span></span></button>' +
        '<nav class="nav" id="primary-nav" aria-label="Primary">' +
          '<ul>' +
            '<li data-page="services"><a class="navlink" href="services">Services</a></li>' +
            '<li data-page="hok-activated-lignite"><a class="navlink" href="hok-activated-lignite">HOK&reg;</a></li>' +
            '<li data-page="applications"><a class="navlink" href="applications">Applications &amp; Industries</a></li>' +
            '<li data-page="about"><a class="navlink" href="about">About</a></li>' +
          '</ul>' +
          '<div class="mob-cta"><a class="btn btn-primary" href="contact">Contact Us' + ARROW + '</a></div>' +
        '</nav>' +
        '<div class="hdr-cta"><a class="btn btn-primary" href="contact">Contact Us' + ARROW + '</a></div>' +
      '</div>' +
    '</header>' +
    '<div class="navscrim"></div>';

  document.currentScript.insertAdjacentHTML('beforebegin', html);

  /* Highlight the nav item for the page being viewed */
  var file = (location.pathname.split('/').pop() || 'index').toLowerCase().replace(/\.html$/, '');
  var lis = document.querySelectorAll('#primary-nav > ul > li[data-page]');
  for (var i = 0; i < lis.length; i++) {
    if (lis[i].getAttribute('data-page').split(' ').indexOf(file) !== -1) {
      var link = lis[i].querySelector('.navlink');
      if (link) {
        link.classList.add('is-active');
        if (link.tagName === 'A') link.setAttribute('aria-current', 'page');
      }
    }
  }
})();
