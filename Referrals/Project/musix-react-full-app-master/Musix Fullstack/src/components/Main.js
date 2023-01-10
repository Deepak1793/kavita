import "../styles/main.css";

import Artist from "./Artist";
import Header from "./Header";
import React from "react";

const Main = (props) => (
  <section>
    <Header {...props} />
    <div className="Artist-content">
      <Artist {...props} />
    </div>
  </section>
);

export default Main;
