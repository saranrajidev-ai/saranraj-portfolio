import Link from "next/link";
import { Mail, GitFork } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-bold font-outfit tracking-tighter">
            <span className="text-primary">&lt;</span>
            SR
            <span className="text-primary">/&gt;</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left max-w-sm">
            Building fintech infrastructure that moves money reliably.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:saranraji.dev@gmail.com"
            className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://linkedin.com/in/saranrajdev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://github.com/saranrajidev-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="GitHub"
          >
            <GitFork size={18} />
          </a>
        </div>

        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Saranraj S. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
