import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const steps = [
  {
    title: "Brief",
    copy: "On clarifie le besoin, le contexte et le niveau d'ambition avant toute production.",
  },
  {
    title: "Design & build",
    copy: "On conçoit une base élégante puis on la transforme en livrable solide et cohérent.",
  },
  {
    title: "Delivery & support",
    copy: "On met en ligne proprement et on prévoit la suite pour garder de la continuité.",
  },
];

export const LandingProcess = () => {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#f6f0e7] py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-50 md:py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c8a96a]/50 to-transparent" />
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#c8a96a]/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-64 w-64 rounded-full bg-slate-300/20 blur-3xl dark:bg-amber-500/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#a88445] dark:text-amber-400">
            <Sparkles className="h-4 w-4" />
            Process
          </p>
          <h2
            className="text-4xl leading-tight tracking-tight text-slate-950 dark:text-slate-50 md:text-6xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Un déroulé simple, sans friction.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
            Trois étapes lisibles pour avancer vite, proprement, et sans perdre
            le fil du projet.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="rounded-[1.7rem] border border-[#e4d7be] bg-white/80 p-6 shadow-[0_18px_50px_rgba(91,73,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-black/20"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d9c7a6] bg-[#faf5ec] text-sm font-semibold text-[#a88445] dark:border-slate-700 dark:bg-slate-950 dark:text-amber-300">
                  0{index + 1}
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#d8c7a8] to-transparent dark:from-slate-700" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-950 dark:text-slate-50">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {step.copy}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
