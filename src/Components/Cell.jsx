import React from "react";
import Cross from "./Cross";


const Cell = ({ pos, grid, setGrid, player, setPlayer, winner}) => {
  let [i, j] = [pos[0], pos[1]];

  let style = {
    width: "34%",
    height: "100px",
    textAlign: "center",
    border: "2px solid",
  };
  const handleClick = (e) => {

    if (grid[i][j]!= 0 || (winner != 0)) return;
    let id = e.target.id;
    let elem = document.getElementById(id);


    grid[i][j] = player;
    setGrid([[...grid[0]], [...grid[1]], [...grid[2]]]);

    elem.style.backgroundColor = player == 1 ? "#222b7a" : "#03fc5e";

    setPlayer(player == 1 ? 2 : 1);
  };
  return (
    <div
      className="cell"
      style={style}
      id={[i, j].join("")}
      onClick={handleClick}
    ></div>
  );
};

export default Cell;
