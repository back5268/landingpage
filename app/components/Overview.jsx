"use client";
import { motion } from "framer-motion";

export default function Overview() {
  return (
    <section id="overview" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-0 inset-x-0 h-24 bg-white rounded-b-[50%] -translate-y-12 scale-x-150" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center p-8">
                {/* Abstract UI Representation */}
                <div className="w-[80%] h-[80%] bg-white rounded-xl shadow-lg flex flex-col p-4 space-y-4">
                    <div className="h-8 w-1/3 bg-gray-100 rounded" />
                    <div className="flex-1 bg-gray-50 rounded border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-300">
                        Dashboard Preview
                    </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-4 -bottom-4 w-24 h-24 bg-white p-4 rounded-2xl shadow-xl flex items-center justify-center"
                >
                    <div className="text-primary font-bold text-xl">85%</div>
                </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">What makes us Great!</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-2 mb-6">
              Lorem ipsum dolor sit <br/> consectetur adipiscing elit.
            </h2>
            <p className="text-text-muted text-lg mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <button className="px-8 py-3 rounded-full border border-gray-300 text-text-main font-medium hover:border-primary hover:text-primary transition-colors">
              Learn More
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
