import React from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock3,
  Feather,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Cadrage clair",
    copy: "Le besoin est posé avant toute production pour éviter les mauvaises surprises.",
    icon: BadgeCheck,
  },
  {
    title: "Délais cadrés",
    copy: "Le planning est défini dès le départ pour garder une livraison lisible.",
    icon: Clock3,
  },
  {
    title: "Code maintenable",
    copy: "La structure technique reste simple à faire évoluer dans le temps.",
    icon: Feather,
  },
  {
    title: "Accompagnement",
    copy: "Je reste disponible après livraison pour faire évoluer le projet sans friction.",
    icon: ShieldCheck,
  },
];

export const LandingFeatures = () => {
  return (
    <section
      id="method"
      className="relative overflow-hidden border-y border-[#dcc9aa]/70 bg-[#fbf7f0] dark:border-slate-800/80 dark:bg-slate-950"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c8a96a]/45 to-transparent" />
        <div className="absolute -left-24 top-1/2 h-64 w-64 rounded-full bg-[#c8a96a]/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-slate-300/20 blur-3xl dark:bg-amber-500/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#a88445] dark:text-amber-400">
              <Sparkles className="h-4 w-4" />
              Méthode
            </p>
            <h2
              className="max-w-xl text-4xl leading-tight tracking-tight text-slate-950 dark:text-slate-50 md:text-6xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Une méthode rigoureuse pour des résultats irréprochables.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
              Chaque offre est cadrée avant d&apos;être dessinée. L&apos;objectif
              est simple: un périmètre net, une lecture claire et une livraison
              propre.
            </p>

            <div className="mt-8 rounded-[1.6rem] border border-[#e4d7be] bg-white/75 p-5 shadow-[0_18px_48px_rgba(91,73,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/50">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#a88445] dark:text-amber-400">
                Le principe
              </p>
              <p className="mt-3 text-lg leading-8 text-slate-700 dark:text-slate-300">
                Pas de promesse floue, pas de superflu. On avance avec un cadre
                précis et des livrables concrets.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="group rounded-[1.6rem] border border-[#e4d7be] bg-[#fcf8f1] p-5 shadow-[0_16px_50px_rgba(91,73,42,0.06)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-black/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d9c7a6] bg-white dark:border-slate-700 dark:bg-slate-950">
                    <feature.icon className="h-5 w-5 text-[#a88445] dark:text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950 dark:text-slate-50">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {feature.copy}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
