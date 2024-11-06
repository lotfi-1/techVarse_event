/** @format */

"use client";
import Link from "next/link";
import Articles from "../ui/Articles";
import Section from "../ui/Section";
import { articles } from "@/lib/data/articles";

export default function Schedule() {
  return (
    <Section
      id="schedule"
      className="flex justify-start items-center flex-wrap gap-x-20"
    >
      <div className="w-full max-w-[600px] flex flex-col items-start">
        <span>Schedule</span>
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
    </Section>
  );
}
