/** @format */
"use client";
import SpeakerCard from "../ui/cards/SpeakerCard";
import Section from "../ui/Section";
import { speakers } from "@/lib/data/speacker";

export default function Speakers() {
  return (
    <Section
      id="speakers"
      className="flex justify-center items-center flex-col"
    >
      <h1 className="sub-title mb-6">Meet The Speakers</h1>
      <p className="md:text-lg text-center">
        Leading minds in cybersecurity and entrepreneurship.
      </p>
      <div className="w-full flex flex-col md:flex-row flex-wrap items-center md:justify-evenly gap-y-16 mt-12 ">
        {speakers.map((speaker, ind) => (
          <SpeakerCard key={ind} speaker={speaker} />
        ))}
      </div>
    </Section>
  );
}
