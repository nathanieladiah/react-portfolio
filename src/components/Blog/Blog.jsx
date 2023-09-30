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
            This is how I structure my styles for any of my projects. Shout out
            to Kevin Powell on YouTube, which is where I got this layout.
          </p>
          <br />
          <p>
            First off, I actually use SASS for my website styles rather than
            plain CSS...
          </p>
        </div>
        <a
          href="https://first-time-dev.blogspot.com/2023/09/how-to-organize-your-css.html"
          target="_blank"
          className="blog__link"
          rel="noreferrer"
        >
          first-time-dev.blogspot
        </a>
      </div>
    </Card>
  );
};
export default Blog;
