"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "React", logo: "/logos/react.svg", level: 90 },
  { name: "Next.js", logo: "/logos/nextdotjs.svg", level: 85 },
  { name: "Node.js", logo: "/logos/nodedotjs.svg", level: 80 },
  { name: "MongoDB", logo: "/logos/mongodb.svg", level: 75 },
  { name: "Express.js", logo: "/logos/express.svg", level: 80 },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg", level: 90 },
  { name: "TypeScript", logo: "/logos/typescript.svg", level: 85 },
];

export default function SkillsShowcase() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Start animation when component mounts
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center my-6">
        My Technical Skills
      </h2>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* SVG Logo */}
            <Image
              src={skill.logo}
              alt={skill.name}
              width={100}
              height={100}
              className="w-10 h-10 bg-white rounded-sm"
            />

            {/* Skill Name & Animated Progress Bar */}
            <div className="w-full">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-600">{skill.level}%</span>
              </div>

              <div className="h-2 bg-gray-300 rounded-md mt-1 overflow-hidden">
                <motion.div
                  className="h-2 bg-blue-500 rounded-md"
                  initial={{ width: 0 }}
                  animate={{ width: isVisible ? `${skill.level}%` : "0%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
