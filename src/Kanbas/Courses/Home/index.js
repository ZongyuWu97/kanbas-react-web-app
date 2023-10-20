import ModuleList from "../Modules/ModuleList";
import React from "react";
import { Status } from "../Status";


function Home() {
  return (
    <div className="row">
      <div className="col-10">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="col-2">
        <Status />
      </div>
    </div>
  );
}
export default Home;