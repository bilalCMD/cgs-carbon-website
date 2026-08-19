/* ============================================================
   Columbiana Grinding Services — shared site footer partial.
   Copy is limited to statements verified on columbianagrinding.com.
   ============================================================ */
(function () {
  'use strict';
  var ARROW = '<span class="ico" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M2 8h11M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';

  var html =
    '<footer class="site-footer">' +
      '<div class="wrap">' +

        '<div class="f-top">' +
          '<a class="f-brand" href="index.html" aria-label="Columbiana Grinding Services &mdash; home">' +
            '<img src="assets/img/logo-mark.svg" alt="" width="44" height="44">' +
            '<span class="brand-txt">' +
              '<span class="brand-name">Columbiana <span>Grinding</span></span>' +
              '<span class="brand-sub">Services, LLC</span>' +
            '</span>' +
          '</a>' +
          '<a class="btn btn-primary" href="contact.html">Get in touch' + ARROW + '</a>' +
        '</div>' +

        '<div class="f-cols">' +
          '<div>' +
            '<h2>Company</h2>' +
            '<ul>' +
              '<li><a href="about.html">About</a></li>' +
              '<li><a href="services.html">Services</a></li>' +
              '<li><a href="industries.html">Industries</a></li>' +
              '<li><a href="contact.html">Contact</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h2>Specialty</h2>' +
            '<ul>' +
              '<li><a href="hok-activated-lignite.html">HOK&reg; Activated Lignite</a></li>' +
              '<li><a href="services.html">Activated Carbon Processing</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h2>Contact</h2>' +
            '<ul>' +
              '<li>41738 Esterly Drive</li>' +
              '<li>Columbiana, Ohio 44408</li>' +
              '<li><a href="tel:+13304572599">330-457-2599</a></li>' +
            '</ul>' +
            '<div class="f-contact"><span class="ph">[Email address to be confirmed]</span></div>' +
          '</div>' +
          '<div>' +
            '<div class="f-parent">' +
              '<div class="lbl">Columbiana Grinding Services, LLC</div>' +
              '<p>Processing Activated Carbon for Various Industries. Established in 2008. Specializing in HOK&reg; Activated Lignite.</p>' +
              '<p style="margin-top:12px">Columbiana, Ohio, close to the Ohio-Pennsylvania state line and approximately 20 miles south of Youngstown.</p>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div class="f-bottom">' +
          '<div>&copy; <span data-year>2026</span> Columbiana Grinding Services, LLC. All rights reserved.</div>' +
          '<ul>' +
            '<li><a href="privacy.html">Privacy Policy</a></li>' +
            '<li><a href="terms.html">Terms of Use</a></li>' +
            '<li><a href="contact.html">Contact</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="f-legal">' +
          '<p>HOK&reg; is a registered trademark of its respective owner. <span class="ph">[Trademark attribution wording to be confirmed]</span></p>' +
        '</div>' +

      '</div>' +
    '</footer>';

  document.currentScript.insertAdjacentHTML('beforebegin', html);
})();
