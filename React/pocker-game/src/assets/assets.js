function totalValue(cards) {
  let total = 0;
  cards.forEach((e) => (total += e.value));
  return total;
}

function royalFlush(cards) {
  // five cards in sequence , all of royal category and of same suit
  cards = cards.sort((a, b) => a.value - b.value);
  for (let i = 1; i < 5; i++) {
    if (cards[i].type !== cards[i - 1].type) return false;
  }
  if (cards[4].value === 14 && cards[0].value === 10) return true;
  else return false;
}

function straightFlush(cards) {
  // five cards in sequence of same suit
  cards = cards.sort((a, b) => a.value - b.value);
  for (let i = 1; i < 5; i++) {
    if (
      cards[i].value !== cards[i - 1].value + 1 ||
      cards[i].type !== cards[i - 1].type
    )
      return false;
  }
  return true;
}

function fourOfKind(cards) {
  // four cards of one rank(any category) and one any other unmatched card
  let obj = {};
  cards.forEach((e) => {
    if (!obj[e.value]) {
      obj[e.value] = 1;
    } else {
      let p = obj[e.value];
      obj[e.value] = p + 1;
    }
  });
  let keys = Object.keys(obj);

  if (keys.length !== 2) {
    return false;
  } else if (obj[keys[0]] === 1 || obj[keys[0]] === 4) {
    return true;
  } else return false;
}

function fullHouse(cards) {
  // three matching cards of a rank and 2 matching cards of one rank
  let obj = {};
  cards.forEach((e) => {
    if (!obj[e.value]) {
      obj[e.value] = 1;
    } else {
      let p = obj[e.value];
      obj[e.value] = p + 1;
    }
  });

  let keys = Object.keys(obj);
  if (keys.length !== 2) {
    return false;
  } else if (obj[keys[0]] === 3 || obj[keys[0]] === 2) {
    return true;
  } else return false;
}

function flush(cards) {
  // all five cards of same suit but not insequence
  for (let i = 1; i < 5; i++) {
    if (cards[i].type !== cards[i - 1].type) return false;
  }
  return true;
}

function straight(cards) {
  // cards in sequential rank and atleast two different suits
  cards = cards.sort((a, b) => a.value - b.value);
  for (let i = 1; i < 5; i++) {
    if (cards[i].value !== cards[i - 1].value + 1) return false;
  }
  let obj = {};
  cards.forEach((e) => {
    if (!obj[e.type]) {
      obj[e.type] = 1;
    } else {
      let p = obj[e.type];
      obj[e.type] = p + 1;
    }
  });

  let keys = Object.keys(obj);
  if (keys.length < 2) return false;
  return true;
}

function threeOfKind(cards) {
  // three cards of same rank(not necessary of same suit) and two other cards not of this rank nor same as each other
  let obj = {};
  cards.forEach((e) => {
    if (!obj[e.value]) {
      obj[e.value] = 1;
    } else {
      let p = obj[e.value];
      obj[e.value] = p + 1;
    }
  });

  let keys = Object.keys(obj);
  if (keys.length !== 3) return false;
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] !== 3 || obj[keys[i]] !== 1) return false;
  }
  return true;
}

function twoPair(cards) {
  // two pairs of two cards of same rank and one other card
  let obj = {};
  cards.forEach((e) => {
    if (!obj[e.value]) {
      obj[e.value] = 1;
    } else {
      let p = obj[e.value];
      obj[e.value] = p + 1;
    }
  });
  let keys = Object.keys(obj);
  if (keys.length !== 3) return false;
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] != 2 && obj[keys[i]] != 1) return false;
  }
  return true;
}

function pair(cards) {
  // two cards of one rank , plus three cards of other ranks and differnt from each other
  let obj = {};
  cards.forEach((e) => {
    if (!obj[e.value]) {
      obj[e.value] = 1;
    } else {
      let p = obj[e.value];
      obj[e.value] = p + 1;
    }
  });

  let keys = Object.keys(obj);
  if (keys.length !== 4) return false;
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] !== 2 || obj[keys[i]] !== 1) return false;
  }
  return true;
}

function highCard(player1, player2) {
  player1.sort((a, b) => a.value - b.value);
  player2.sort((a, b) => a.value - b.value);
  for (let i = 0; i < 5; i++) {
    if (player1[i].value > player2[i].value) {
      return "player1";
    } else if (player1[i].value < player2[i].value) {
      return "player2";
    }
  }

  return "tie";
}

let temp = [
  { type: "diamonds", value: 2 },
  { type: "spades", value: 2 },
  { type: "clubs", value: 6 },
  { type: "clubs", value: 12 },
  { type: "diamonds", value: 12 },
];

console.log(twoPair(temp));
// export {
//   royalFlush,
//   totalValue,
//   straightFlush,
//   fourOfKind,
//   fullHouse,
//   flush,
//   straight,
//   threeOfKind,
//   twoPair,
//   pair,
//   highCard,
// };
