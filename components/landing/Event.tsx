/** @format */
'use client'
import EventCard from "../ui/cards/EventCard";
import Mic from "../ui/icons/Mic";
import Qa from "../ui/icons/Qa";
import Network from "../ui/icons/Network";
import { motion } from "framer-motion";

export default function EventHighlights() {
  return (
    <motion.section
      id="event"
      className="flex justify-center items-center flex-col px-6 md:px-16 py-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="sub-title mb-6">Event HightLight</h1>
      <p className="md:text-lg text-center">
        Discover the Future: Key Moments Shaping Tomorrow’s Innovation
      </p>
      <div className="flex flex-col md:flex-row flex-wrap  md:justify-center gap-x-8 gap-y-6 mt-12 md:mt-20">
        <EventCard
          event={{
            icon: <Mic className="fill-foreground w-[40px] h-[40px]" />,
            title: "Keynote Speech",
            description:
              "Explore the future of the Future of Cybersecurity & Innovation",
          }}
        />
        <EventCard
          event={{
            icon: <Qa className="fill-foreground w-[40px] h-[40px]" />,
            title: "Q&A Session",
            description: "Engage directly with speakers in an interactive Q&A",
          }}
        />
        <EventCard
          event={{
            icon: <Network className="fill-foreground w-[40px] h-[40px]" />,
            title: "Networking",
            description: "Connect with industry professionals",
          }}
        />
      </div>
    </motion.section>
  );
}
