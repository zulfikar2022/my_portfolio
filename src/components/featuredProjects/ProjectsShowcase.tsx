"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Full stack web application for renting homes.",
    description:
      " A full-stack web application for renting homes. As well as for managing homes from the landlords endpoints. With stripe payment gateway integration.",
    image: "/projects/home.webp",
    link: "https://home-hunt-frontend.vercel.app/",
    featured: true,
  },
  {
    title: "Full stack e-commerce web app.",
    description:
      "A full-stack e-commerce web app using MERN stack and Shurjopay as payment gateway.",
    image: "/projects/bike-1.jpg",
    link: "https://coruscating-bonbon-3879b6.netlify.app/",
  },
  {
    title: "E-commerce Website (Online Toy Store)",
    description:
      "Frontend focused e-commerce website with a modern design and smooth animations. And slight backend functionality like adding products, updating products and deleting products as well as login with google.",
    image: "/projects/panda.png",
    link: "https://venerable-halva-459ef0.netlify.app/",
  },
];

export default function ProjectsShowcase() {
  const featuredProject = projects.find((p) => p?.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      {/* Featured Project */}
      {featuredProject && (
        <motion.div
          className="relative w-full rounded-lg overflow-hidden bg-gray-900 text-white shadow-lg mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={featuredProject.image}
            alt={featuredProject.title}
            width={800}
            height={400}
            className="w-full h-60 object-cover opacity-70"
          />
          <div className="p-6 absolute inset-0 flex flex-col justify-center bg-black/60">
            <h3 className="text-2xl font-bold">{featuredProject.title}</h3>
            <p className="mt-2 text-gray-300">{featuredProject.description}</p>
            <div className="flex flex-row gap-2 mt-2">
              <Link
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 border px-2 py-2 border-white rounded-lg text-white hover:bg-white hover:text-black transition bg-[#1e3a8a]"
              >
                View Project
              </Link>
              <Link
                className="mt-2 ml-3 border px-2 py-2 border-white rounded-lg text-black hover:bg-[#1e3a8a]  hover:text-white transition bg-white  "
                href="/project1"
              >
                See Details
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      {/* Other Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {otherProjects.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-blue-600 hover:underline"
              >
                View Project →
              </a>
              <Link
                className="mx-2 hover:underline"
                href={`/project${index + 2}`}
              >
                See Details →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
