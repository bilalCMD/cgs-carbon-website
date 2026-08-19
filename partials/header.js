/* ============================================================
   Columbiana Grinding Services — shared site header partial.
   Edit the markup here once; every page picks it up via
   <script src="partials/header.js"></script>.
   Copy is limited to statements verified on columbianagrinding.com.
   ============================================================ */
(function () {
  'use strict';
  var ARROW = '<span class="ico" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';

  var html =
    '<div class="topbar"><div class="wrap">' +
      '<div><strong>Columbiana Grinding Services, LLC</strong> &mdash; Processing Activated Carbon</div>' +
      '<div class="tb-r">Established 2008 &middot; Columbiana, Ohio</div>' +
    '</div></div>' +

    '<header class="site-header">' +
      '<div class="wrap hdr">' +
        '<a class="brand" href="index.html" aria-label="Columbiana Grinding Services &mdash; home">' +
          '<img src="assets/img/logo-mark.svg" alt="" width="42" height="42">' +
          '<span class="brand-txt">' +
            '<span class="brand-name">Columbiana <span>Grinding</span></span>' +
            '<span class="brand-sub">Services, LLC</span>' +
          '</span>' +
        '</a>' +
        '<button class="burger" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu"><span></span><span></span><span></span></button>' +
        '<nav class="nav" id="primary-nav" aria-label="Primary">' +
          '<ul>' +
            '<li data-page="about.html"><a class="navlink" href="about.html">About</a></li>' +
            '<li data-page="services.html"><a class="navlink" href="services.html">Services</a></li>' +
            '<li data-page="hok-activated-lignite.html"><a class="navlink" href="hok-activated-lignite.html">HOK&reg; Lignite</a></li>' +
            '<li data-page="industries.html"><a class="navlink" href="industries.html">Industries</a></li>' +
          '</ul>' +
          '<div class="mob-cta"><a class="btn btn-primary" href="contact.html">Contact Us' + ARROW + '</a></div>' +
        '</nav>' +
        '<div class="hdr-cta"><a class="btn btn-primary" href="contact.html">Contact Us' + ARROW + '</a></div>' +
      '</div>' +
    '</header>' +
    '<div class="navscrim"></div>';

  document.currentScript.insertAdjacentHTML('beforebegin', html);

  /* Highlight the nav item for the page being viewed */
  var file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
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
