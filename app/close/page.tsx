/** @format */
"use client";

import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Particles from "@/components/ui/Particles";
import { useEffect, useState } from "react";
import useTheme from "@/hooks/use-theme";

export default function Page() {
  const { theme } = useTheme();
  const [color, setColor] = useState(theme === "dark" ? "#F7F7F7" : "#0C0D0E");
  useEffect(() => {
    setColor(theme === "dark" ? "#F7F7F7" : "#0C0D0E");
  }, [theme]);
  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row lg:justify-evenly font-bold text-2xl md:text-3xl py-16 gap-x-20 gap-y-[52px] px-6 md:px-16 mt-10 pb-28">
        Registrations are Close
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <Footer />
    </div>
  );
}
