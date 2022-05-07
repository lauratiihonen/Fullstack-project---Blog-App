import "./sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats()
  },[])
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
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
          <li className="sidebarListItem">{c.name}</li></Link>

          ))}

        </ul>
      </div>
    </div>
  );
}
