import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import "./index.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"


function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div>
      <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}
          >
            {linkToIconMap[link]}
            <br />
            {link}
          </Link>
        ))}
      </div>
    </div>

  );
}
export default KanbasNavigation;
