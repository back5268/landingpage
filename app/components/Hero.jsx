"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-orange-50/50 rounded-bl-[100px] hidden lg:block" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-main">
              Setup your <span className="text-primary">Mijuapp</span> app <br/> account in no-time!
            </h1>
            <p className="text-lg text-text-muted max-w-xl">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all flex items-center gap-2"
              >
                <span>Download</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full border-2 border-text-muted/20 text-text-main font-semibold hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                <span>Play Video</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
             {/* Placeholder Illustration */}
             <div className="relative w-full max-w-lg aspect-square">
                {/* Phone Frame */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[520px] bg-red-500 rounded-[40px] shadow-2xl overflow-hidden border-8 border-text-main z-10">
                   <div className="w-full h-full bg-primary relative overflow-hidden flex flex-col items-center justify-center p-6">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl mb-4 backdrop-blur-sm" />
                      <div className="w-full h-32 bg-white/20 rounded-2xl mb-4 backdrop-blur-sm" />
                      <div className="flex gap-2 w-full">
                         <div className="w-1/2 h-32 bg-white/20 rounded-2xl backdrop-blur-sm" />
                         <div className="w-1/2 h-32 bg-white/20 rounded-2xl backdrop-blur-sm" />
                      </div>
                   </div>
                </div>
                
                {/* Decorative Characters (Circles/Shapes) */}
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-20 left-0 w-32 h-32 bg-secondary rounded-full opacity-20 blur-2xl" 
                />
                <motion.div 
                   animate={{ y: [0, 15, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute bottom-20 right-0 w-40 h-40 bg-primary rounded-full opacity-20 blur-3xl" 
                />

                {/* SVG Character Placeholder */}
                <img src="https://placehold.co/400x400/png?text=Illustration" alt="App Illustration" className="w-[80%] h-auto object-contain absolute bottom-0 right-10 z-20 hidden" />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
