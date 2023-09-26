import { FaEnvelope, FaPhone } from "react-icons/fa";
import Card from "../Generic/Card/Card";
import "./intro.scss";

const Intro = () => {
  return (
    <Card className="intro">
      <div className="intro__image"></div>
      <div className="introText">
        <div className="introText__top">
          <div className="introText__top--left">
            <h1 className="introText__name">Nathaniel Adiah</h1>
            <p className="introText__title">Full Stack Developer</p>
          </div>
          <div className="introText__top--right">
            <p className="introText__email introText__info">
              <FaEnvelope />
              nathanieljadiah@gmail.com
            </p>

            <p className="introText__phone introText__info">
              <FaPhone />
              (868) 472-3716
            </p>
          </div>
        </div>
        <div className="introText__main">
          <p>
            Hi there! I&apos;m a web developer who loves to create awesome
            websites and apps. I have a passion for coding and learning new
            technologies.
          </p>
          <br />
          <p>
            I enjoy working on challenging projects that require creativity and
            problem-solving skills.
          </p>
        </div>
      </div>
    </Card>
  );
};
export default Intro;
