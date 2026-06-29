import React from "react";
import { LandingHero } from "./LandingHero";
import { LandingFeatures } from "./LandingFeatures";
import { LandingProcess } from "./LandingProcess";
import { LandingProjects } from "./LandingProjects";
import dataUser from "../../data/User.json";

interface Offer {
  id: string;
  data: {
    title: string;
    description: string;
    badge: string;
    audience: string;
    price: string;
    bullets: string[];
  };
}

const focus = [
  "Landing page",
  "Site vitrine",
  "Application web",
  "Application mobile",
  "Maintenance",
];

const offers: Offer[] = [
  {
    id: "landing-page-express",
    data: {
      title: "Landing page express",
      description:
        "Une page premium pensée pour lancer une offre, une campagne ou une prise de contact rapide.",
      badge: "One page",
      audience: "Lancements, campagnes et lead generation",
      price: "Dès 900 €",
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
        "Une présence en ligne crédible pour présenter votre activité, vos services et votre niveau d'exigence.",
      badge: "Brand",
      audience: "Freelances, PME et marques personnelles",
      price: "Dès 1 500 €",
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
      price: "Sur devis",
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
      price: "Sur devis",
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
        "Un accompagnement continu pour corriger, améliorer et faire évoluer un projet déjà en production.",
      badge: "Support",
      audience: "Sites et produits déjà en production",
      price: "Forfait mensuel",
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
    <div className="min-h-screen bg-[#f6f0e7] text-slate-900 selection:bg-amber-300/40 dark:bg-slate-950 dark:text-slate-50">
      <LandingHero
        name={`${dataUser.firstName} ${dataUser.lastName}`}
        focus={focus}
        offerCount={offers.length}
      />
      <LandingFeatures />
      <LandingProcess />
      <LandingProjects offers={offers} />

      <section
        id="contact"
        className="relative overflow-hidden border-t border-[#d8c7a8]/60 bg-[#f8f2e9] py-16 text-slate-900 dark:border-slate-800/80 dark:bg-slate-950 dark:text-slate-50 md:py-24"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c8a96a]/50 to-transparent" />
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#c8a96a]/10 blur-3xl" />
          <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-slate-400/10 blur-3xl dark:bg-amber-500/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#d8c7a8]/70 bg-white/80 p-6 shadow-[0_24px_80px_rgba(91,73,42,0.12)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/50 dark:shadow-black/20 md:p-10">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#a88445] dark:text-amber-400">
                Contact
              </p>
              <h2
                className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 md:text-6xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Discutons de votre prochain projet d'exception
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
                Si vous cherchez une offre claire, un cadrage net et une
                exécution soignée, je peux vous aider à structurer la bonne
                formule.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${dataUser.email}`}
                className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200"
              >
                Demander un devis
              </a>
              <a
                href="https://my.zodev.live"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#d8c7a8] bg-white px-6 text-sm font-semibold text-slate-700 transition-colors hover:border-[#c8a96a] hover:bg-[#fcf8f1] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                Voir les références
              </a>
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.4rem] border border-[#e3d6bf] bg-[#faf5ec] p-4 dark:border-slate-800 dark:bg-slate-950">
                <dt className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-500">
                  Localisation
                </dt>
                <dd className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  {dataUser.address.city}, {dataUser.address.country}
                </dd>
              </div>
              <div className="rounded-[1.4rem] border border-[#e3d6bf] bg-[#faf5ec] p-4 dark:border-slate-800 dark:bg-slate-950">
                <dt className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-500">
                  Format
                </dt>
                <dd className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  Offre claire, périmètre cadré, livraison propre
                </dd>
              </div>
              <div className="rounded-[1.4rem] border border-[#e3d6bf] bg-[#faf5ec] p-4 dark:border-slate-800 dark:bg-slate-950">
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
