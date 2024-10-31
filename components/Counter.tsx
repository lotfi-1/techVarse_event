/** @format */
"use client";
import useCounter from "@/hooks/use-counter";
import CounterCard from "./ui/cards/CounterCard";

export default function Counter() {
  const { days, hours, minutes, seconds } = useCounter();
  return (
    <div className="flex items-center my-5">
      <CounterCard title="Days" count={days} />
      <div className="w-px h-16 bg-foreground" />
      <CounterCard title="Hours" count={hours} />
      <div className="w-px h-16 bg-foreground" />
      <CounterCard title="Minutes" count={minutes} />
      <div className="w-px h-16 bg-foreground" />
      <CounterCard title="Seconds" count={seconds} />
    </div>
  );
}
