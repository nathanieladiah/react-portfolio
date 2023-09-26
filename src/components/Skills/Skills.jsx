import Card from "../Generic/Card/Card";
import "./skills.scss";

const Skills = () => {
  return (
    <Card className="skills">
      <h3 className="card__header">Skills</h3>
      <div className="skills__container">
        <ul className="skills__list">
          <li className="skills__list--item">JavaScript</li>
          <li className="skills__list--item">JavaScript</li>
          <li className="skills__list--item">JavaScript</li>
          <li className="skills__list--item">JavaScript</li>
          <li className="skills__list--item">JavaScript</li>
        </ul>
        <ul className="skills__list">
          <li className="skills__list--item">JavaScript</li>
          <li className="skills__list--item">JavaScript</li>
          <li className="skills__list--item">JavaScript</li>
          <li className="skills__list--item">JavaScript</li>
          <li className="skills__list--item">JavaScript</li>
        </ul>
      </div>
    </Card>
  );
};
export default Skills;
