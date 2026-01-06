"use client";
import { motion } from "framer-motion";
import { Zap, Video, Users } from "lucide-react";

const featuresData = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Awesome Stickers",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    icon: <Video className="w-8 h-8 text-secondary" />,
    title: "Video Chat",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: "Conference Call",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Features loved by our users!</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-100 hover:shadow-2xl transition-all border border-gray-50 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all">
                Browse All Features
            </button>
        </div>
      </div>
    </section>
  );
}
