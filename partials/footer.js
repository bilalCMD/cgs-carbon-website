/* ============================================================
   CGS Carbon — shared site footer partial.
   Edit the markup here once; every page picks it up via
   <script src="partials/footer.js"></script>.
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
              '<span class="brand-sub">A Birchtech Company</span>' +
            '</span>' +
          '</a>' +
          '<a class="btn btn-primary" href="contact.html">Get in touch' + ARROW + '</a>' +
        '</div>' +

        '<div class="f-cols">' +
          '<div>' +
            '<h2>Product</h2>' +
            '<ul>' +
              '<li><a href="hok-activated-lignite.html">HOK&reg; Activated Lignite</a></li>' +
              '<li><a href="hok-activated-lignite.html#grades">Product grades</a></li>' +
              '<li><a href="hok-activated-lignite.html#technical">Technical data</a></li>' +
              '<li><a href="hok-activated-lignite.html#supply">Packaging &amp; supply</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h2>Applications</h2>' +
            '<ul>' +
              '<li><a href="applications.html#biological">Biological wastewater</a></li>' +
              '<li><a href="applications.html#adsorptive">Adsorptive treatment</a></li>' +
              '<li><a href="applications.html#industrial">Industrial &amp; leachate</a></li>' +
              '<li><a href="industries.html">Industries we serve</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h2>Company</h2>' +
            '<ul>' +
              '<li><a href="about.html">About CGS Carbon</a></li>' +
              '<li><a href="resources.html">Resources</a></li>' +
              '<li><a href="news.html">News &amp; insights</a></li>' +
              '<li><a href="contact.html">Contact</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<div class="f-parent">' +
              '<div class="lbl">Parent company</div>' +
              '<span style="display:inline-block;color:#fff;font-weight:700;letter-spacing:.14em;font-size:.95rem;margin-bottom:14px">BIRCHTECH</span>' +
              '<p>CGS Carbon, Inc. is a subsidiary of Birchtech, an environmental technology company focused on clean air and clean water. <a href="https://www.birchtech.com/" rel="noopener">birchtech.com</a></p>' +
            '</div>' +
            '<div class="f-contact">' +
              '<span class="ph">[Phone number to be added]</span>' +
              '<span class="ph">[Email address to be added]</span>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div class="f-bottom">' +
          '<div>&copy; <span data-year>2026</span> CGS Carbon, Inc. All rights reserved.</div>' +
          '<ul>' +
            '<li><a href="privacy.html">Privacy Policy</a></li>' +
            '<li><a href="terms.html">Terms of Use</a></li>' +
            '<li><a href="contact.html">Contact</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="f-legal">' +
          '<p>HOK&reg; is a registered trademark of RWE. HOK&reg; Activated Lignite is manufactured by RWE in Germany. CGS Carbon, Inc. supplies and distributes HOK&reg; and is not the manufacturer of the product. Birchtech and SEA&reg; are trademarks of Birchtech Corp. All other trademarks are the property of their respective owners.</p>' +
          '<p>Product information on this site is summarized from documentation published by the manufacturer and is provided for general guidance only. It is not a specification. Request the current datasheet and safety data sheet for the grade you intend to use, and validate performance for your own water, process, and compliance requirements.</p>' +
        '</div>' +

      '</div>' +
    '</footer>';

  document.currentScript.insertAdjacentHTML('beforebegin', html);
})();
