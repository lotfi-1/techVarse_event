/** @format */
"use client";
import Section from "../ui/Section";

export default function Partners() {
  return (
    <Section
      id="partners"
      className="flex justify-center items-center flex-col"
    >
      <p className="md:text-lg text-center font-bold">
        Building Innovation Together: Our Trusted Partners{" "}
      </p>
      <div className="flex flex-wrap max-w-[700px] justify-center items-center gap-x-8 gap-y-6 mt-6">
        {Array.from({ length: 16 }).map((_, i) => (
          <p key={i} className="font-bold text-xl">
            Logo {i}
          </p>
        ))}
      </div>
    </Section>
  );
}
