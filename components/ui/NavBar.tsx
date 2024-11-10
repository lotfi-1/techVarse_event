/** @format */
"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";
import BackDrop from "./BackDrop";

const NAV_ITEMS = [
  { href: "/#home", label: "Event" },
  { href: "/#event", label: "Highlights" },
  { href: "/#speakers", label: "Speaker" },
  { href: "/#audience", label: "Audience" },
  { href: "/#schedule", label: "Schedule" },
];

const sidebarVariants = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "tween" } },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
};

const listVariants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

export default function Navbar() {
  return (
    <>
      <DesktopNavBar />
      <SideNavBar />
    </>
  );
}

function DesktopNavBar() {
  return (
    <>
      <div className="hidden md:flex">
        <ul className="flex gap-x-5">
          {NAV_ITEMS.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-primary-txt transition-all hover:text-purple"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex">
        <Link href="/close" className="btn-primary">
          Register Now
        </Link>
      </div>
    </>
  );
}

function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex gap-x-6 md:hidden">
      {/* Mobile Menu Icon */}
      <div className="hidden sm:block">
        <Link href="/close" className="btn-primary">
          Register Now
        </Link>
      </div>
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <HiMiniBars3BottomRight className="text-2xl" />
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <BackDrop handleClick={handleClick} />
            <motion.div
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 left-0 z-[5000] h-full w-60 bg-background"
            >
              <motion.ul
                variants={listVariants}
                className="flex flex-col items-center mt-10"
                initial="closed"
                animate="open"
                exit="closed"
              >
                {NAV_ITEMS.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-4"
                  >
                    <Link
                      href={item.href}
                      className="transition-all hover:text-purple"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}

                {/* Join Now Button */}
                <motion.li
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 sm:hidden"
                >
                  <Link href="/close" className="btn-primary">
                    Register Now
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
