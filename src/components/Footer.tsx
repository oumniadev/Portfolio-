import React from "react";
import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-border mt-12 bg-background relative z-10">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-4">
        <a href="#top" className="flex items-center gap-2 group mb-2">
          <Terminal className="text-primary w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="font-mono font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            OS.
          </span>
        </a>
        <p className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors cursor-default">
          Designed & Built by Oumnia Selmane
        </p>
        <p className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
