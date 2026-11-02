# Snoozy — The Art of Rest

A responsive luxury mattress brand experience built with Next.js App Router, TypeScript, Tailwind CSS 4, and Lucide icons.

## Develop

```sh
npm install
npm run dev
```

## Verify and export

```sh
npm run typecheck
npm run build
```

The production build exports to `out/` for static hosting. On Windows PowerShell, use `npm.cmd` if execution policy prevents `npm.ps1` from running.

## Included

- Responsive editorial homepage with all ten requested sections.
- Local photography, priority hero loading, lazy secondary images, SEO metadata, sitemap, and robots file.
- Scroll reveals, gentle hero parallax, reduced-motion support, and an interactive five-layer mattress visual.
- Search, product details, size-based prices, shopping bag with quantity controls and local persistence, and a three-step mattress finder.
- Native accessible dialogs, keyboard layer navigation, newsletter validation and launch feedback, support FAQs, and preview policies.

## Content and launch

This is a complete presentation and shopping-bag prototype. The catalog, prices, material details, and experience quotations are clearly labeled illustrative. Bedroom photos are styling references, not photographs of manufactured Snoozy products. No customer claims are presented as verified testimonials.

Payments, stock, order fulfillment, customer support contact details, social account URLs, and newsletter delivery are not connected. The newsletter does not store or transmit email addresses. Connect production commerce and email services and replace sample content before accepting orders.

## Source layout

- `src/app`: entry point, global design tokens/styles, metadata and SEO routes.
- `src/components/storefront.tsx`: storefront, shared photo/eyebrow/dialog primitives, and shopping interactions.
- `src/lib/catalog.ts`: editable product, size, and layer data.
- `public/images`: locally hosted Unsplash photography.

## Photography

Bedroom styling sourced from Unsplash image IDs `1617325247661-675ab4b64ae2`, `1616594039964-ae9021a400a0`, `1631049307264-da0ec9d70304`, and `1611892440504-42a792e24d32`.
