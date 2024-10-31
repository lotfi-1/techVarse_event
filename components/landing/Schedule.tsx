/** @format */

"use client";
import Link from "next/link";
import Articles from "../ui/Articles";
import { motion } from "framer-motion";

const articles: ArticleProps[] = [
  {
    title: "Keynote Speech",
    body: "Explore the future of the  Future of Cybersecurity & Innovation Future of Cybersecurity & Innovation",
  },
  {
    title: "Keynote Speech",
    body: "Explore the future of the  Future of Cybersecurity & Innovation Future of Cybersecurity & Innovation",
  },
  {
    title: "Keynote Speech",
    body: "Explore the future of the  Future of Cybersecurity & Innovation Future of Cybersecurity & Innovation",
  },
  {
    title: "Keynote Speech",
    body: "Explore the future of the  Future of Cybersecurity & Innovation Future of Cybersecurity & Innovation",
  },
];

export default function Schedule() {
  return (
    <motion.section
      id="schedule"
      className="w-full flex justify-start items-center flex-wrap gap-x-20 px-6 md:px-16 py-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-[600px] flex flex-col items-start">
        <h1 className="sub-title !text-start mb-6">
          Unlock the Future: Dive Into the Agenda
        </h1>
        <p className="md:text-lg text-start mb-8">
          Discover each session and plan your path to make the most of this
          event.
        </p>
        <div>
          <Link href="/register" className="btn-secondary md:!btn-primary">
            Register Now
          </Link>
        </div>
      </div>

      <div className="w-full flex justify-center mt-20 md:h-[400px]">
        <Articles articles={articles} />
      </div>
    </motion.section>
  );
}
