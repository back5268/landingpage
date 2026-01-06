"use client";
import { motion } from "framer-motion";
import { Rocket, TableProperties, Users2, MessageSquare } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      color: "bg-pink-500",
      title: "Awesome Stickers",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
    },
    {
      icon: <TableProperties className="w-8 h-8 text-white" />,
      color: "bg-purple-500",
      title: "Video Chat",
      desc: "Nulla pariatur excepteur sint occaecat cupidatat non proident."
    },
    {
      icon: <Users2 className="w-8 h-8 text-white" />,
      color: "bg-blue-500",
      title: "Conference Call",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      color: "bg-orange-500",
      title: "Awesome Stickers",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Header */}
            <div className="lg:w-1/3">
                <h2 className="text-3xl md:text-5xl font-bold text-text-main leading-tight mb-6">
                    Awesome app <br/> for business <br/> to grow
                </h2>
                <p className="text-text-muted text-lg mb-8">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <button className="px-8 py-3 bg-primary text-white rounded-full font-medium shadow-lg shadow-primary/30 hover:bg-primary-hover transition-colors">
                    Learn More
                </button>
            </div>

            {/* Right Grid */}
            <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                {features.map((feature, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all flex flex-col items-start"
                    >
                        <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-md`}>
                            {feature.icon}
                        </div>
                        <h4 className="text-xl font-bold text-text-main mb-3">{feature.title}</h4>
                        <p className="text-text-muted text-sm leading-relaxed">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
