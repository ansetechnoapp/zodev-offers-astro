import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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

const makeMailto = (title: string) =>
  `mailto:${dataUser.email}?subject=${encodeURIComponent(`Demande d'offre - ${title}`)}`;

export const LandingProjects = ({ offers }: { offers: Offer[] }) => {
  return (
    <section
      id="offers"
      className="relative overflow-hidden bg-white py-14 text-slate-900 dark:bg-slate-950 dark:text-slate-50 md:py-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-cyan-500/8 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-amber-500/8 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.28em] text-cyan-500 dark:text-cyan-400">
              Offres
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Offres prêtes à commander
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
              Chaque offre est pensée pour être claire dès la lecture, puis
              adaptable selon ton budget, ton calendrier et ton objectif.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-cyan-500/40 hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:bg-slate-800/80"
          >
            Demander un devis
            <ExternalLink className="h-4 w-4 text-slate-400" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer, index) => (
            <motion.article
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-slate-50/90 shadow-lg shadow-slate-200/40 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/50 dark:shadow-black/20"
            >
              <div className="flex items-start justify-between gap-4 border-b border-slate-200/70 px-5 py-5 dark:border-slate-800/70 md:px-6">
                <div className="space-y-2">
                  <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400">
                    {offer.data.badge}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight">
                    {offer.data.title}
                  </h3>
                </div>

                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
                  0{index + 1}
                </span>
              </div>

              <div className="space-y-4 p-5 md:p-6">
                <div>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {offer.data.description}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 p-4 dark:bg-slate-950/70">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
                    Idéal pour
                  </p>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                    {offer.data.audience}
                  </p>
                </div>

                <ul className="space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {offer.data.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href={makeMailto(offer.data.title)}
                    className="inline-flex h-11 w-full items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200"
                  >
                    Demander cette offre
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
