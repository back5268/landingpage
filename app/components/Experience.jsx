"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "Tech Corp",
    year: "2023 - Present",
    description: "Leading the frontend team, architecting Next.js applications, and improving performance.",
  },
  {
    role: "Fullstack Developer",
    company: "StartUp Inc",
    year: "2021 - 2023",
    description: "Built fullstack features using React, Node.js, and MongoDB. Implemented CI/CD pipelines.",
  },
  {
    role: "Junior Web Developer",
    company: "Web Agency",
    year: "2020 - 2021",
    description: "Developed responsive websites for clients. Worked with WordPress and custom HTML/CSS.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gray-800" />
              
              <div className="md:flex items-start justify-between group mb-12">
                <div className="hidden md:block w-5/12 text-right pr-8">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                
                {/* Desktop Center Point */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 flex-col items-center h-full">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-black z-10" />
                  <div className="w-px h-full bg-gray-800 -mt-2" />
                </div>
                
                {/* Mobile Dot */}
                <div className="md:hidden absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-blue-500" />

                <div className="md:w-5/12 md:pl-8">
                  <div className="md:hidden mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-blue-400 mb-3 border border-blue-500/20">
                    {exp.year}
                  </span>
                  <p className="text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
