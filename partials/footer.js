/* ============================================================
   CGS Carbon — shared site footer partial.
   Copy follows the Website Copy Deck (v8), section 8.
   ============================================================ */
(function () {
  'use strict';
  var ARROW = '<span class="ico" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';

  var html =
    '<footer class="site-footer">' +
      '<div class="wrap">' +

        '<div class="f-top">' +
          '<a class="f-brand" href="index.html" aria-label="CGS Carbon &mdash; home">' +
            '<img src="assets/img/logo-mark.svg" alt="" width="44" height="44">' +
            '<span class="brand-txt">' +
              '<span class="brand-name">CGS <span>Carbon</span></span>' +
              '<span class="brand-sub">A Birchtech Subsidiary</span>' +
            '</span>' +
          '</a>' +
          '<a class="btn btn-primary" href="contact.html">Get in touch' + ARROW + '</a>' +
        '</div>' +

        '<p class="f-about">CGS Carbon, Inc. (formerly Columbiana Grinding Services) has processed activated carbon from our Columbiana, Ohio, facility since 2008, specializing in processing activated carbon and supplying HOK&reg; Activated Lignite for water treatment, emissions control, and environmental remediation industries.</p>' +

        '<div class="f-cols">' +
          '<div>' +
            '<h2>Company</h2>' +
            '<ul>' +
              '<li><a href="about.html">About</a></li>' +
              '<li><a href="about.html#facility">Our facility</a></li>' +
              '<li><a href="contact.html">Contact</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h2>What we do</h2>' +
            '<ul>' +
              '<li><a href="services.html">Services &amp; capabilities</a></li>' +
              '<li><a href="hok-activated-lignite.html">Products</a></li>' +
              '<li><a href="applications.html">Applications &amp; industries</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h2>Contact</h2>' +
            '<ul>' +
              '<li>41738 Esterly Drive</li>' +
              '<li>PO Box 26</li>' +
              '<li>Columbiana, Ohio 44408</li>' +
              '<li><a href="tel:+13304572599">330-457-2599</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<div class="f-parent">' +
              '<div class="lbl">Parent company</div>' +
              '<img class="bt-logo" src="assets/img/birchtech-logo-light.svg" alt="Birchtech" width="150" height="53" loading="lazy">' +
              '<div class="tickers"><span>NYSE American: BCHT</span><span>TSX: BCHT</span></div>' +
              '<p>CGS Carbon, Inc. is a subsidiary of Birchtech. <a href="https://www.birchtech.com/" rel="noopener">birchtech.com</a></p>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div class="f-bottom">' +
          '<div>&copy; <span data-year>2026</span> CGS Carbon, Inc. All rights reserved.</div>' +
          '<ul>' +
            '<li><a href="legal.html#privacy">Privacy Policy</a></li>' +
            '<li><a href="legal.html#terms">Terms of Use</a></li>' +
            '<li><a href="contact.html">Contact</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="f-legal">' +
          '<p>HOK&reg; is a registered trademark of its respective owner.</p>' +
        '</div>' +

      '</div>' +
    '</footer>';

  document.currentScript.insertAdjacentHTML('beforebegin', html);
})();
