"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: "Expert" },
  { name: "React", level: "Expert" },
  { name: "Next.js", level: "Expert" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "Tailwind CSS", level: "Expert" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Docker", level: "Intermediate" },
  { name: "AWS", level: "Intermediate" },
  { name: "GraphQL", level: "Advanced" },
  { name: "Framer Motion", level: "Advanced" },
  { name: "Git", level: "Expert" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-blue-500/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400">The technologies I work with daily</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
              className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-default group"
            >
              <h3 className="text-lg font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                {skill.level}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
