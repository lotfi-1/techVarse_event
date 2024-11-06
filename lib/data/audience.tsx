/** @format */

import { FaGraduationCap } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { FaBriefcase } from "react-icons/fa6";
import { RiSearchLine } from "react-icons/ri";

export const audience = [
  {
    icon: <FaBriefcase className="text-foreground w-10 h-10" />,
    title: "Professionals",
    description: `Stay ahead of industry trends by learning how AI is transforming sectors like healthcare, 
      finance, and beyond. Connect with peers and discover how AI can drive your business forward.`,
  },
  {
    icon: <FaGraduationCap className="text-foreground w-10 h-10" />,
    title: "Students",
    description: `Deepen your understanding of AI and its real-world applications. 
      Engage with leading experts and explore opportunities for academic and career growth in the field of technology.`,
  },
  {
    icon: <HiCode className="text-foreground w-10 h-10" />,
    title: "Developers",
    description: `Explore cutting-edge tools and frameworks in AI and machine learning. 
      Collaborate with other developers to build innovative solutions and address real-world challenges.`,
  },
  {
    icon: <RiSearchLine className="text-foreground w-10 h-10" />,
    title: "Researchers",
    description: `Engage in discussions on the latest AI breakthroughs. 
      Network with pioneers and share ideas on how AI is accelerating advancements in various fields of research and development.`,
  },
];
