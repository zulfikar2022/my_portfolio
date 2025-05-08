import AcademicInfo from "@/components/academicInfo/AcademicInfo";
import ProjectsShowcase from "@/components/featuredProjects/ProjectsShowcase";
import SkillsShowcase from "@/components/mySkills/mySkills";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "MERN Mastermind",
  description: "Welcome to my homepage",
};
export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Image */}
        <div className="w-full md:flex-1">
          <AspectRatio ratio={16 / 9} className="w-full bg-muted">
            <Image
              src="/my_photo.png"
              alt="My profile picture"
              fill
              className="h-full w-full object-cover "
            />
          </AspectRatio>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:flex-1 md:pl-8 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold">
            Sayed Zulfikar Mahmud{" "}
            <span className="text-sm">(Frontend Developer)</span>{" "}
          </h2>
          <p className="mt-4 text-lg">
            I am a student of Computer Science and Engineering with a growing
            passion for web development. I am currently learning to build modern
            web applications and aim to work as a web engineer. I enjoy solving
            problems, learning new tools, and building things that people can
            use.
          </p>
          <div className="flex flex-col md:flex-row items-start mt-6 gap-4">
            <Button className="my-2">
              <Link href="/about-me" className="text-xl">
                More About Me
              </Link>
            </Button>
            <Button className="my-2">
              <a
                href="/resume.pdf"
                className="my-2 text-xl"
                download="Sayed_Zulfikar_Mahmud_Resume.pdf"
              >
                Download My Resume
              </a>
            </Button>
            <Button className="my-2">
              <Link
                href="/resume.pdf"
                className=" text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                See My Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <AcademicInfo />
      <SkillsShowcase />
      <ProjectsShowcase />
    </div>
  );
}
