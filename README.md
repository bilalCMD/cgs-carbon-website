# Columbiana Grinding Services — Website

Multi-page static website for **Columbiana Grinding Services, LLC** — processing activated carbon
for various industries, established 2008, specializing in HOK® Activated Lignite.

## Content rule

All copy on this site is limited to statements verified against the company's official website,
[columbianagrinding.com](https://columbianagrinding.com/). Anything that could not be verified is
**not published as fact** — it appears as a dashed "to be confirmed" marker instead. When adding
copy, keep to this rule: if a statement cannot be located on the official site or confirmed by CGS,
mark it TO CONFIRM rather than writing around it.

## Structure

```
├── index.html                  Home
├── about.html                  Company, history, specialty, location
├── services.html               Activated carbon processing
├── hok-activated-lignite.html  HOK® Activated Lignite specialty
├── industries.html             Various industries
├── contact.html                Address, phone, enquiry form
├── privacy.html / terms.html   Legal pages
├── partials/
│   ├── header.js               Shared header/nav — edit once, applies to all pages
│   └── footer.js               Shared footer — edit once, applies to all pages
└── assets/
    ├── css/
    │   ├── global.css          Design system shared by every page
    │   └── <page>.css          One stylesheet per page
    ├── js/main.js              Nav drawer, scroll reveal, form prototype
    └── img/                    Photography, logo mark, favicon
```

## How header/footer sharing works

Each page includes `<script src="partials/header.js"></script>` where the header belongs and
`<script src="partials/footer.js"></script>` before the closing scripts. The partials inject their
markup synchronously during parse (no layout flash, works from `file://` and any static host).
The header highlights the nav item for the current page.

## Cache busting

Stylesheets, scripts and reused image filenames carry a `?v=N` suffix. **Bump `N` on every page
whenever CSS or JS changes**, otherwise hosts and browsers keep serving the previous version:

```
grep -rl '?v=4' *.html | xargs sed -i 's/?v=4/?v=5/g'
```

## Running locally

No build step. Open `index.html` directly, or serve the folder:

```
python -m http.server 8000
```

## Photography

Stock stand-ins from [Unsplash](https://unsplash.com) (Unsplash License), 1920px wide, one photo
per slot. Below-the-fold images are lazy-loaded. Replace these with real Columbiana Grinding
Services facility and product photography before launch.

## Before launch — content QA

Confirm against the current official website, then update the copy and remove the markers:

- [ ] Exact current list of services under the site's "Our Services" section
- [ ] Current phone number (330-457-2599 shown; confirm on the live site)
- [ ] Current email address
- [ ] Whether the site names specific industries or applications
- [ ] Whether the site lists grinding, pulverizing, screening, blending, packaging or equipment
- [ ] Whether the site states technical specifications or particle-size ranges
- [ ] Whether the site states certifications, approvals or regulatory claims
- [ ] HOK® manufacturer / trademark attribution wording
- [ ] Whether the site carries customer names, logos, testimonials or case studies
- [ ] Effective dates and legal review for the Privacy Policy and Terms of Use
- [ ] Connect the contact form to a backend (currently a front-end prototype)

`CGS Carbon Website Sample.html` is the original single-file design reference the layout was
derived from. Its copy is superseded by the verified content above.
