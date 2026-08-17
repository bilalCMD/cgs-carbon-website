# CGS Carbon — Website

Multi-page static website for **CGS Carbon, Inc.**, a subsidiary of [Birchtech](https://www.birchtech.com/),
supplier of HOK® Activated Lignite (manufactured by RWE, Germany) for water and gas treatment.

Design follows the Birchtech parent-brand system: teal `#1D7686` on white, Inter type with tight
tracking, charcoal footer.

## Structure

```
├── index.html                  Home
├── hok-activated-lignite.html  Product: overview, grades, technical data, supply
├── applications.html           Biological, adsorptive, industrial, drinking water, gas
├── industries.html             Sectors served + duty matrix
├── about.html                  Company, parent company (Birchtech), manufacturing
├── resources.html              Documentation, FAQ, glossary
├── news.html                   Press releases + insights
├── contact.html                Inquiry form (front-end prototype)
├── privacy.html / terms.html   Legal pages
├── partials/
│   ├── header.js               Shared header/nav — edit once, applies to all pages
│   └── footer.js               Shared footer — edit once, applies to all pages
└── assets/
    ├── css/
    │   ├── global.css          Design system shared by every page
    │   └── <page>.css          One stylesheet per page (home, hok, applications, …)
    ├── js/main.js              Nav drawer, mega menus, scroll reveal, form prototype
    └── img/                    Photos, logo mark, favicon
```

## How header/footer sharing works

Each page includes `<script src="partials/header.js"></script>` where the header belongs and
`<script src="partials/footer.js"></script>` before the closing scripts. The partials inject their
markup synchronously during parse (no layout flash, works from `file://` and any static host).
The header also highlights the nav item for the current page.

## Running locally

No build step. Open `index.html` directly, or serve the folder:

```
python -m http.server 8000
```

## Photography

Every section has its own photo — 23 in total, one per slot, no image reused across two places.
All are 1920px-wide JPEGs from [Unsplash](https://unsplash.com) (Unsplash License: free for
commercial use, attribution not required). Below-the-fold images carry `loading="lazy"`.

Product shots (`hok-granules*`, `hok-powder*`) are photographed on white and use the
`.media-obj.on-light` treatment: the shot is blended onto a tinted ground with `mix-blend-mode`
so the material floats, with the caption in its own light panel instead of a dark gradient.

These are stand-ins. Replace them with real CGS Carbon and RWE plant photography before launch —
particularly the product shots, which should show actual HOK® grades.

## Before launch

Placeholder markers (dashed boxes, `[like this]`) flag facts to confirm: contact details,
leadership, exact grade designations, legal effective dates, and the form backend. Swap the
stock photography for licensed CGS Carbon imagery, and consider serving WebP/AVIF variants —
the JPEG set totals roughly 10 MB.

`CGS Carbon Website Sample.html` is the original single-file design reference the site was
split from.
