import React from "react";

const Cell = ({ pos, grid, setGrid, player, setPlayer }) => {
  let [i, j] = [pos[0], pos[1]];

  let style = {
    width: "34%",
    height: "100px",
    textAlign: "center",
    border: "1px solid",
  };
  const handleClick = (e) => {
    grid[i][j] = player;
    setGrid([[...grid[0]], [...grid[1]], [...grid[2]]]);
    let id = e.target.id;
    let elem = document.getElementById(id);
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
