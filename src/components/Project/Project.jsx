import PropTypes from "prop-types";
import projectImg from "../../assets/img/blog.png";
import Card from "../Generic/Card/Card";
import "./project.scss";

const Project = ({ title }) => {
  const projectData = {
    projectTitle: title,
    img: projectImg,
    tags: ["HTML", "CSS", "responsive"],
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similar with a page. The design is from devchallenge.io",
    demoLink: null,
    githubLink: "https://github.com/nathanieladiah/blogs",
  };

  const { projectTitle, img, tags, description, demoLink, githubLink } =
    projectData;

  return (
    <Card className="project">
      <div className="project__image">
        <img src={img} alt="" />
      </div>
      <div className="project__tags">
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
      <h4 className="project__title">{projectTitle}</h4>
      <p className="project__description">{description}</p>
      <div className="project__actions">
        {/* <button className="card__button">Demo</button>
        <button className="card__button card__button--ghost">Code</button> */}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            className="card__button"
            rel="noreferrer"
          >
            Demo
          </a>
        )}

        <a
          href={githubLink}
          target="_blank"
          className="card__button card__button--ghost"
          rel="noreferrer"
        >
          Code
        </a>
      </div>
    </Card>
  );
};

Project.propTypes = {
  title: PropTypes.string,
};
export default Project;
