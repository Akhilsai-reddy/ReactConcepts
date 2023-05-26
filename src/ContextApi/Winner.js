import React from "react";
import { Score } from "./App";
const Winner = () => {
  return (
    <Score.Consumer>
      {(score) => {
        return (
          <center>
            <h1 style={{ heignt: 10, width: 300, border: "solid black" }}>
              Winner:
              <br />
              {score.scoreA > score.scoreB? "Team A": score.scoreA < score.scoreB? "Team B": "Draw....."}
            </h1>
          </center>
        );
      }}
    </Score.Consumer>
  );
};

export default Winner;
