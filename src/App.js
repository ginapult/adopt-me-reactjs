import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Ellie",
      animal: "Dog",
      breed: "Lab"
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Butch",
      animal: "Dog",
      breed: "Collie"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
