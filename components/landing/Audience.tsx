/** @format */
"use client";
import AudienceCars from "../ui/cards/AudienceCard";
import Link from "next/link";
import Section from "../ui/Section";
import { audience } from "@/lib/data/audience";

export default function Audience() {
  return (
    <Section
      id="audience"
      className="flex justify-start items-center flex-wrap gap-x-20"
    >
      <div className="w-full max-w-[600px] lg:w-1/3 flex flex-col items-start">
        <span>Audience</span>
        <h1 className="sub-title !text-start mb-6">Who Should Attend?</h1>
        <p className="md:text-lg text-start mb-8">
          Discover how Security and Computer Science are shaping the future across industries. Whether
          you're a professional, student, developer, or researcher, this event
          will provide valuable insights and networking opportunities to stay
          ahead of the curve.
        </p>
        <div>
          <Link href="/close" className="btn-primary">
            Register Now
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-w-2/3 flex flex-wrap items-center gap-x-12 gap-y-16 mt-20">
        {audience.map((audience) => (
          <AudienceCars key={audience.title} audience={audience} />
        ))}
      </div>
    </Section>
  );
}
