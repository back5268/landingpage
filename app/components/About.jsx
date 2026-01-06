"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Globe } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
  ];

  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about creating intuitive and dynamic user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Abstract */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/5 p-8 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div className="p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <Code className="text-blue-400 mb-3" size={32} />
                  <h3 className="font-semibold text-white">Frontend</h3>
                </div>
                <div className="p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors translate-y-8">
                  <Server className="text-purple-400 mb-3" size={32} />
                  <h3 className="font-semibold text-white">Backend</h3>
                </div>
                <div className="p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-white/5 hover:border-green-500/30 transition-colors -translate-y-8">
                  <Database className="text-green-400 mb-3" size={32} />
                  <h3 className="font-semibold text-white">Database</h3>
                </div>
                <div className="p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-white/5 hover:border-pink-500/30 transition-colors">
                  <Globe className="text-pink-400 mb-3" size={32} />
                  <h3 className="font-semibold text-white">Deployment</h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Fullstack Developer based in Vietnam
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I specialize in building high-quality websites and applications with modern technologies. 
              My journey started 5 years ago, and I've since worked with startups and established companies 
              to deliver robust solutions.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I enjoy solving complex problems and learning new technologies. When I'm not coding, 
              you can find me exploring new coffee shops or playing video games.
            </p>

            <div className="flex gap-8 border-t border-gray-800 pt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
