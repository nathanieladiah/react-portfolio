import PropTypes from "prop-types";
import projectImg from "../../assets/img/blog.png";
import Card from "../Generic/Card/Card";
import "./project.scss";

const Project = ({ title }) => {
  return (
    <Card header={title} className="project">
      <div className="project__image">
        <img src={projectImg} alt="" />
      </div>
      <div className="project__tags">
        <span>#HTML</span>
        <span>#CSS</span>
        <span>#responsive</span>
      </div>
      <h4 className="project__title">Recipe Blog</h4>
      <p className="project__description">
        In this project, I work with HTML and CSS to create a responsive page.
        This page is similar with a page. The design is from devchallenge.io
      </p>
      <div className="project__actions">
        <button className="card__button">Demo</button>
        <button className="card__button card__button--ghost">Code</button>
      </div>
    </Card>
  );
};

Project.propTypes = {
  title: PropTypes.string,
};
export default Project;
