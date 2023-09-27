import blogImage from "../../assets/img/blog.jpg";
import Card from "../Generic/Card/Card";
import "./blog.scss";

const Blog = () => {
  return (
    <Card className="blog" header="Blog">
      <div className="body">
        <h4 className="blog__title">How to organize your CSS</h4>
        <div className="blog__image">
          <img src={blogImage} alt="" />
        </div>
        <div className="blog__blurb">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            deleniti at repellat nihil odio quisquam natus sed omnis? Officia
            dicta perferendis quos architecto nisi eligendi.
          </p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus porro repudiandae eveniet perferendis! Eius, aut quia
            commodi accusamus quae id!
          </p>
        </div>
        <a href="#" className="blog__link">
          dev.to
        </a>
      </div>
    </Card>
  );
};
export default Blog;
