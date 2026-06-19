"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Digital Lending Microservices Platform",
    description: "End-to-end loan origination platform serving 10+ NBFCs. Modular microservices handle KYC verification, CIBIL checks, e-NACH repayment setup, and collections workflows — all event-driven.",
    metrics: ["10+ NBFC Clients", "40% Throughput Gain", "5+ Microservices"],
    stack: ["Node.js", "React.js", "RabbitMQ", "MongoDB", "AWS", "Docker"],
    featured: true,
  },
  {
    title: "Loan Servicing Repayment Platform",
    description: "Implemented a loan servicing platform supporting EMI scheduling, repayment tracking, payment reconciliation, delinquency monitoring, collections management, and automated customer communication through SMS and email notifications.",
    metrics: ["NBFC Clients"],
    stack: ["Node.js", "React.js", "RabbitMQ", "MongoDB", "AWS", "Docker"],
    featured: true,
  },
  {
    title: "AWS Enterprise AI RAG Platform",
    description: "Designed and implemented a scalable Retrieval-Augmented Generation (RAG) system using AWS serverless architecture. Enables secure, natural language querying against vast troves of enterprise documents.",
    metrics: ["Serverless Architecture", "High Scalability", "Sub-second Retrieval"],
    stack: ["AWS Lambda", "Amazon S3", "Amazon Bedrock", "DynamoDB", "Next.js"],
    featured: true,
    link: "https://coinledger.shop/",
    image: "/coinledger.png",
  },
  {
    title: "VAPT Security Hardening",
    description: "Led the company's first security audit preparation. Implemented payload encryption, JWT token rotation, rate limiting, and IP whitelisting across 5+ production services.",
    metrics: ["VAPT Certified", "Zero Breaches", "5+ Services Secured"],
    stack: ["JWT", "Encryption", "Rate Limiting", "IP Whitelist"],
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
                
                {project.image && (
                  <div className="mb-6 relative w-full h-48 md:h-64 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/30 transition-colors">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

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
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                      View Live Application <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground italic">Proprietary / Internal</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
