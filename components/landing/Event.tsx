/** @format */
"use client";
import EventCard from "../ui/cards/EventCard";
import Section from "../ui/Section";
import { eventHighlights } from "@/lib/data/event";

export default function EventHighlights() {
  return (
    <Section id="event" className="flex justify-center items-center flex-col">
      <h1 className="sub-title mb-6">Event HightLight</h1>
      <p className="md:text-lg text-center">
        Discover the Future: Key Moments Shaping Tomorrow’s Innovation
      </p>
      <div className="flex flex-col md:flex-row flex-wrap  md:justify-center gap-x-8 gap-y-6 mt-12 md:mt-20">
        {eventHighlights.map((event, ind) => (
          <EventCard key={ind} event={event} />
        ))}
      </div>
    </Section>
  );
}
