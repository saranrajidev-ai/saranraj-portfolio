"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Loader2, CheckCircle, XCircle } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setMessage("Message sent successfully! I'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setMessage(result.error || "Failed to send message.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="text-primary text-sm font-mono mb-2">// get in touch</div>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit">
            Let's <span className="text-muted-foreground italic">work together</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
              Open to full-time roles, contract work, and interesting fintech or AI problems.
              Drop me a message — I typically reply within 24 hours.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:saranraji.dev@gmail.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-mono">saranraji.dev@gmail.com</span>
              </a>
              <a href="tel:+916369290623" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-colors">
                  <Phone size={20} />
                </div>
                <span className="font-mono">+91 63692 90623</span>
              </a>
              <div className="flex items-center gap-4 text-foreground group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/5">
                  <MapPin size={20} />
                </div>
                <span className="font-mono">Bangalore, Karnataka, IN</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass p-8 rounded-2xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-secondary/50 border border-white/10 rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-secondary/50 border border-white/10 rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about the role or project..."
                  className="w-full bg-secondary/50 border border-white/10 rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-md">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              {status !== "idle" && (
                <div className={`p-4 rounded-md flex items-start gap-3 ${status === "success" ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-red-500/10 text-red-500 border border-red-500/20"}`}>
                  {status === "success" ? <CheckCircle size={20} className="shrink-0" /> : <XCircle size={20} className="shrink-0" />}
                  <p className="text-sm">{message}</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
