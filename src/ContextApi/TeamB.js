import React from "react";
import { Score } from "./App";

const TeamB = () => {
  return (
    <center>
      <Score.Consumer>
        {(score) => {
          return (
            <div style={{ heignt: 10, width: 300, border: "solid black" }}>
              <h1>Team B</h1>
              <h1>{score.scoreB}</h1>

              <button onClick={score.incrementB}>Click Me</button>
            </div>
          );
        }}
      </Score.Consumer>
    </center>
  );
};

export default TeamB;
