"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-secondary/10">
      <div className="container px-6 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <div className="text-primary text-sm font-mono mb-2">// academic background</div>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto glass p-8 md:p-10 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left"
        >
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/50 text-primary">
            <GraduationCap size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2 font-outfit">
              B.E Computer Science & Engineering
            </h3>
            <p className="text-lg text-primary mb-4">
              GKM College of Engineering and Technology
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                GPA: 7.2/10
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Jul 2018 - May 2022
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
