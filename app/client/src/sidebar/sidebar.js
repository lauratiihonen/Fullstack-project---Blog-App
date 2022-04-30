import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/3738087/pexels-photo-3738087.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu
          lectus, ultricies eu augue ac, tincidunt condimentum sapien. Etiam
          neque purus, tincidunt sit amet varius eget, varius quis nibh. Donec
          pellentesque nulla feugiat ullamcorper viverra.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Lifestyle</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Knitting</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Gardening</li>
          <li className="sidebarListItem">Recipes</li>
        </ul>
      </div>
    </div>
  );
}
