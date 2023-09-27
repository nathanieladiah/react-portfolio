import Card from "../Generic/Card/Card";
import "./projectBar.scss";

const ProjectBar = () => {
  return (
    <Card className="projectBar" header="Projects (3)">
      <div className="projectBar__selections">
        <button className="projectBar__button">React</button>
        <button className="projectBar__button">Django</button>
        <button className="projectBar__button projectBar__button--active">
          Responsive
        </button>
      </div>
    </Card>
  );
};
export default ProjectBar;
