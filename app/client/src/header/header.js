import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSmall">Laura's project</span>
        <span className="headerTitleBig">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/913416/pexels-photo-913416.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt=" "
      />
    </div>
  );
}
