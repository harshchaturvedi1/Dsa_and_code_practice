import { useEffect } from "react";
import { useState } from "react";
import {
  totalValue,
  royalFlush,
  straightFlush,
  fourOfKind,
  fullHouse,
  flush,
  straight,
  threeOfKind,
  twoPair,
  pair,
  highCard,
} from "../assets/assets";
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

let temp = [
  { type: "a", value: 1 },
  { type: "a", value: 1 },
  { type: "a", value: 1 },
  { type: "a", value: 2 },
  { type: "b", value: 2 },
];

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

  const tieBreaker = () => {
    if (totalValue(player1) > totalValue(player2)) {
      console.log("player 1");
    } else if (totalValue(player2) > totalValue(player1)) {
      console.log("player 2");
    } else {
      console.log("tie");
    }
  };

  const calcaulateWinner = () => {
    // console.log(player1);

    //check if player 1 is royal flush
    if (royalFlush(player1)) {
      // if player 2 is also royal flush
      if (royalFlush(player2)) {
        console.log(tieBreaker());
      }
      // else if player 2 is not royal flush
      else {
        console.log("player 1");
      }
    }
    // else if player 2 is royal flush
    else if (royalFlush(player2)) {
      console.log("player 2");
    }
    //check if player 1 is straight flush
    else if (straightFlush(player1)) {
      // check if player 2 is also straight flush
      if (straightFlush(player2)) {
        tieBreaker();
      }
      // if player 2 is  not a straight flush
      else {
        console.log("player 1");
      }
    }
    // if only player 2 is straight flush
    else if (straightFlush(player2)) {
      console.log("player 2");
    }
    // if player 1 is four of a kind
    else if (fourOfKind(player1)) {
      // if player 2 is also four of a kind
      if (fourOfKind(player2)) {
        tieBreaker();
      }
      // if only player 1 is four of a kind
      else {
        console.log("player 1");
      }
    }
    // if only player 2 is four of a kind
    else if (fourOfKind(player2)) {
      console.log("player 2");
    }
  };

  useEffect(() => {
    // acceptNames();
    fillValues();
  }, []);

  return (
    <>
      <button onClick={calcaulateWinner} className="winner-button">
        FindWinner
      </button>
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
    </>
  );
};
