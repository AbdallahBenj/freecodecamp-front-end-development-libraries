import "./Tic-tac-toe.css";

import { useState } from "react";

const TicTacToe = () => {
  const btns = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];

  const [count, setCount] = useState(0);
  const [firstPlayer, setFirstPlayer] = useState(true);

  const [grid, setGrid] = useState({
    a1: { content: "", isActive: true },
    a2: { content: "", isActive: true },
    a3: { content: "", isActive: true },
    b1: { content: "", isActive: true },
    b2: { content: "", isActive: true },
    b3: { content: "", isActive: true },
    c1: { content: "", isActive: true },
    c2: { content: "", isActive: true },
    c3: { content: "", isActive: true },
  });

  const getWinner = () => {
    const wins = [
      ["a1", "a2", "a3"],
      ["b1", "b2", "b3"],
      ["c1", "c2", "c3"],
      ["a1", "b1", "c1"],
      ["a2", "b2", "c2"],
      ["a3", "b3", "c3"],
      ["a1", "b2", "c3"],
      ["a3", "b2", "c1"],
    ];

    for (let [a, b, c] of wins) {
      if (
        grid[a].content &&
        grid[a].content === grid[b].content &&
        grid[a].content === grid[c].content
      ) {
        return grid[a].content;
      }
    }

    return null;
  };

  const winner = getWinner();
  const isDraw = !winner && count === 9;
  const gameOver = winner || isDraw;

  const handleClick = (e) => {
    if (gameOver) return;
    const { name } = e.target;
    setGrid((prev) => ({
      ...prev,
      [name]: firstPlayer
        ? { content: "X", isActive: false }
        : { content: "O", isActive: false },
    }));

    setFirstPlayer((prev) => !prev);
    setCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setGrid({
      a1: { content: "", isActive: true },
      a2: { content: "", isActive: true },
      a3: { content: "", isActive: true },
      b1: { content: "", isActive: true },
      b2: { content: "", isActive: true },
      b3: { content: "", isActive: true },
      c1: { content: "", isActive: true },
      c2: { content: "", isActive: true },
      c3: { content: "", isActive: true },
    });

    setFirstPlayer(true);
    setCount(0);
  };

  return (
    <div className="card">
      <h1>Tic Tac Toe</h1>
      <h2 className="player">{count}</h2>
      <h2
        className="player"
        style={{
          color: gameOver
            ? firstPlayer
              ? "#646cff"
              : "#f9f9f9"
            : firstPlayer
            ? "#f9f9f9"
            : "#646cff",
        }}
      >
        {isDraw
          ? "🤝 Draw"
          : winner === "X"
          ? "Player X 🎉 Win"
          : winner === "O"
          ? "Player O 🎉 Win"
          : firstPlayer
          ? "Next Player X"
          : "Next Player O"}
      </h2>

      <div className="button-container">
        {btns.map((btn) => (
          <button
            className="square"
            style={{ color: grid[btn].content === "X" ? "#f9f9f9" : "#646cff" }}
            key={btn}
            name={btn}
            disabled={!grid[btn].isActive || gameOver}
            onClick={handleClick}
          >
            {grid[btn].content}
          </button>
        ))}
      </div>
      <br />
      <button
        id="reset"
        onClick={handleReset}
        className="reset-button"
        type="button"
        disabled={!gameOver}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
