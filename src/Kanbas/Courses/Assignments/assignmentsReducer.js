import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


export const initialState = {
  assignments: [],
  assignment: { _id: "New ID", name: "New Assignment", course: "Rs101" },
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, action) => {
      state.assignments = [
        action.payload,
        ...state.assignments,
      ];
    },

    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },

    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },

    selectAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});


export const { setAssignments, addAssignment, deleteAssignment,
  updateAssignment, selectAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;