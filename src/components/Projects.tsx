import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Folder } from "lucide-react";

const projects = [
  {
    title: "Agdal Ryad",
    description: "A comprehensive real estate and property listing web application. Features include property search, advanced filtering, detailed property pages, and an elegant UI for browsing premium real estate listings.",
    github: "https://github.com/oumniadev"
  },
  {
    title: "Goût de la Mer",
    description: "An elegant restaurant website tailored for a premium seafood establishment. Showcases the menu, ambiance, and allows customers to make reservations directly through a streamlined interface.",
    github: "https://github.com/oumniadev"
  },
  {
    title: "Skin Beauty",
    description: "A sleek, modern e-commerce storefront for a beauty and skincare brand. Focuses on high-quality product imagery, smooth transitions, and a minimalist design aesthetic that highlights the products.",
    github: "https://github.com/oumniadev"
  },
  {
    title: "App Calculator",
    description: "A sleek, highly functional calculator application built with core web technologies. Features a clean, neumorphic design with support for complex operations and state management.",
    github: "https://github.com/oumniadev"
  },
  {
    title: "Web Site Project",
    description: "A comprehensive full-stack web project demonstrating core development skills, including user authentication, CRUD operations, database integration, and responsive design principles.",
    github: "https://github.com/oumniadev"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="font-mono text-primary text-2xl mr-2">03.</span> Some Things I've Built
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs ml-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />

              <div className="p-8 flex flex-col flex-1 relative z-10">
                <Folder className="w-10 h-10 text-primary mb-6" />

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
              </div>

              <div className="px-8 pb-6 relative z-10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-primary/40 text-primary rounded py-2.5 text-sm font-mono hover:bg-primary/10 hover:border-primary transition-all duration-200"
                >
                  <FaGithub className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
