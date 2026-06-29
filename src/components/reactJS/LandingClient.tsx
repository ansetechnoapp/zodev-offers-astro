import React from "react";
import { LandingHero } from "./LandingHero";
import { LandingFeatures } from "./LandingFeatures";
import { LandingProjects } from "./LandingProjects";
import dataUser from "../../data/User.json";

interface Offer {
  id: string;
  data: {
    title: string;
    description: string;
    badge: string;
    audience: string;
    bullets: string[];
  };
}

const focus = [
  "Landing page",
  "Site vitrine",
  "Application web",
  "Application mobile",
  "Maintenance",
  "UI/UX",
  "SEO",
  "Support",
];

const offers: Offer[] = [
  {
    id: "landing-page-express",
    data: {
      title: "Landing page express",
      description:
        "Une page claire pour lancer une offre, une campagne ou une prise de contact rapide.",
      badge: "One page",
      audience: "Lancements, campagnes et lead generation",
      bullets: [
        "Hero orienté conversion",
        "CTA, formulaire et sections clés",
        "SEO de base et mise en ligne propre",
      ],
    },
  },
  {
    id: "site-vitrine-premium",
    data: {
      title: "Site vitrine premium",
      description:
        "Une présence en ligne crédible pour présenter ton activité, tes services et tes valeurs.",
      badge: "Brand",
      audience: "Freelances, PME et marques personnelles",
      bullets: [
        "Pages essentielles et navigation simple",
        "Design responsive et cohérent",
        "Structure pensée pour inspirer confiance",
      ],
    },
  },
  {
    id: "application-web-metier",
    data: {
      title: "Application web métier",
      description:
        "Un produit web sur mesure pour gérer des données, des équipes ou des opérations internes.",
      badge: "Web app",
      audience: "Dashboards, back-office et outils internes",
      bullets: [
        "Interfaces modulaires et maintenables",
        "Connexion propre aux API et aux données",
        "Expérience utilisateur claire et rapide",
      ],
    },
  },
  {
    id: "application-mobile",
    data: {
      title: "Application mobile",
      description:
        "Une base mobile solide pour iOS et Android, ou une PWA, selon le périmètre du projet.",
      badge: "Mobile",
      audience: "Produits mobiles et parcours terrain",
      bullets: [
        "Parcours fluides et ergonomie mobile",
        "Architecture prête à évoluer",
        "Livraison adaptée au niveau de maturité",
      ],
    },
  },
  {
    id: "maintenance-evolution",
    data: {
      title: "Maintenance & évolution",
      description:
        "Un accompagnement continu pour corriger, améliorer et faire évoluer un projet existant.",
      badge: "Support",
      audience: "Sites et produits déjà en production",
      bullets: [
        "Corrections rapides et ciblées",
        "Optimisation performance et SEO",
        "Évolutions par itérations courtes",
      ],
    },
  },
];

export const LandingClient = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-cyan-500/30 dark:bg-slate-950">
      <LandingHero
        name={`${dataUser.firstName} ${dataUser.lastName}`}
        focus={focus}
        offerCount={offers.length}
      />
      <LandingFeatures />
      <LandingProjects offers={offers} />
      <section
        id="contact"
        className="relative overflow-hidden bg-white pb-16 text-slate-900 dark:bg-slate-950 dark:text-slate-50 md:pb-24"
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-[2rem] border border-slate-200/80 bg-slate-50/90 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50 dark:shadow-black/20 md:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-500 dark:text-cyan-400">
              Contact
            </p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Tu veux une offre claire pour ton prochain projet ?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
                  Je peux t'aider à cadrer l'offre la plus adaptée, puis à la
                  transformer en livrable concret, propre et prêt à évoluer.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${dataUser.email}`}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200"
                >
                  Demander un devis
                </a>
                <a
                  href="https://my.zodev.live"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-500/40 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
                >
                  Voir les références
                </a>
              </div>
            </div>

            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                <dt className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-500">
                  Localisation
                </dt>
                <dd className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  {dataUser.address.city}, {dataUser.address.country}
                </dd>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                <dt className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-500">
                  Format
                </dt>
                <dd className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  Offre claire, périmètre cadré, livraison propre
                </dd>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                <dt className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-500">
                  Disponible
                </dt>
                <dd className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  Pour missions freelance et collaborations ciblées
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};
