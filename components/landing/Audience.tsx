/** @format */
"use client";
import Mic from "../ui/icons/Mic";
import Qa from "../ui/icons/Qa";
import Network from "../ui/icons/Network";
import AudienceCars from "../ui/cards/AudienceCard";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Audience() {
  return (
    <motion.section
      id="audience"
      className="w-full flex justify-start items-center flex-wrap gap-x-20 px-6 md:px-16 py-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-[600px] lg:w-1/3 flex flex-col items-start">
        <h1 className="sub-title !text-start mb-6">Who Should Attend?</h1>
        <p className="md:text-lg text-start mb-8">
          Discover how AI is shaping the future across industries. Whether
          you're a professional, student, developer, or researcher, this event
          will provide valuable insights and networking opportunities to stay
          ahead of the curve.
        </p>
        <div>
          <Link href="/register" className="btn-primary">
            Register Now
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-w-2/3 flex flex-wrap items-center gap-x-12 gap-y-16 mt-20">
        <AudienceCars
          audience={{
            icon: <Mic className="fill-foreground w-[40px] h-[40px]" />,
            title: "Professionals",
            description: `Stay ahead of industry trends by learning how AI is transforming sectors like healthcare, 
            finance, and beyond. Connect with peers and discover how AI can drive your business forward.`,
          }}
        />
        <AudienceCars
          audience={{
            icon: <Qa className="fill-foreground w-[40px] h-[40px]" />,
            title: "Students",
            description: `Deepen your understanding of AI and its real-world applications. 
            Engage with leading experts and explore opportunities for academic and career growth in the field of technology.`,
          }}
        />
        <AudienceCars
          audience={{
            icon: <Network className="fill-foreground w-[40px] h-[40px]" />,
            title: "Developers",
            description: `Explore cutting-edge tools and frameworks in AI and machine learning. 
            Collaborate with other developers to build innovative solutions and address real-world challenges.`,
          }}
        />
        <AudienceCars
          audience={{
            icon: <Network className="fill-foreground w-[40px] h-[40px]" />,
            title: "Researchers",
            description: `Engage in discussions on the latest AI breakthroughs. 
            Network with pioneers and share ideas on how AI is accelerating advancements in various fields of research and development.`,
          }}
        />
      </div>
    </motion.section>
  );
}
