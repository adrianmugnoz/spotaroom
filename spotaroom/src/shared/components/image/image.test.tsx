import React from "react";
import ReactDOM from "react-dom";
import { Image } from "./image";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Image src="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
