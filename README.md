# zodev-offers-astro

Landing page Astro pour `service.zodev.live`.

Ce projet sert à présenter des offres de services claires pour Kevin Otty: landing pages, sites vitrines, applications web et mobiles, maintenance et accompagnement.

## Démarrage

```bash
bun install
bun run dev
```

## Scripts utiles

- `bun run build`
- `bun run preview`
- `bun run optimize-images`
- `bun run generate-sitemap`
- `bun run seo-audit`

## Structure

- `src/pages/index.astro` : page d’accueil offres
- `src/components/reactJS/Landing*` : blocs de vente et de réassurance
- `src/lib/sitemap.ts` : génération du sitemap

## Note

Les anciennes routes de portfolio et de blog restent présentes dans le dépôt pour l'historique, mais la page principale d'offre est désormais la racine `/`.
