import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "bootstrap/dist/css/bootstrap.min.css"


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className="d-flex flex-column">
      <div>
        <button class="float-end btn btn-danger">
          <i class="fa fa-plus float-end" aria-hidden="true"></i>
          Module</button>
        <div class=" float-end dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <i class="fa fa-check-circle float-end" aria-hidden="true" style={{ color: "green" }}></i>
            Publish All
          </button>
        </div>
        <button class="float-end btn btn-secondary">View Progress</button>
        <button class="float-end btn btn-secondary">Collapse All</button>
      </div>

      <hr />

      <ul className="list-group">
        {
          modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item secondary" style={{ background: "#e2e3e5", marginTop: "30px" }}>
                <h3>{module.name}</h3>
                <p>{module.description}</p>
                {
                  module.lessons && (
                    <ul className="list-group">
                      {
                        module.lessons.map((lesson, index) => (
                          <li key={index} className="list-group-item">
                            <h4>{lesson.name}</h4>
                            <p>{lesson.description}</p>
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
              </li>
            ))
        }
      </ul>
    </div>
  );
}
export default ModuleList;