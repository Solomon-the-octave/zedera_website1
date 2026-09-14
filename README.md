# Zedera Tech Solutions — website

Corporate site for Zedera Tech Solutions. React 19 + TypeScript + Vite, plain
CSS design system, deployed on Netlify.

## Run

```bash
npm install
npm run dev      # http://localhost:5175
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Structure

```
src/
  index.css              design system — tokens, type scale, components
  data/site.ts           ALL site copy and content. Edit here, not in pages.
  Components/
    Nav.tsx              scroll-aware header (transparent over dark tops)
    Footer.tsx
    Layout.tsx           nav + main + footer shell
    PageHeader.tsx       dark blueprint header for inner pages
    CTABand.tsx
    Seo.tsx              per-route title / description / canonical / OG tags
    ScrollToTop.tsx      resets scroll on route change
    ui.tsx               icons, section label, scroll reveal
  Pages/                 Home, About, Services, Process, Work, Contact, NotFound
```

## Editing content

Almost all copy lives in `src/data/site.ts`. Pages are structural.

## ⚠️ Before going live

`src/data/site.ts` contains clearly-marked placeholders that must be replaced:

1. **`TBD` object** — the four hero/about statistics (systems delivered, years
   operating, engineers, markets). Replace with real figures, then set
   `unverified: false` to hide the on-page placeholder notices.
2. **`CASES`** — four placeholder engagements. Replace each with a real project.
   Use a client's name only with written permission; otherwise describe the
   engagement without naming them. Remove `tbd: true` once an entry is real.
3. **`STACK`** — confirm this reflects the technologies Zedera actually works in.
4. **`SECTORS`** — confirm the sector list.
5. **`COMPANY.addressLines`** — confirm the full office address.

## Contact form

The form on `/contact` submits to **Netlify Forms**. Two pieces make this work:

- a hidden static `<form name="contact">` in `index.html`, which Netlify's
  build-time crawler detects;
- `src/Pages/Contact.tsx`, which posts the same field names back to `/`.

Submissions appear under **Forms** in the Netlify dashboard. Set up a
notification email there so enquiries reach an inbox.

To move to a different provider (Formspree, Web3Forms, your own API), change
`FORM_ENDPOINT` in `Contact.tsx` — nothing else needs to change.

## Deployment

`netlify.toml` rewrites all paths to `index.html` so client-side routing works
on hard refresh and deep links.
