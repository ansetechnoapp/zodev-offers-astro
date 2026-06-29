import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Clock3, Layers3, Sparkles } from "lucide-react";
import dataUser from "../../data/User.json";

interface LandingHeroProps {
  name: string;
  focus: string[];
  offerCount: number;
}

const assuranceCards = [
  {
    title: "Cadrage",
    copy: "Un périmètre net avant toute production.",
    icon: BadgeCheck,
  },
  {
    title: "Délais",
    copy: "Un planning posé dès le départ.",
    icon: Clock3,
  },
  {
    title: "Livrables",
    copy: "Une exécution propre, prête à évoluer.",
    icon: Layers3,
  },
];

export const LandingHero = ({ name, focus, offerCount }: LandingHeroProps) => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#f6f0e7] text-slate-900 dark:bg-slate-950 dark:text-slate-50"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-[32rem] w-[32rem] -translate-x-1/3 rounded-full bg-[#d8c29a]/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-[28rem] w-[28rem] translate-x-1/4 rounded-full bg-slate-300/20 blur-3xl dark:bg-amber-400/10" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8a96a]/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d9c7a6] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#a88445] shadow-[0_12px_32px_rgba(86,64,26,0.08)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60 dark:text-amber-300">
              <Sparkles className="h-3.5 w-3.5" />
              Offres premium
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
              {name}
            </p>

            <h1
              className="mt-6 max-w-3xl text-5xl leading-[0.92] tracking-tight text-slate-950 dark:text-slate-50 md:text-7xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Des solutions web et mobiles d&apos;exception, cadrées avec précision.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300 md:text-xl">
              Je transforme une idée en offre lisible, élégante et livrable.
              Périmètre net, délais cadrés, exécution soignée et accompagnement
              direct.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {focus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#d9c7a6] bg-white/80 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#offers"
                className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200"
              >
                Voir les offres
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href={`mailto:${dataUser.email}`}
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#d9c7a6] bg-white px-6 text-sm font-semibold text-slate-700 transition-colors hover:border-[#c8a96a] hover:bg-[#fcf8f1] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                Demander un devis
              </a>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {offerCount} offres prêtes à cadrer
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
              <span>Réponse sous 24h</span>
              <span>Basé à Cotonou, Bénin</span>
              <span>Missions freelance sélectives</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto w-full max-w-[36rem]"
          >
            <div className="absolute -left-6 top-10 h-40 w-40 rounded-full border border-[#d9c7a6]/60 blur-[1px]" />
            <div className="absolute -right-8 bottom-6 h-36 w-36 rounded-full border border-[#c8a96a]/30 blur-[1px]" />

            <div className="relative rounded-[2rem] border border-[#dac9aa] bg-white/72 p-5 shadow-[0_28px_90px_rgba(86,64,26,0.14)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-black/20 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a88445] dark:text-amber-400">
                    Atelier premium
                  </p>
                  <h2
                    className="mt-3 max-w-md text-3xl leading-tight text-slate-950 dark:text-slate-50 md:text-4xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Une offre claire, élégante et livrable.
                  </h2>
                </div>

                <div className="rounded-full border border-[#d9c7a6] bg-[#faf5ec] px-3 py-2 text-right text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                  <div className="text-[0.62rem] uppercase tracking-[0.26em] text-[#a88445] dark:text-amber-400">
                    Packages
                  </div>
                  <div className="mt-1 text-base font-semibold text-slate-950 dark:text-slate-50">
                    0{offerCount}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {assuranceCards.map((card, index) => (
                  <div
                    key={card.title}
                    className={`rounded-[1.35rem] border border-[#e4d7be] bg-[#fcf8f1] p-4 shadow-[0_10px_30px_rgba(91,73,42,0.06)] dark:border-slate-800 dark:bg-slate-950 ${
                      index === 0 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#d9c7a6] bg-white dark:border-slate-700 dark:bg-slate-900">
                        <card.icon className="h-5 w-5 text-[#a88445] dark:text-amber-300" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-950 dark:text-slate-50">
                          {card.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                          {card.copy}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-[1.35rem] border border-[#e4d7be] bg-gradient-to-br from-[#fcf8f1] to-white p-4 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#a88445] dark:text-amber-400">
                      Positionnement
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      Une approche boutique: peu de flou, peu de bruit, beaucoup
                      de précision.
                    </p>
                  </div>
                  <div className="hidden rounded-full border border-[#d9c7a6] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 sm:block">
                    Premium
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
