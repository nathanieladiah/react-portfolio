import { BiLogoDjango, BiLogoMongodb, BiLogoNodejs } from "react-icons/bi";
import { DiCss3, DiJavascript1, DiPython, DiReact } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import Card from "../Generic/Card/Card";
import "./skills.scss";

const Skills = () => {
  const skillsList = [
    {
      name: "JavaScript",
      icon: <DiJavascript1 />,
    },
    {
      name: "CSS",
      icon: <DiCss3 />,
    },
    {
      name: "Django",
      icon: <BiLogoDjango />,
    },
    {
      name: "Python",
      icon: <DiPython />,
    },
    {
      name: "React",
      icon: <DiReact />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
    {
      name: "node.js",
      icon: <BiLogoNodejs />,
    },
    {
      name: "Mongodb",
      icon: <BiLogoMongodb />,
    },
  ];
  return (
    <Card className="skills">
      <h3 className="card__header">Skills</h3>
      {/* <div className="skills__container"> */}
      <ul className="skills__list">
        {skillsList.map((skill) => (
          <li key={skill.name} className="skills__list--item">
            {skill.icon}
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
      {/* </div> */}
    </Card>
  );
};
export default Skills;
