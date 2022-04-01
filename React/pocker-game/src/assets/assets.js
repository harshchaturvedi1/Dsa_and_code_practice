function RoyalFlush(cards) {
  cards = cards.sort((a, b) => a.value - b.value);
  console.log(cards);
}

export { RoyalFlush };
