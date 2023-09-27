import Project from "../Project/Project";
import "./projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <Project title="Blog" />
      <Project title="Material Design System" />
      <Project title="Home theater shop" />
    </section>
  );
};
export default Projects;
