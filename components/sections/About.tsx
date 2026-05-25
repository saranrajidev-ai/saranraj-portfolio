"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <div className="text-primary text-sm font-mono mb-2">// about me</div>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit">
            Crafting reliable <br />
            <span className="text-muted-foreground italic">fintech infrastructure</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a Full-Stack Software Engineer based in <strong className="text-foreground">Bangalore</strong>, specialising in high-throughput backend systems, MERN stack development, and event-driven architectures.
            </p>
            <p>
              At Epikindifi Software, I architect Node.js microservices and dynamic product configurations that process over 100K+ concurrent records for major clients like Reliance Jio AirFiber, IDBI Bank, and Clix Capital. 
            </p>
            <p>
              Beyond traditional REST APIs, I have hands-on experience building AI-powered retrieval-augmented generation (RAG) pipelines using Python, FastAPI, and LangChain to bring intelligent automation to enterprise data.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["saranraji.dev@gmail.com", "LinkedIn", "Bangalore, India"].map((item, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-secondary/50 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass rounded-xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="bg-background/80 px-4 py-3 flex items-center gap-2 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">saranraj@developer:~</span>
            </div>
            <div className="p-6 font-mono text-sm leading-loose">
              <p><span className="text-primary">$</span> whoami</p>
              <p className="text-muted-foreground mb-4">Saranraj S — Associate Software Engineer</p>
              
              <p><span className="text-primary">$</span> cat current_focus.txt</p>
              <p className="text-accent">✦ Scalable System Design</p>
              <p className="text-accent">✦ Distributed Fintech Platforms</p>
              <p className="text-accent mb-4">✦ LLM Integration & RAG Pipelines</p>

              <p><span className="text-primary">$</span> <span className="w-2 h-4 bg-foreground inline-block animate-pulse align-middle" /></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
