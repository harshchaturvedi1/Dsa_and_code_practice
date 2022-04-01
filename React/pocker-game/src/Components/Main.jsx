import { useEffect } from "react";
import { useState } from "react";
import { RoyalFlush } from "../assets/assets";
import { DisplayCards } from "./DisplayCards";
import "./Main.css";
const types = ["hearts", "clubs", "spades", "diamonds"];
/**
 * @description contains all the cards of deck
 */
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

  const calcaulateWinner = () => {
    console.log(RoyalFlush, typeof RoyalFlush);
    RoyalFlush(player1);
  };

  useEffect(() => {
    acceptNames();
    fillValues();
  }, []);

  return (
    <>
      <div className="main">
        <div className="firstDiv">
          <h3>{name1}</h3>
          <DisplayCards player={player1} />
        </div>
        <div>
          <h3>{name2}</h3>
          <DisplayCards player={player2} />
        </div>
      </div>
      <button onClick={calcaulateWinner} className="winner-button">
        FindWinner
      </button>
    </>
  );
};
