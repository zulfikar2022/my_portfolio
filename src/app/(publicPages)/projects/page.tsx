import ProjectOne from "@/components/projectDetailsShowing/Project1";
import ProjectTwo from "@/components/projectDetailsShowing/Project2";
import ProjectThree from "@/components/projectDetailsShowing/Project3";

export const metadata = {
  title: "MERN Mastermind | Projects",
  description: "Welcome to my project page",
};
const ProjectPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
    </div>
  );
};

export default ProjectPage;
