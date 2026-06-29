# zodev-offers-astro

Landing page Astro pour `offer.zodev.live`.

Ce projet sert à présenter des offres de services claires pour Kevin Otty: landing pages, sites vitrines, applications web et mobiles, maintenance et accompagnement.

## Démarrage

```bash
pnpm install
pnpm dev
```

## Scripts utiles

- `pnpm build`
- `pnpm preview`
- `pnpm optimize-images`
- `pnpm generate-sitemap`
- `pnpm seo-audit`

## Structure

- `src/pages/index.astro` : page d’accueil offres
- `src/components/reactJS/Landing*` : blocs de vente et de réassurance
- `src/lib/sitemap.ts` : génération du sitemap

## Note

Les anciennes routes de portfolio et de blog restent présentes dans le dépôt pour l'historique, mais la page principale d'offre est désormais la racine `/`.
