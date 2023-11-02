import db from "../../Database";
import { useParams } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <div>
        <select>
          <option selected value="GB">
            Gradebook</option>
        </select>
        <div class="d-flex flex-column">
          <div>
            <div class="float-end">
              <div class="d-flex flex-row">
                <button class="btn btn-secondary float-end" style={{ marginRight: "10px" }}><i
                  class="fa-solid fa-file-import"></i>Import</button>

                <div class="dropdown" style={{ marginRight: "10px" }}>
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="fa-solid fa-file-export"></i>
                    Export
                  </button>
                </div>
                <button class="btn btn-secondary"><i class="fa-solid fa-gear"></i></button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="row">
            <b class="col">Student Names</b>
            <b class="col">Assignment Names</b>
          </div>
          <div class="row">
            <div class="col">
              <input type="text" placeholder="Search Students" id="student-name" />
            </div>
            <div class="col">
              <input type="text" placeholder="Search Assignments" id="assignment-name" />
            </div>
          </div>
        </div>

        <div style={{ margin: "10px 0px 10px 0px" }}>
          <button class="btn btn-secondary">Apply Filters</button>
        </div>


        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <th>Student Name</th>
              {assignments.map((assignment) => (<th>{assignment.title}</th>))}
            </thead>
            <tbody>
              {enrollments.map((enrollment) => {
                const user = db.users.find((user) => user._id === enrollment.user);
                return (
                  <tr>
                    <td>{user.firstName} {user.lastName}</td>
                    {assignments.map((assignment) => {
                      const grade = db.grades.find(
                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                      return (<td>{grade?.grade || ""}</td>);
                    })}
                  </tr>);
              })}
            </tbody></table>
        </div>
      </div>
    </div >
  );
}
export default Grades;