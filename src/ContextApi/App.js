import React, { useState } from "react";
import TeamA from "./TeamA";
import TeamB from "./TeamB";
import Winner from "./Winner";

export const Score = React.createContext();

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const incrementA = () => {
    setScoreA(Math.random()*100) ;
  };
  const incrementB = () => {
    setScoreB(Math.random() * 100);
  };

  return (
    <center>
      <div
        style={{
          heignt: 0,
          width: 1000,
          border: "solid black",
          padding: "5px 10px 50px 5px",
          margin: "20px",
        }}
      >
        <Score.Provider
          value={{
            scoreA,
            scoreB,
            setScoreA,
            setScoreB,
            incrementA,
            incrementB,
          }}
        >
          <Winner />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TeamA />
            <TeamB />
          </div>
        </Score.Provider>
      </div>
    </center>
  );
};

export default App;

