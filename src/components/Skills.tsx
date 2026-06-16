import React from "react";
import { motion } from "framer-motion";
import { Database, Layout, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-primary" />,
    skills: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS", "TypeScript", "Next.js"],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6 text-primary" />,
    skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
  },
  {
    title: "Tools & Workflow",
    icon: <Wrench className="w-6 h-6 text-primary" />,
    skills: ["Git & GitHub", "VS Code", "Figma", "Docker", "Vite", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="font-mono text-primary text-2xl mr-2">02.</span> Skills & Tech
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs ml-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="mb-6 bg-primary/10 w-12 h-12 rounded flex items-center justify-center group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary text-xs">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
