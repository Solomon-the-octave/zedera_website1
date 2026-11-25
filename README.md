# Zedera Tech Solutions website

Company site for Zedera Tech Solutions. React 19 + TypeScript + Vite, plain
CSS design system, deployed on Vercel.

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
  index.css                 design system: tokens, type, components, responsive
  i18n/en.ts                ALL English copy. Edit text here, not in pages.
  i18n/am.ts                Amharic copy, same shape as en.ts (TypeScript checks it).
  i18n/PrefsProvider.tsx    language (EN/AM) and theme (light/dark), saved per visitor
  data/site.ts              fixed company data: email, phones, WhatsApp, routes, stack
  Components/
    Logo.tsx                Zedera mark (color / onDark / mono) and wordmark
    Nav.tsx                 floating pill navigation + mobile drawer
    Footer.tsx
    Layout.tsx              nav + main + footer + WhatsApp button
    HeroVisual.tsx          home hero: dashboard connected to module chips
    ServiceArt.tsx          service icons and mini UI previews
    SolutionsExplorer.tsx   tabbed "choose your sector" panel
    PageHeader.tsx          inner page header
    CTABand.tsx             closing call to action
    Seo.tsx                 per-route title, description, canonical, OG tags
    ScrollToTop.tsx         resets scroll, supports /page#section links
    ui.tsx                  eyebrow, section heading, reveal, marquee, icons
  Pages/                    Home, Services, Solutions, Process, About, Contact, NotFound
                            (Work.tsx redirects /work to /solutions)
public/
  logo-mark.svg, favicon.svg, apple-touch-icon.png, icon-512.png, og-image.png
```

## Language and theme

- The globe button in the nav switches English / Amharic. The choice is saved in
  the visitor's browser and sets `<html lang>`.
- The moon / sun button switches light / dark mode (dark is the default).
  A small script in `index.html` applies the saved choice before the page paints.
- Amharic text uses Noto Sans Ethiopic. Have a native speaker review `am.ts`
  before launch.

## Brand

- Colours: teal `#66CBB8`, blue `#306EF5`, navy ink `#0B1430`, paper `#F6F6F1`
- Type: Sora (headings), Inter (text), JetBrains Mono (labels), Noto Sans Ethiopic (Amharic), from Google Fonts
- Logo: the refined mark on a golden-ratio grid. On blue or navy backgrounds use
  the `onDark` variant, where the blue shapes turn white.

## Content rule

Publish nothing that cannot be backed up. No client names, case studies,
statistics or testimonials until they are real and the client has approved them.
Dashboard figures in the hero and service previews are labelled sample UI.

## Contact form

The form posts JSON to `VITE_FORM_ENDPOINT` (Formspree, Web3Forms or your own
API). Set it in Vercel under **Settings > Environment Variables**, then redeploy.

Without it, the form still works: it opens the visitor's email app with the
message filled in, addressed to `zederaet@gmail.com`.

## Deploy on Vercel

1. Push this folder to a new GitHub repository.
2. In Vercel, **Add New > Project**, import the repository. The framework is
   detected as Vite; `vercel.json` sets the build command, output folder, SPA
   rewrites and asset caching.
3. Add the `zederaet.com` domain under **Settings > Domains**.
