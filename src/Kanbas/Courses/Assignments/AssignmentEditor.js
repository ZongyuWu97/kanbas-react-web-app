import React from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import db from "../../Database";
import { addAssignment, selectAssignment, updateAssignment } from "./assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  const { courseId } = useParams();
  const { pathname } = useLocation()
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    // console.log(assignment)
    if (pathname.includes("New")) {
      dispatch(addAssignment(assignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };


  return (
    <div>
      <div className="align-self-end" style={{ color: "green" }}>Published</div>
      <hr />
      Assignment ID
      <input value={assignment._id}
        className="form-control mb-2" onChange={pathname.includes("New") ? (e) => dispatch(selectAssignment({ ...assignment, _id: e.target.value })) : () => { }} />
      Assignment Name
      <input value={assignment.name}
        className="form-control mb-2" onChange={(e) => dispatch(selectAssignment({ ...assignment, name: e.target.value }))} />
      <textarea value={assignment.description} className="form-control mb-2" onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))} />

      <table>
        <tr>
          <td className="d-flex flex-start">Assign</td>
          <td style={{ borderWidth: "1px", borderColor: "lightgrey", padding: "10px" }}>
            Due
            <input className="form-control mb-2" type="date" value={assignment.dueDate} onChange={(e) => dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))} />
            Available
            <input className="form-control mb-2" type="date" value={assignment.availableFromDate} onChange={(e) => dispatch(selectAssignment({ ...assignment, availableFromDate: e.target.value }))} />
            Untill
            <input className="form-control mb-2" type="date" value={assignment.availableUntilDate} onChange={(e) => dispatch(selectAssignment({ ...assignment, availableUntilDate: e.target.value }))} />
          </td>
        </tr>
      </table>
      <hr />

      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-secondary">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-danger me-2">
        Save
      </button>
    </div>
  );
};


export default AssignmentEditor;