import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/1410226/pexels-photo-1410226.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
        />
      </div>
      <h1 className="singlePostTitle">
        Donec hendrerit scelerisque ex eu placerat.
        <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author: <b>Laura</b>
        </span>
        <span className="singlePostDate">1 hour ago</span>
      </div>
      <p className="singlePostDesc">
        Donec interdum condimentum sapien, vel pulvinar nulla accumsan nec.
        Curabitur at efficitur nunc. Sed nec nunc pretium, posuere massa eget,
        vulputate erat. In rutrum iaculis sem, ac aliquam nunc condimentum a.
        Aliquam erat volutpat. Donec accumsan eros massa, nec ultrices lectus
        consequat eu. Pellentesque vitae velit est. Etiam nec pretium nibh.
        Phasellus consequat hendrerit lorem non consectetur. Nam sollicitudin
        scelerisque velit, eget aliquet diam rhoncus ut. Nunc leo ipsum, iaculis
        a feugiat ut, tempus non orci. Phasellus vel gravida ipsum. Ut odio
        mauris, suscipit posuere dapibus cursus, iaculis eget mi. Pellentesque
        luctus lacus nec sapien tempor tincidunt. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse semper, felis id sollicitudin
        dictum, lacus arcu viverra ex, vitae pretium dolor urna sed purus. Donec
        hendrerit scelerisque ex eu placerat. Maecenas sed risus at neque
        lobortis feugiat. Morbi efficitur dui nec porta porttitor. Pellentesque
        et mi diam. Proin eget quam elit. Praesent rutrum pretium felis, vel
        ultrices risus pellentesque nec.
      </p>
    </div>
  );
}
