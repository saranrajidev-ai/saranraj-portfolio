"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Digital Lending Microservices Platform",
    description: "End-to-end loan origination platform serving 10+ NBFCs. Modular microservices handle KYC verification, CIBIL checks, e-NACH repayment setup, and collections workflows — all event-driven.",
    metrics: ["10+ NBFC Clients", "40% Throughput Gain", "5+ Microservices"],
    stack: ["Node.js", "React.js", "RabbitMQ", "MongoDB", "Azure", "Docker"],
    featured: true,
  },
  {
    title: "Enterprise Knowledge Retrieval Agent (RAG)",
    description: "Built a full-stack RAG pipeline for document-based AI responses. Processes complex enterprise PDFs and allows natural language querying against internal knowledge bases.",
    metrics: ["FastAPI Backend", "Vector Search", "LLM Integration"],
    stack: ["Python", "FastAPI", "React.js", "LangChain", "Pinecone"],
    featured: false,
  },
  {
    title: "VAPT Security Hardening",
    description: "Led the company's first security audit preparation. Implemented payload encryption, JWT token rotation, rate limiting, and IP whitelisting across 5+ production services.",
    metrics: ["VAPT Certified", "Zero Breaches", "5+ Services Secured"],
    stack: ["JWT", "Encryption", "Rate Limiting", "IP Whitelist"],
    featured: false,
  },
  {
    title: "Azure Cloud Infrastructure & Observability",
    description: "Designed multi-environment Azure setup with VNets, Subnets, and Key Vault. Integrated Prometheus metrics collection and Grafana dashboards for real-time service health monitoring.",
    metrics: ["99.9% Uptime", "Real-time Alerts", "Secure Networking"],
    stack: ["Azure VNet", "Key Vault", "Prometheus", "Grafana", "Nginx"],
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-primary text-sm font-mono mb-2">// featured work</div>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit">
            Things I've <span className="text-muted-foreground italic">shipped</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className={`glass p-8 rounded-2xl border flex flex-col h-full transition-all duration-300 hover:-translate-y-2 ${
                project.featured ? "border-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.1)] md:col-span-2 md:grid md:grid-cols-2 md:gap-8" : "border-white/5 hover:border-white/20"
              }`}
            >
              <div className="flex-1">
                {project.featured && (
                  <div className="text-xs font-mono text-primary mb-4 tracking-wider uppercase">★ Featured Project</div>
                )}
                {!project.featured && (
                  <div className="text-5xl font-bold text-white/5 mb-4 font-outfit">0{index + 1}</div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-4 font-outfit">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-sm font-medium text-foreground flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                      {metric}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-end mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* 
                  Since these are proprietary internal projects, we don't have public GitHub or Live Demo links.
                  But we can keep the UI placeholders if the user wants to add them later.
                */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <span className="text-sm text-muted-foreground italic">Proprietary / Internal</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
