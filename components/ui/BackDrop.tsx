/** @format */

import { motion } from "framer-motion";

const backDropVariants = {
  hidden: { opacity: 0, transition: { when: "afterChildren" } },
  visible: { opacity: 1, transition: { when: "beforeChildren" } },
};
export default function BackDrop({ handleClick }: { handleClick: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 w-full h-full z-50 backdrop-blur-sm"
      variants={backDropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={handleClick}
    />
  );
}
