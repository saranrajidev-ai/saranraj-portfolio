"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Backend & System Design",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "RESTful APIs", "FastAPI", "GraphQL", "RabbitMQ", "Microservices", "Event-Driven Architecture"],
  },
  {
    title: "Frontend Development",
    icon: "🖥️",
    skills: ["React.js","TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "RTK Query", "Context API", "Material UI"],
  },
  {
    title: "AI & Machine Learning",
    icon: "🧠",
    skills: ["Python", "LLM Integration", "LangChain", "Retrieval-Augmented Generation (RAG)", "Vector Databases", "Pinecone"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "MySQL", "Redis", "Schema Design", "Aggregations"],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: ["Azure", "Docker", "Nginx", "CI/CD", "Grafana", "Prometheus"],
  },
  {
    title: "Security & Domain",
    icon: "🔒",
    skills: ["Rate Limiting", "JWT", "Payload Encryption", "VAPT", "NBFC Integration", "Loan Origination (LOS)", "CIBIL"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <div className="text-primary text-sm font-mono mb-2">// tech stack</div>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit">
            What I <span className="text-muted-foreground italic">build with</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group"
            >
              <div className="text-4xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity">{category.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-4 font-outfit">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary/50 border border-white/10 rounded-full text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
