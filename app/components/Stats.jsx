"use client";
import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const displayValue = useTransform(springValue, (latest) => 
    `${Math.floor(latest).toLocaleString()}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

const stats = [
  { value: 381, suffix: "K", label: "Active Downloads" },
  { value: 26, suffix: ".9K", label: "Facebook Likes" }, // Simplified for counter
  { value: 7, suffix: ".5K", label: "Satisfied Customers" },
  { value: 150, suffix: "K", label: "Instagram Followers" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center group hover:bg-white hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-text-main mb-2">
                 {/* Note: Simplified count up for demo */}
                 {stat.value}{stat.suffix}
              </h3>
              <div className="w-8 h-1 bg-secondary rounded-full mb-3 group-hover:w-16 transition-all" />
              <p className="text-text-muted font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
