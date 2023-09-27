import PropTypes from "prop-types";
import "./hobby.scss";

const Hobby = ({ title, img, desc }) => {
  return (
    <div className="hobby">
      <div className="hobby__img">
        <img src={img} />
      </div>
      <h4 className="hobby__title">{title}</h4>
      <p className="hobby__description">{desc}</p>
    </div>
  );
};

Hobby.propTypes = {
  title: PropTypes.string,
  img: PropTypes.node,
  desc: PropTypes.string,
};

export default Hobby;
