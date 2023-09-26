import PropTypes from "prop-types";
import "./card.scss";

const Card = ({ children, className = "", header = "" }) => {
  return (
    <div className={`card ${className}`}>
      <h3 className="card__header">{header}</h3>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  header: PropTypes.string,
};
export default Card;
