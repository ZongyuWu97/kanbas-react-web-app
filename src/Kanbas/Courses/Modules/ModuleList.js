import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "bootstrap/dist/css/bootstrap.min.css"
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

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
        <li className="list-group-item ">
          <button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
          <button className="btn btn-primary" onClick={() => dispatch(updateModule(module))}>Update</button>
          <input value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          />
          <textarea value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
          }
          />
        </li>
        {
          modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item secondary" style={{ background: "#e2e3e5", marginTop: "30px" }}>
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>

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