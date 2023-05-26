import React from "react";
import { Score } from "./App";
const TeamA = () => {
  return (
    <center>
      <Score.Consumer>
        {
        (score) => {
          return (
            <div style={{ heignt: 10, width: 300, border: "solid black" }}>
              <h1>Team A</h1>
              <h1>{score.scoreA}</h1>
              <button onClick={score.incrementA}>Click me</button>
            </div>
          );
        }
        }
      </Score.Consumer>
    </center>
  );
};

export default TeamA;
