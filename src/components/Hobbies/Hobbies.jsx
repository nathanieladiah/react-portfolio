import readingImg from "../../assets/img/hobby-reading.jpg";
import writingImg from "../../assets/img/hobby-writing.jpg";

import gamingImg from "../../assets/img/hobby-gaming.jpg";

import Card from "../Generic/Card/Card";
import Hobby from "../Hobby/Hobby";
import "./hobbies.scss";

const Hobbies = () => {
  const data = [
    {
      title: "Writing",
      img: writingImg,
      desc: "I'm interested in creating fantasy novels.",
    },
    {
      title: "Reading",
      img: readingImg,
      desc: "This is where I get inspired. I love to read fantasy.",
    },
    {
      title: "Gaming",
      img: gamingImg,
      desc: "Sometimes I sit and relax by grinding away looking for diamonds on Minecraft or trying to be a billionaire in gtaOnline.",
    },
  ];
  return (
    <Card className="hobbies" header="Hobbies">
      <div className="hobbies__container">
        {data.map((hobby) => {
          const { title, img, desc } = hobby;
          return <Hobby key={title} title={title} img={img} desc={desc} />;
        })}
      </div>
    </Card>
  );
};
export default Hobbies;
