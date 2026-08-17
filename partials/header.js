/* ============================================================
   CGS Carbon — shared site header partial.
   Edit the markup here once; every page picks it up via
   <script src="partials/header.js"></script>.
   Injected synchronously during parse so there is no layout flash.
   ============================================================ */
(function () {
  'use strict';
  var ARROW = '<span class="ico" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
  var CHEV = '<svg class="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var html =
    '<div class="topbar"><div class="wrap">' +
      '<div><strong>CGS Carbon, Inc.</strong> &mdash; a subsidiary of Birchtech</div>' +
      '<div class="tb-r">Supplier of HOK&reg; Activated Lignite &middot; Manufactured by RWE, Germany</div>' +
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

            '<li class="has-mega" data-page="hok-activated-lignite.html">' +
              '<button class="navlink" type="button" aria-expanded="false">HOK&reg; Lignite' + CHEV + '</button>' +
              '<ul class="mega">' +
                '<li><a href="hok-activated-lignite.html"><span class="mt">Product overview</span><span class="md">What HOK&reg; is and how it works</span></a></li>' +
                '<li><a href="hok-activated-lignite.html#grades"><span class="mt">Product grades</span><span class="md">Four particle-size grades, powder to granules</span></a></li>' +
                '<li><a href="hok-activated-lignite.html#technical"><span class="mt">Technical data</span><span class="md">Typical reference values and quality system</span></a></li>' +
                '<li><a href="hok-activated-lignite.html#supply"><span class="mt">Packaging &amp; supply</span><span class="md">Bulk, big bags, and container delivery</span></a></li>' +
              '</ul>' +
            '</li>' +

            '<li class="has-mega" data-page="applications.html">' +
              '<button class="navlink" type="button" aria-expanded="false">Applications' + CHEV + '</button>' +
              '<ul class="mega">' +
                '<li><a href="applications.html#biological"><span class="mt">Biological wastewater</span><span class="md">Powder dosed into the biological stage</span></a></li>' +
                '<li><a href="applications.html#adsorptive"><span class="mt">Adsorptive treatment</span><span class="md">Suspension and fixed-bed configurations</span></a></li>' +
                '<li><a href="applications.html#industrial"><span class="mt">Industrial &amp; leachate</span><span class="md">Effluents with demanding contaminant loads</span></a></li>' +
                '<li><a href="applications.html#drinking"><span class="mt">Drinking water &amp; gas</span><span class="md">Filter media and waste gas cleaning</span></a></li>' +
              '</ul>' +
            '</li>' +

            '<li data-page="industries.html"><a class="navlink" href="industries.html">Industries</a></li>' +

            '<li class="has-mega" data-page="about.html">' +
              '<button class="navlink" type="button" aria-expanded="false">About' + CHEV + '</button>' +
              '<ul class="mega">' +
                '<li><a href="about.html"><span class="mt">About CGS Carbon</span><span class="md">Who we are and what we supply</span></a></li>' +
                '<li><a href="about.html#birchtech"><span class="mt">Our parent company</span><span class="md">How CGS Carbon fits within Birchtech</span></a></li>' +
                '<li><a href="about.html#manufacturing"><span class="mt">Manufacturing &amp; sourcing</span><span class="md">Where HOK&reg; is produced, and by whom</span></a></li>' +
              '</ul>' +
            '</li>' +

            '<li class="has-mega" data-page="resources.html news.html">' +
              '<button class="navlink" type="button" aria-expanded="false">Resources' + CHEV + '</button>' +
              '<ul class="mega">' +
                '<li><a href="resources.html"><span class="mt">Documentation</span><span class="md">Datasheets, SDS, and application literature</span></a></li>' +
                '<li><a href="resources.html#faq"><span class="mt">FAQ</span><span class="md">Common questions about HOK&reg; and supply</span></a></li>' +
                '<li><a href="resources.html#glossary"><span class="mt">Glossary</span><span class="md">Sorbent and treatment terminology</span></a></li>' +
                '<li><a href="news.html"><span class="mt">News &amp; insights</span><span class="md">Company updates and industry notes</span></a></li>' +
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
