import ProjectsShowcase from "@/components/featuredProjects/ProjectsShowcase";

export const metadata = {
  title: "MERN Mastermind | Projects",
  description: "Welcome to my project page",
};
const ProjectPage = () => {
  return (
    <div>
      <ProjectsShowcase />
    </div>
  );
};

export default ProjectPage;
