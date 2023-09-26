import Card from "./components/Card/Card";
import Intro from "./components/Intro/Intro";

const App = () => {
  return (
    <>
      <Intro />
      <Card>
        <h3 className="card__header">Skills</h3>
        <div className="skills__container">
          <ul className="skills_list">
            <li className="skills__list--item">JavaScript</li>
            <li className="skills__list--item">JavaScript</li>
            <li className="skills__list--item">JavaScript</li>
            <li className="skills__list--item">JavaScript</li>
            <li className="skills__list--item">JavaScript</li>
          </ul>
          <ul className="skills_list">
            <li className="skills__list--item">JavaScript</li>
            <li className="skills__list--item">JavaScript</li>
            <li className="skills__list--item">JavaScript</li>
            <li className="skills__list--item">JavaScript</li>
            <li className="skills__list--item">JavaScript</li>
          </ul>
        </div>
      </Card>
    </>
  );
};
export default App;
