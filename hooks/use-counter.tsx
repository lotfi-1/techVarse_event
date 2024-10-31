/** @format */

"use client";

import { useEffect, useState } from "react";
const EVENT_DATE = new Date("2024-11-12T00:09:00").getTime();

function calculateTimeLeft() {
  const CURRENT_DATE = new Date().getTime();
  const timeDifference = EVENT_DATE - CURRENT_DATE;

  return {
    days: Math.floor(timeDifference / (24 * 60 * 60 * 1000)),
    hours: Math.floor(
      (timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    ),
    minutes: Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000)),
    seconds: Math.floor((timeDifference % (60 * 1000)) / 1000),
  };
}

export default function useCounter() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      // Reset to zero values when the countdown reaches zero
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        clearInterval(intervalId); // Clear interval when countdown finishes
      }
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return timeLeft;
}
