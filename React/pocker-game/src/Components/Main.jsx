import { useEffect } from "react";
import { useState } from "react";

const types = ["hearts", "clubs", "spades", "diamonds"];
let cards = [];
for (let i = 0; i < 4; i++) {
  for (let j = 2; j <= 14; j++) {
    cards.push({ type: types[i], value: j });
  }
}
// console.log(cards);
export const Main = () => {
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);

  const [name1, setName1] = useState("h");
  const [name2, setName2] = useState("a");

  const acceptNames = () => {
    let temp = "";
    temp = prompt("enter name of player1");
    setName1(temp);
    temp = prompt("enter name of player2");
    setName2(temp);
  };

  function getRandomInt(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 0) + 0); //The maximum is exclusive and the minimum is inclusive
  }

  const fillValues = () => {
    let count = 1;
    let max = 52;
    let NegletValues = [];
    let i = 1;
    while (i <= 10) {
      let random = getRandomInt(max);
      if (NegletValues.includes(random)) {
        continue;
      } else {
        NegletValues.push(random);
      }
    }
  };

  useEffect(() => {
    // acceptNames();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "300px",
        justifyContent: "space-between",
        margin: "auto",
      }}
    >
      <div>
        <h3>{name1}</h3>
        {player1.map((e) => (
          <div>
            <p>{e.type}</p>
            <p>{e.value}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>{name2}</h3>
        {player2.map((e) => (
          <div>
            <p>{e.type}</p>
            <p>{e.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
