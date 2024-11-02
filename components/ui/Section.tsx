/** @format */
import { motion } from "framer-motion";
interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  const style =
    "w-full px-6 md:px-16 py-10 md:py-20 lg:py-28" + " " + className;
  return (
    <motion.section
      id={id}
      className={style}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}
