import PropTypes from "prop-types";
import Card from "../Generic/Card/Card";
import "./project.scss";

const Project = ({ data }) => {
  const { title, img, tags, description, demoLink, githubLink } = data;

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
      <h4 className="project__title">{title}</h4>
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
  data: PropTypes.object,
};
export default Project;
