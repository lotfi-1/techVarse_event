/** @format */
"use client";
import { motion } from "framer-motion";

export default function Partners() {
  return (
    <motion.section
      id="partners"
      className="flex justify-center items-center flex-col px-6 md:px-16 py-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="md:text-lg text-center font-bold">
        Building Innovation Together: Our Trusted Partners{" "}
      </p>
      <div className="flex flex-wrap max-w-[700px] justify-center items-center gap-x-8 gap-y-6 mt-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <p key={i} className="font-bold text-xl">
            Logo {i}
          </p>
        ))}
      </div>
    </motion.section>
  );
}
