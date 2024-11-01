/** @format */

import { SetStateAction } from "react";
import BackDrop from "./BackDrop";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: {
    scale: 0,
    opacity: 0,
    x: "-50%",
    y: "-50%",
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

interface ModalProps {
  open: boolean;
  onBackdropClick: () => void;
  children: React.ReactNode;
}
export default function Modal({ open, onBackdropClick, children }: ModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <BackDrop handleClick={onBackdropClick} />
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed z-50 top-1/2 left-1/2 bg-foreground p-4 rounded-lg"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
