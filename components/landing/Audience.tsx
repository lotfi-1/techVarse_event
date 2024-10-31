/** @format */
'use client'
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
            title: "Keynote Speech",
            description:
              "Explore the future of the Future of Cybersecurity & Innovation",
          }}
        />
        <AudienceCars
          audience={{
            icon: <Qa className="fill-foreground w-[40px] h-[40px]" />,
            title: "Q&A Session",
            description: "Engage directly with speakers in an interactive Q&A",
          }}
        />
        <AudienceCars
          audience={{
            icon: <Network className="fill-foreground w-[40px] h-[40px]" />,
            title: "Networking",
            description: "Connect with industry professionals",
          }}
        />
        <AudienceCars
          audience={{
            icon: <Network className="fill-foreground w-[40px] h-[40px]" />,
            title: "Networking",
            description: "Connect with industry professionals",
          }}
        />
      </div>
    </motion.section>
  );
}
