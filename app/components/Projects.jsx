"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, checkout, and payment integration.",
    tech: ["Next.js", "Stripe", "Tailwind"],
    github: "#",
    demo: "#",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Task Management App",
    description: "Real-time collaboration tool for teams with drag-and-drop kanban boards.",
    tech: ["React", "Firebase", "Redux"],
    github: "#",
    demo: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Dashboard",
    description: "Analytics dashboard visualizing data with AI-powered insights.",
    tech: ["Next.js", "Python", "D3.js"],
    github: "#",
    demo: "#",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400">Some of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
