/* ============================================================
   CGS Carbon — shared site header partial.
   Edit the markup here once; every page picks it up via
   <script src="partials/header.js"></script>.
   ============================================================ */
(function () {
  'use strict';
  var ARROW = '<span class="ico" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
  var CHEV = '<svg class="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var html =
    '<div class="topbar"><div class="wrap">' +
      '<div><strong>CGS Carbon, Inc.</strong> &mdash; a subsidiary of Birchtech</div>' +
      '<div class="tb-r">Processing Activated Carbon &middot; Established 2008 &middot; Columbiana, Ohio</div>' +
    '</div></div>' +

    '<header class="site-header">' +
      '<div class="wrap hdr">' +
        '<a class="brand" href="index.html" aria-label="CGS Carbon &mdash; home">' +
          '<img src="assets/img/logo-mark.svg" alt="" width="42" height="42">' +
          '<span class="brand-txt">' +
            '<span class="brand-name">CGS <span>Carbon</span></span>' +
            '<span class="brand-sub">A Birchtech Company</span>' +
          '</span>' +
        '</a>' +
        '<button class="burger" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu"><span></span><span></span><span></span></button>' +
        '<nav class="nav" id="primary-nav" aria-label="Primary">' +
          '<ul>' +

            '<li class="has-mega" data-page="services.html hok-activated-lignite.html">' +
              '<button class="navlink" type="button" aria-expanded="false">Services' + CHEV + '</button>' +
              '<ul class="mega">' +
                '<li><a href="services.html"><span class="mt">Activated carbon processing</span><span class="md">What we do and how to start</span></a></li>' +
                '<li><a href="services.html#grinding"><span class="mt">Grinding carbon</span><span class="md">The specialization developed since 2008</span></a></li>' +
                '<li><a href="services.html#requirements"><span class="mt">Discussing a requirement</span><span class="md">What to tell us about your material</span></a></li>' +
                '<li><a href="hok-activated-lignite.html"><span class="mt">HOK&reg; Activated Lignite</span><span class="md">Our stated specialty product</span></a></li>' +
              '</ul>' +
            '</li>' +

            '<li class="has-mega" data-page="applications.html">' +
              '<button class="navlink" type="button" aria-expanded="false">Applications' + CHEV + '</button>' +
              '<ul class="mega">' +
                '<li><a href="applications.html#water"><span class="mt">Water treatment</span><span class="md">Where activated carbon is applied in water</span></a></li>' +
                '<li><a href="applications.html#air"><span class="mt">Air &amp; gas purification</span><span class="md">Vapour-phase and gas-stream duty</span></a></li>' +
                '<li><a href="applications.html#process"><span class="mt">Process &amp; product purification</span><span class="md">Decolourising and purification duty</span></a></li>' +
                '<li><a href="applications.html#environmental"><span class="mt">Environmental &amp; industrial</span><span class="md">Remediation and industrial streams</span></a></li>' +
              '</ul>' +
            '</li>' +

            '<li data-page="industries.html"><a class="navlink" href="industries.html">Industries</a></li>' +

            '<li class="has-mega" data-page="about.html">' +
              '<button class="navlink" type="button" aria-expanded="false">About' + CHEV + '</button>' +
              '<ul class="mega">' +
                '<li><a href="about.html"><span class="mt">About the company</span><span class="md">Privately held, established in 2008</span></a></li>' +
                '<li><a href="about.html#specialty"><span class="mt">Our specialty</span><span class="md">HOK&reg; Activated Lignite</span></a></li>' +
                '<li><a href="about.html#location"><span class="mt">Our facility</span><span class="md">Columbiana, Ohio</span></a></li>' +
              '</ul>' +
            '</li>' +

            '<li class="has-mega" data-page="resources.html news.html">' +
              '<button class="navlink" type="button" aria-expanded="false">Resources' + CHEV + '</button>' +
              '<ul class="mega">' +
                '<li><a href="resources.html"><span class="mt">Documentation</span><span class="md">Product and safety documentation on request</span></a></li>' +
                '<li><a href="resources.html#faq"><span class="mt">FAQ</span><span class="md">Common questions about our processing</span></a></li>' +
                '<li><a href="resources.html#glossary"><span class="mt">Glossary</span><span class="md">Activated carbon terminology</span></a></li>' +
                '<li><a href="news.html"><span class="mt">News &amp; insights</span><span class="md">Company updates and working notes</span></a></li>' +
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
