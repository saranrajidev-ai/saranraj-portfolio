"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EXPERIENCES = [
  {
    role: "Associate Software Engineer",
    company: "Epikindifi Software (ezee.ai)",
    location: "Bangalore, India",
    period: "Jan 2024 - Apr 2026",
    achievements: [
      "Developed and maintained Product Manager 2.0, a MERN-based platform managing dynamic product configurationsacross 10+ NBFC clients including Jio Financial Services, IDBI Bank, and Clix Capital using modular microservicesand MongoDB.",
      "Implemented Redis pub/sub-based distributed cache synchronization mechanisms across multiple services to prevent stale data delivery and reduce database loads to modify master data safely without code deployments, reducing engineering dependencies by 50%.",
      "Engineered a distributed inventory and leasing infrastructure for Reliance Jio AirFiber, processing 100K+ concurrent records with a 30% increase in operational efficiency.",
      "Built a no-code Dataset web application enabling non-technical operators to safely manage master data without codedeployments, reducing engineering dependencies by 50%.",
      "Deployed containerized MERN applications on Microsoft Azure using Docker, Redis, and Nginx reverse proxy architecture to improve scalability, traffic distribution, and production performance",
      "Collaborated in Agile/Scrum ceremonies including daily standups, sprint planning, and retrospectives across cross functional teams.",
    ],
    tags: ["Node.js", "MongoDB", "Microservices", "React.js", "System Design"],
  },
  {
    role: "Software Engineer Intern",
    company: "Epikindifi Software (ezee.ai)",
    location: "Bangalore, India",
    period: "Nov 2022 - Jan 2024",
    achievements: [
      "Frontend Performance: Streamlined application bundles via React.js code splitting and lazy loading routines, reducing client-side bundle sizes by 30%.",
      "Dashboard Engineering: Built comprehensive responsive loan officer dashboards incorporating complex pipeline management screens and automated secure document uploads.",
    ],
    tags: ["React.js", "Node.js", "Redux Toolkit", "Frontend Optimization"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="container px-6 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-primary text-sm font-mono mb-2">// work history</div>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit">
            Where I've <span className="text-muted-foreground italic">worked</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 mb-16 relative">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:block absolute left-[19.5%] top-0 bottom-[-4rem] w-px bg-white/10" />
                
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-[19.5%] md:-ml-[5px] top-2 w-[10px] h-[10px] rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10" />
                
                {/* Timeline Line (Mobile) */}
                <div className="md:hidden absolute left-0 top-0 bottom-[-4rem] w-px bg-white/10" />

                <div className="md:col-span-1 pt-1 md:text-right mb-4 md:mb-0">
                  <div className="text-sm font-mono text-muted-foreground">{exp.period}</div>
                </div>

                <div className="md:col-span-4 md:pl-10">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <div className="text-lg text-primary mb-4">
                    {exp.company} <span className="text-muted-foreground text-sm ml-2">| {exp.location}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed flex items-start">
                        <span className="text-accent mr-2 mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
