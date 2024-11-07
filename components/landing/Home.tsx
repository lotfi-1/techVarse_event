/** @format */

"use client";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import Counter from "../ui/Counter";
import Particles from "@/components/ui/Particles";

import Link from "next/link";
import { useEffect, useState } from "react";
import useTheme from "@/hooks/use-theme";
import Section from "../ui/Section";
export default function Home() {
  const { theme } = useTheme();
  const [color, setColor] = useState(theme === "dark" ? "#F7F7F7" : "#0C0D0E");

  useEffect(() => {
    setColor(theme === "dark" ? "#F7F7F7" : "#0C0D0E");
  }, [theme]);

  return (
    <Section
      id="home"
      className="relative flex  w-full flex-col items-center justify-center overflow-hidden"
    >
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        <h1 className="title">Unlock the Future of </h1>
        <h1 className="title">Cybersecurity & Computer Science</h1>
      </span>

      <p className="mt-4 mb-5 text-center">
        Join us for an immersive experience with industry experts in
        cybersecurity & computer science & AI.
      </p>
      {[
        { icon: <SlCalender />, text: "Mon 11 Nov 2024" },
        { icon: <IoLocationOutline />, text: "Yahia Fares University-ouzera" },
        { icon: <AiOutlineUser />, text: "Dr. chergui & Dr benaissa & titraoui" },
      ].map((item, index) => (
        <div key={index} className="flex gap-x-2 items-center">
          {item.icon}
          <span>{item.text}</span>
        </div>
      ))}
      <Counter />
      <div className="flex py-4">
        <Link href="/register" className="btn-primary mr-4">
          Register Now
        </Link>
        <button className="btn-secondary">Learn More</button>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </Section>
  );
}
