"use client";

import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Server, 
  Database, 
  Cloud, 
  Zap, 
  Shield, 
  Cpu, 
  Bot, 
  Layers,
  Search,
  FileText
} from "lucide-react";
import Link from "next/link";

const TECH_STACK = [
  { name: "AWS Lambda", icon: <Zap size={20} />, color: "text-orange-500", bg: "bg-orange-500/10" },
  { name: "Amazon S3", icon: <Database size={20} />, color: "text-green-500", bg: "bg-green-500/10" },
  { name: "Amazon Bedrock", icon: <Bot size={20} />, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "DynamoDB", icon: <Layers size={20} />, color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "API Gateway", icon: <Cloud size={20} />, color: "text-pink-500", bg: "bg-pink-500/10" },
  { name: "Next.js", icon: <Server size={20} />, color: "text-zinc-300", bg: "bg-zinc-500/10" },
];

const FEATURES = [
  {
    title: "Semantic Search",
    description: "Implements vector embeddings to understand the context and intent behind queries, not just keyword matching.",
    icon: <Search className="text-primary" size={24} />
  },
  {
    title: "Serverless Architecture",
    description: "Fully managed AWS serverless stack ensures zero-downtime scalability and pay-as-you-go cost efficiency.",
    icon: <Cloud className="text-primary" size={24} />
  },
  {
    title: "Enterprise Security",
    description: "Data encrypted at rest and in transit. Granular IAM policies ensure secure access to LLMs and document stores.",
    icon: <Shield className="text-primary" size={24} />
  },
  {
    title: "Automated Ingestion",
    description: "S3 event triggers automatically chunk, embed, and index new documents into the vector database in real-time.",
    icon: <Zap className="text-primary" size={24} />
  }
];

export default function AiRagProject() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-6xl px-6 md:px-12 pt-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/#projects" className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>
          
          <div className="text-primary text-sm font-mono mb-4 tracking-wider uppercase">Case Study</div>
          <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6">
            AWS Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">AI RAG Platform</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            A highly scalable Retrieval-Augmented Generation (RAG) system built entirely on AWS serverless architecture. 
            Designed to securely ingest, process, and query vast troves of proprietary enterprise documents using state-of-the-art Large Language Models.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-24"
        >
          {TECH_STACK.map((tech, i) => (
            <div key={i} className="glass p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-3 hover:-translate-y-1 transition-transform">
              <div className={`p-3 rounded-full ${tech.bg} ${tech.color}`}>
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-foreground">{tech.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Architecture Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold font-outfit mb-8">System Architecture</h2>
          <div className="glass p-8 rounded-2xl border border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
            
            <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary border border-white/10 flex items-center justify-center mb-4 z-10">
                  <FileText className="text-muted-foreground" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2">1. Ingestion</h3>
                <p className="text-sm text-muted-foreground">Documents uploaded to Amazon S3 trigger AWS Lambda functions to extract and chunk text.</p>
              </div>

              <div className="hidden md:flex items-center justify-center">
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border-t-2 border-r-2 border-primary"></div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-4 z-10 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                  <Cpu className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2">2. Embedding</h3>
                <p className="text-sm text-muted-foreground">Amazon Bedrock (Titan/Cohere) generates high-dimensional vector embeddings of the chunks.</p>
              </div>

              <div className="hidden md:flex items-center justify-center border-t-2 border-transparent">
                 {/* Decorative space */}
              </div>

              <div className="flex flex-col items-center mt-8 md:mt-0">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-4 z-10 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <Database className="text-accent" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2">3. Storage & Search</h3>
                <p className="text-sm text-muted-foreground">Vectors are stored in OpenSearch/DynamoDB for sub-second semantic retrieval during queries.</p>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
              <div className="text-center md:text-right flex-1">
                <h3 className="text-lg font-bold mb-2">4. Generation</h3>
                <p className="text-sm text-muted-foreground">Retrieved context is passed back to Amazon Bedrock (Claude/Llama) via API Gateway to generate accurate, hallucination-free answers.</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                <Bot className="text-white" size={32} />
              </div>
              <div className="flex-1 hidden md:block" />
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold font-outfit mb-8">Key Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map((feature, i) => (
              <div key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                <div className="mb-4 bg-background w-12 h-12 rounded-lg flex items-center justify-center border border-white/5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Role and Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-secondary/50 to-background">
            <h2 className="text-3xl font-bold font-outfit mb-6">My Role & Impact</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As the lead engineer on this project, I architected the end-to-end pipeline. My primary focus was on ensuring the system could securely handle proprietary data while providing low-latency responses.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-accent mr-3">✓</span>
                <span>Designed the <strong>event-driven ingestion pipeline</strong> using S3, EventBridge, and Lambda, reducing manual upload times to zero.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">✓</span>
                <span>Implemented <strong>advanced chunking strategies</strong> with semantic overlap to retain document context, drastically improving retrieval accuracy.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">✓</span>
                <span>Integrated <strong>Amazon Bedrock</strong> for both embeddings and generation, avoiding third-party API exposure and maintaining strict compliance.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">✓</span>
                <span>Built a sleek <strong>Next.js frontend</strong> with streaming responses to give users a ChatGPT-like real-time experience.</span>
              </li>
            </ul>
          </div>
        </motion.div>

      </section>
    </div>
  );
}
