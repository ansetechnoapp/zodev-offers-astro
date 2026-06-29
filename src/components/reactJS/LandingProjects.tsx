import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
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

const makeMailto = (title: string) =>
  `mailto:${dataUser.email}?subject=${encodeURIComponent(
    `Demande d'offre - ${title}`
  )}`;

export const LandingProjects = ({ offers }: { offers: Offer[] }) => {
  return (
    <section
      id="offers"
      className="relative overflow-hidden bg-[#fbf7f0] py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-50 md:py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-[#c8a96a]/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-slate-300/20 blur-3xl dark:bg-amber-500/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#a88445] dark:text-amber-400">
              <Sparkles className="h-4 w-4" />
              Offres
            </p>
            <h2
              className="text-4xl leading-tight tracking-tight text-slate-950 dark:text-slate-50 md:text-6xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Offres exclusives, prêtes à cadrer.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
              Chaque formule est pensée pour être claire dès la lecture, puis
              ajustée selon votre budget, votre calendrier et votre objectif.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[#d9c7a6] bg-white px-5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#c8a96a] hover:bg-[#fcf8f1] dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:bg-slate-800/80"
          >
            Demander un devis personnalisé
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {offers.map((offer, index) => (
            <motion.article
              key={offer.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
              className={`group flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-[#e4d7be] bg-white/82 shadow-[0_18px_55px_rgba(91,73,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-black/20 ${
                index === offers.length - 1 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4 border-b border-[#e8dcc2] px-6 py-5 dark:border-slate-800">
                <div className="space-y-2">
                  <span className="inline-flex rounded-full border border-[#d9c7a6] bg-[#faf5ec] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#a88445] dark:border-slate-700 dark:bg-slate-950 dark:text-amber-300">
                    {offer.data.badge}
                  </span>
                  <h3 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">
                    {offer.data.title}
                  </h3>
                </div>

                <span className="rounded-full border border-[#d9c7a6] bg-white px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400">
                  {offer.data.price}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {offer.data.description}
                </p>

                <div className="mt-5 rounded-[1.35rem] border border-[#e4d7be] bg-[#fcf8f1] p-4 dark:border-slate-800 dark:bg-slate-950">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a88445] dark:text-amber-400">
                    Idéal pour
                  </p>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                    {offer.data.audience}
                  </p>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {offer.data.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a88445]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    href={makeMailto(offer.data.title)}
                    className="inline-flex h-11 w-full items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200"
                  >
                    Demander cette offre
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
