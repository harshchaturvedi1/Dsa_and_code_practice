import { useEffect } from "react";
import { useState } from "react";

const types = ["hearts", "clubs", "spades", "diamonds"];
let cards = [];
for (let i = 0; i < 4; i++) {
  for (let j = 2; j <= 14; j++) {
    cards.push({ type: types[i], value: j });
  }
}

export const Main = () => {
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const acceptNames = () => {
    let temp = "";
    temp = prompt("enter name of player1");
    setName1(temp);
    temp = prompt("enter name of player2");
    setName2(temp);
  };

  function getRandomInt() {
    let max = Math.floor(52);
    return Math.floor(Math.random() * (max - 0) + 0); //The maximum is exclusive and the minimum is inclusive
  }

  const fillValues = () => {
    let NegletValues = [];
    let i = 1;
    while (i <= 10) {
      let random = getRandomInt();
      //   if already present
      if (NegletValues.includes(random)) {
        continue;
      } else {
        // add to neglet
        NegletValues.push(random);
        // for first player
        if (i % 2 === 1) {
          setPlayer1((state) => [...state, cards[random]]);
        }
        // for second player
        else {
          setPlayer2((state) => [...state, cards[random]]);
        }
        i++;
      }
    }
  };

  useEffect(() => {
    acceptNames();
    fillValues();
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
          <ShowCards card={e} />
        ))}
      </div>
      <div>
        <h3>{name2}</h3>
        {player2.map((e) => (
          <ShowCards card={e} />
        ))}
      </div>
    </div>
  );
};

const ShowCards = ({ card }) => {
  return (
    <div>
      <p>{card.type}</p>
      <p>
        {card.value === 14
          ? "Ace"
          : card.value === 13
          ? "king"
          : card.value === 12
          ? "queen"
          : card.value === 11
          ? "Joker"
          : card.value}
      </p>
    </div>
  );
};
