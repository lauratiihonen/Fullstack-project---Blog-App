import { Link } from "react-router-dom";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/1410226/pexels-photo-1410226.jpeg?cs=srgb&dl=pexels-lumn-1410226.jpg&fm=jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Lifestyle</span>
          <span className="postCategory">Music</span>
          <span className="postCategory">Knitting</span>
          <span className="postCategory">Tech</span>
        </div>
        <span className="postTitle">
          <Link className="link" to="/post/:postId">
            Ut id libero id est eleifend posuere ac nec nibh
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Vestibulum nisl est, vehicula id libero non, fringilla malesuada sapien.
        Morbi vel quam tellus. Proin at sem rutrum, rutrum massa vitae, lacinia
        eros.
      </p>
    </div>
  );
}
