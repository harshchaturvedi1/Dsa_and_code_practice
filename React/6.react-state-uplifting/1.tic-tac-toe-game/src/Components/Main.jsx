import { useState } from "react";

const defaultState = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const defaultPlayer = "player1";
const Main = () => {
  const [gameState, setGameState] = useState(defaultState);
  const [player, setPlayer] = useState(defaultPlayer);

  const handleChange = (e) => {};

  return <></>;
};
