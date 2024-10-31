/** @format */

"use client";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { motion } from "framer-motion";
import Counter from "../Counter";
import Link from "next/link";

export default function Home() {
  return (
    <motion.section
      id="home"
      className="flex justify-center items-center flex-col px-6 md:px-16 mt-10 mb-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="title">Unlock the Future of </h1>
      <h1 className="title">Cybersecurity & Innovation</h1>
      <p className="mt-4 mb-5 text-center">
        Join us for an immersive experience with industry experts in
        cybersecurity and entrepreneurship.
      </p>
      {[
        { icon: <SlCalender />, text: "Mon 11 Nov 2024" },
        { icon: <IoLocationOutline />, text: "Yahia Fares University-wazra" },
        { icon: <AiOutlineUser />, text: "Dr. chergui & omar haroun" },
      ].map((item, index) => (
        <div key={index} className="flex gap-x-2 items-center">
          {item.icon}
          <span>{item.text}</span>
        </div>
      ))}
      <Counter />
      <div className="flex py-4">
        <Link href="/register" className="btn-primary mr-4">Register Now</Link>
        <button className="btn-secondary">Learn More</button>
      </div>
    </motion.section>
  );
}
