import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-[128px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-primary mb-4 tracking-wide">Hi, my name is</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight"
          >
            Oumnia Selmane.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-muted-foreground mb-8 tracking-tight"
          >
            I build things for the web.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed"
          >
            I'm a Junior Full Stack Developer specializing in building exceptional digital experiences. Currently, I'm focused on mastering modern web technologies and creating precise, human-centric applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
            >
              <Code2 className="w-5 h-5" />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded hover:border-primary hover:text-primary transition-colors group"
            >
              Contact Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
