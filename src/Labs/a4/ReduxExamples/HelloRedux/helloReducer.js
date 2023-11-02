import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  message: "Hello World",
};
const helloSlice = createSlice({
  name: "hello",
  initialState,
  reducers: {},
});
export default helloSlice.reducer;