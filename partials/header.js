/* ============================================================
   CGS Carbon — shared site header partial.
   Copy follows the Website Copy Deck (v8).
   Edit the markup here once; every page picks it up via
   <script src="partials/header.js"></script>.
   ============================================================ */
(function () {
  'use strict';
  var ARROW = '<span class="ico" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
  var CHEV = '<svg class="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var html =
    '<div class="topbar"><div class="wrap">' +
      '<div><strong>CGS Carbon, Inc.</strong></div>' +
      '<div class="tb-r">Processing Activated Carbon &middot; Established 2008 &middot; Columbiana, Ohio</div>' +
    '</div></div>' +

    '<header class="site-header">' +
      '<div class="wrap hdr">' +
        '<a class="brand" href="index.html" aria-label="CGS Carbon &mdash; home">' +
          '<img src="assets/img/logo-mark.svg" alt="" width="42" height="42">' +
          '<span class="brand-txt">' +
            '<span class="brand-name">CGS <span>Carbon</span></span>' +
          '</span>' +
        '</a>' +
        '<button class="burger" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu"><span></span><span></span><span></span></button>' +
        '<nav class="nav" id="primary-nav" aria-label="Primary">' +
          '<ul>' +

            '<li class="has-mega" data-page="services.html">' +
              '<button class="navlink" type="button" aria-expanded="false">Services' + CHEV + '</button>' +
              '<ul class="mega">' +
                '<li><a href="services.html"><span class="mt">Services &amp; capabilities</span><span class="md">Pulverizing, screening and blending to spec</span></a></li>' +
                '<li><a href="services.html#capabilities"><span class="mt">Built around the ball mill</span><span class="md">6&#39;x12&#39; ball mill with dynamic classifier</span></a></li>' +
                '<li><a href="services.html#logistics"><span class="mt">Packaging &amp; delivery</span><span class="md">From supersacks to rail car</span></a></li>' +
                '<li><a href="services.html#requirements"><span class="mt">Custom processing for your requirements</span><span class="md">What we need to know to quote</span></a></li>' +
              '</ul>' +
            '</li>' +

            '<li data-page="hok-activated-lignite.html"><a class="navlink" href="hok-activated-lignite.html">Products</a></li>' +

            '<li class="has-mega" data-page="applications.html">' +
              '<button class="navlink" type="button" aria-expanded="false">Applications &amp; Industries' + CHEV + '</button>' +
              '<ul class="mega">' +
                '<li><a href="applications.html"><span class="mt">Applications &amp; industries</span><span class="md">From water treatment to steel production</span></a></li>' +
                '<li><a href="applications.html#industries"><span class="mt">Where our carbon goes to work</span><span class="md">Water, air, process and environmental duty</span></a></li>' +
              '</ul>' +
            '</li>' +

            '<li class="has-mega" data-page="about.html">' +
              '<button class="navlink" type="button" aria-expanded="false">About' + CHEV + '</button>' +
              '<ul class="mega">' +
                '<li><a href="about.html"><span class="mt">About the company</span><span class="md">Ohio-based, established in 2008</span></a></li>' +
                '<li><a href="about.html#facility"><span class="mt">Our facility</span><span class="md">Columbiana, Ohio</span></a></li>' +
              '</ul>' +
            '</li>' +

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
