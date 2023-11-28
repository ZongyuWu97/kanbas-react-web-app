import db from "../Database";
import React, { useState } from "react";
import './index.css'

import { Link } from "react-router-dom";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
      <button className="btn btn-success" onClick={addNewCourse}>Add</button>
      <button className="btn btn-primary" onClick={updateCourse} >
        Update
      </button>

      <div class="d-flex flex-row row row-cols-1 row-cols-md-3 g-4 list-group">
        {courses.map((c) => (
          <div className="col">

            <div class="card h-100">
              <img src="/images/marriott.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{c.name}</h5>

                <Link
                  key={c._id}
                  to={`/Kanbas/Courses/${c._id}`}
                  className="list-group-item"
                >
                  <button
                    className="btn btn-warning"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(c);
                    }}>
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(c._id);
                    }}>
                    Delete
                  </button>
                  {c.name}
                </Link>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}

export default Dashboard;
