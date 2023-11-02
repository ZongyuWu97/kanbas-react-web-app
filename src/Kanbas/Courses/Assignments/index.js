import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "bootstrap/dist/css/bootstrap.min.css"


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <div class="d-flex flex-row">
        <div class="flex-grow-1 w-25">
          <input type="text" placeholder="Search for Assignments" className="form-control w-50" />
        </div>
        <button class="float-end" style={{background: "grey"}}>
          <i class="fa fa-plus float-end" aria-hidden="true" ></i>
          Group</button>
        <button class="float-end" style={{background: "red", color: "white"}}>
          <i class="fa fa-plus float-end" aria-hidden="true" ></i>
          Assignment</button>
        <select class="float-end">
          <option selected value="EAD">
            Edit Assignment Dates</option>
        </select>
      </div>

      <hr/>

      <ul className="list-group" style={{ background: "#e2e3e5", marginTop: "30px"}}>
        <h2>Assignments for course {courseId}</h2>
        <div>
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item">
              {assignment.title}
            </Link>
          ))}
        </div>
      </ul>
    </div>
  );
}
export default Assignments;