import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import db from "../../Database";
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

export function BreadCrumb() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Grades"];
  const { pathname } = useLocation();
  const { courseId } = useParams();

  const course = db.courses.find((course) => course._id === courseId);


  return (
    <nav aria-label="breadcrumb">
      <div className="breadcrumb">
        <Link className="breadcrumb-item" to={`/Kanbas/Courses/${courseId}/Home`} style={{ color: "red", textDecoration: "none" }}>Courses {course.name}</Link>
        {links.map((link) => (
          pathname.includes(link) ? (
            <div key={link} className={"breadcrumb-item active"} aria-current="page">{link}</div>
          ) : null
        ))}
      </div>
    </nav>

  )
}