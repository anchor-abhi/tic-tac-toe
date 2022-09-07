import React from "react";

const Cell = ({ pos, grid, setGrid, player, setPlayer, winner }) => {
  let [i, j] = [pos[0], pos[1]];

  let style = {
    width: "34%",
    height: "100px",
    textAlign: "center",
    border: "2px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const handleClick = (e) => {
    if (grid[i][j] != 0 || winner != 0) return;
    let id = e.target.id;
    let elem = document.getElementById(id);

    grid[i][j] = player;
    setGrid([[...grid[0]], [...grid[1]], [...grid[2]]]);
    let cross = "https://cdn-icons-png.flaticon.com/512/1828/1828774.png";
    let circle = "https://cdn-icons-png.flaticon.com/512/808/808569.png";

    let image = document.createElement("img");
    image.src = player == 1 ? cross : circle;
    image.className = "crossImg";
    elem.append(image);

    // elem.style.backgroundColor = player == 1 ? "#222b7a" : "#03fc5e";
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
