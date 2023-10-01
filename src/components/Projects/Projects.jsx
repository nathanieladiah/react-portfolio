import projectImg from "../../assets/img/blog.png";
import Project from "../Project/Project";
import "./projects.scss";

const Projects = () => {
  const projectsList = [
    {
      projectTitle: "Blog",
      img: projectImg,
      tags: ["HTML", "CSS", "responsive"],
      description:
        "In this project, I work with HTML and CSS to create a responsive page. This page is similar with a page. The design is from devchallenge.io",
      demoLink: null,
      githubLink: "https://github.com/nathanieladiah/blogs",
      id: 1,
    },
    {
      projectTitle: "Blog",
      img: projectImg,
      tags: ["HTML", "CSS", "responsive"],
      description:
        "In this project, I work with HTML and CSS to create a responsive page. This page is similar with a page. The design is from devchallenge.io",
      demoLink: null,
      githubLink: "https://github.com/nathanieladiah/blogs",
      id: 1,
    },
    {
      projectTitle: "Blog",
      img: projectImg,
      tags: ["HTML", "CSS", "responsive"],
      description:
        "In this project, I work with HTML and CSS to create a responsive page. This page is similar with a page. The design is from devchallenge.io",
      demoLink: null,
      githubLink: "https://github.com/nathanieladiah/blogs",
      id: 1,
    },
  ];
  return (
    <section className="projects">
      {/* <Project title="Blog" />
      <Project title="Material Design System" />
      <Project title="Home theater shop" /> */}

      {projectsList.map((project) => (
        <Project key={project.id} data={project} />
      ))}
    </section>
  );
};
export default Projects;
