# AGENTS.md

## Objectif du depot
Ce repo contient la landing page d’offres pour `service.zodev.live` et son alias eventuel `service.zodev.live`.
Son role est de presenter des offres claires, des livrables et un perimetre simple pour un developpeur freelance unique.

## Nomenclature
- Regle unique: `[nom projet]-[type]-[tech]`
- Rien de plus: pas de suffixe decoratif, pas de version, pas de variante de copie.
- Si un dossier ou repo ne respecte pas cette regle, le renommer avant d’aller plus loin.

## Regles de travail
- Utiliser `bun` pour installer, lancer et valider le projet.
- Toujours verifier avec `bun run build` avant de livrer.
- Si le contenu change, aligner aussi `title`, `description`, `canonical`, `homepageUrl`, `sitemap` et `robots`.
- Garder le discours commercial simple, concret et rassurant.
- Prioriser la clarte de l’offre avant l’esthetique.
- Ne pas transformer cette page en portfolio secondaire.
- Garder les routes legacy uniquement si elles servent l’historique ou la compatibilite.

## Ce qu’il faut privilegier
- Une offre = un besoin clair.
- Perimetre lisible.
- Livrables explicites.
- CTA simples.
- Arguments de confiance: methode, delai, maintenance, accompagnement.

## Checklist avant merge ou push
- Le build passe.
- Le domaine public cible est bien celui attendu.
- Les metadata GitHub et Vercel sont coherentes.
- Le message de la page d’accueil ne parle pas de portfolio principal.
