import { React, useState } from "react";
import Cell from "./Cell";
import { findWinner } from "../utils/ticTacToeLogic";

const Grid = ({ setWinner, winner }) => {
  const [grid, setGrid] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  let win = findWinner(grid);
  setWinner(win);
  const [player, setPlayer] = useState(1);
  return (
    <>
      <div style={{ margin: "auto", border: "2px solid", width: "50%" }}>
        {grid.map((el, index) => {
          return (
            <div key={index} style={{ display: "flex" }}>
              {[0, 1, 2].map((el) => {
                return (
                  <Cell
                    key={el}
                    pos={[index, el]}
                    grid={grid}
                    setGrid={setGrid}
                    player={player}
                    setPlayer={setPlayer}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      {winner==-1 ? <h2>Match Tie</h2> : ""}
      {winner == 0 ? <h2>Turn for player : {player}</h2> : ""}
    </>
  );
};

export default Grid;
