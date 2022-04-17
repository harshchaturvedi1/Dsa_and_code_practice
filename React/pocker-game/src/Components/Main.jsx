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

  const tieBreaker = (category) => {
    if (totalValue(player1) > totalValue(player2)) {
      console.log("player 1");
    } else if (totalValue(player2) > totalValue(player1)) {
      console.log("player 2");
    } else {
      console.log("tie", category);
    }
  };

  const calcaulateWinner = () => {
    console.log(player1, player2);

    //check if player 1 is royal flush
    if (royalFlush(player1)) {
      // if player 2 is also royal flush
      if (royalFlush(player2)) {
        console.log(tieBreaker("royal flush"));
      }
      // else if player 2 is not royal flush
      else {
        console.log("player 1 royal flush");
      }
    }
    // else if player 2 is royal flush
    else if (royalFlush(player2)) {
      console.log("player 2 royal flush");
    }
    //check if player 1 is straight flush
    else if (straightFlush(player1)) {
      // check if player 2 is also straight flush
      if (straightFlush(player2)) {
        tieBreaker("straight Flush");
      }
      // if player 2 is  not a straight flush
      else {
        console.log("player 1 straight Flush");
      }
    }
    // if only player 2 is straight flush
    else if (straightFlush(player2)) {
      console.log("player 2 straight Flush");
    }
    // if player 1 is four of a kind
    else if (fourOfKind(player1)) {
      // if player 2 is also four of a kind
      if (fourOfKind(player2)) {
        tieBreaker("four of a kind");
      }
      // if only player 1 is four of a kind
      else {
        console.log("player 1 four of a kind");
      }
    }
    // if only player 2 is four of a kind
    else if (fourOfKind(player2)) {
      console.log("player 2 four of a kind");
    }
    // if player 1 fullHouse
    else if (fullHouse(player1)) {
      // if player 2 is also fullHouse
      if (fullHouse(player2)) {
        tieBreaker("full House");
      }
      // else if only player 1 is fullHouse
      else {
        console.log("player 1 full House");
      }
    }
    // if only player 2 is fullHouse
    else if (fullHouse(player2)) {
      console.log("player 2 full House");
    }
    // if player 1 is flush
    else if (flush(player1)) {
      // if player 2 is also flush
      if (flush(player2)) {
        tieBreaker("flush");
      }
      // if only player 1 is flush
      else {
        console.log("player 1 flush");
      }
    }
    // if only player 2 is flush
    else if (flush(player2)) {
      console.log("player 2 flush");
    }
    // if player 1 is straight
    else if (straight(player1)) {
      // if player 2 is also straight
      if (straight(player2)) {
        tieBreaker("straight");
      }
      // if only player 1 is straight
      else {
        console.log("player 1 straight");
      }
    }
    // if only player 2 is straight
    else if (straight(player2)) {
      console.log("player 2 straight");
    }
    // if player 1 is three Of Kind
    else if (threeOfKind(player1)) {
      // if player 2 is also three Of Kind
      if (threeOfKind(player1)) {
        tieBreaker("three Of Kind");
      }
      // if only player 1 is three Of Kind
      else {
        console.log("player 1 three Of Kind");
      }
    }
    // if only player 2 is three Of Kind
    else if (threeOfKind(player2)) {
      console.log("player 2 three Of Kind");
    }
    // if player 1 is twoPair
    else if (twoPair(player1)) {
      // if player 2 is also twoPair
      if (twoPair(player2)) {
        tieBreaker("twoPair");
      }
      // if only player 1 is twoPair
      else {
        console.log("player 1 twoPair");
      }
    }
    // if only player 2 is twoPair
    else if (twoPair(player2)) {
      console.log("player 2 twoPair");
    }
    // if player 1 is pair
    else if (pair(player1)) {
      // if player 2 is also pair
      if (pair(player2)) {
        tieBreaker("pair");
      }
      // if only player 1 have pair
      else {
        console.log("player 1 pair");
      }
    }
    // if only player 2 is pair
    else if (pair(player2)) {
      console.log("player 2 pair");
    }
    // end compare high cards
    else {
      console.log(highCard(player1, player2), " high card");
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
