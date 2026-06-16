import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="font-mono text-primary text-2xl mr-2">01.</span> About Me
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs ml-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Hello! My name is Oumnia and I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom HTML themes — turns out hacking together HTML & CSS taught me a lot about how the web works!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of building a variety of projects, from elegant landing pages to full-stack applications. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p>
              I'm deeply passionate about the intersection of design and engineering. I care about the details — the exact right color, the perfect spacing, and the smoothest animation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative group mx-auto w-3/4 md:w-full max-w-sm"
          >
            <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded rounded-tl-3xl rounded-br-3xl transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 z-0" />
            <div className="relative z-10 bg-card border border-border p-8 rounded rounded-tl-3xl rounded-br-3xl aspect-square flex flex-col items-center justify-center text-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background/0 to-background/0 pointer-events-none" />
              <p className="font-mono text-primary mb-2 opacity-80">&lt;coder&gt;</p>
              <h3 className="text-2xl font-bold text-foreground mb-4">Crafting Code</h3>
              <div className="w-16 h-1 bg-primary/50 mb-4 rounded-full" />
              <p className="text-sm text-muted-foreground">Turning caffeine and logic into functional, beautiful software.</p>
              <p className="font-mono text-primary mt-6 opacity-80">&lt;/coder&gt;</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
