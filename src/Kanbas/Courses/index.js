import React, { useEffect, useState } from "react";
import { useParams, Routes, Route, Navigate } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades/index";
import { BreadCrumb } from "./BreadCrumb/index";
import axios from "axios";

function Courses() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/api/courses`;
  axios.defaults.withCredentials = true;

  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div className="d-flex flex-column">
      <div style={{ width: "100%" }}>
        <BreadCrumb course={course} />
        <hr />
      </div>

      <div>
        <CourseNavigation />
        <div>
          <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{
              left: "320px",
              top: "50px",
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor />}
              />
              <Route path="Assignments/New"
                element={<AssignmentEditor />} />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Courses;
