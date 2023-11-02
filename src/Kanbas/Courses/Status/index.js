import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"


export function Status() {
  return (
    <div>
      <h2>Status</h2>
      <ul className="list-group">
        <li className="list-group-item"><a href="#">Importing Existing Content</a></li>
        <li className="list-group-item"><a href="#">Importing From Commons</a></li>
        <li className="list-group-item"><a href="#">Choose Home Page</a></li>
        <li className="list-group-item"><a href="#">View Course Stream</a></li>
        <li className="list-group-item"><a href="#">New Announcement</a></li>
        <li className="list-group-item"><a href="#">New Analytics</a></li>
        <li className="list-group-item"><a href="#">View Course Notifications</a></li>
      </ul>

      <h2>Todo</h2>
      <a href="#">View Calendar</a>
      <ul className="list-group">
        <li className="list-group-item"><a href="#">Lecture 4550</a></li>
        <li className="list-group-item"><a href="#">Lecture 4556</a></li>
        <li className="list-group-item"><a href="#">CS5610</a></li>
      </ul>
    </div>
  )
}