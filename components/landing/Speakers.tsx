/** @format */
"use client";
import { motion } from "framer-motion";
import SpeakerCard from "../ui/cards/SpeakerCard";

const speakers = {
  speaker1: {
    name: "John Doe",
    title: "Founder & CEO",
    role: "Tech Verse",
    bio: "John Doe is a passionate tech entrepreneur who has been working in the tech industry for over 10 years.",
    image: "https://picsum.photos/300/300",
    socials: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },
  },
  speaker2: {
    name: "John Doe",
    title: "Founder & CEO",
    role: "Tech Verse",
    bio: "John Doe is a passionate tech entrepreneur who has been working in the tech industry for over 10 years.",
    image: "https://picsum.photos/300/300",
    socials: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },
  },
};

export default function Speakers() {
  return (
    <motion.section
      id="speakers"
      className="flex justify-center items-center flex-col px-6 md:px-16 my-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="sub-title mb-6">Meet The Speakers</h1>
      <p className="md:text-lg text-center">
        Leading minds in cybersecurity and entrepreneurship.
      </p>
      <div className="w-full flex flex-col md:flex-row flex-wrap items-center md:justify-evenly gap-y-16 mt-12 md:mt-20">
        <SpeakerCard speaker={speakers.speaker1} />
        <SpeakerCard speaker={speakers.speaker2} />
      </div>
    </motion.section>
  );
}
