/**
 * @description accepts player array having details of cards player have
 */
export const DisplayCards = ({ player }) => {
  return (
    <>
      {player.map((e) => (
        <ShowCards card={e} />
      ))}
    </>
  );
};

/**
 * @description shows the card details
 */
const ShowCards = ({ card }) => {
  return (
    <div style={{ borderBottom: "1px solid" }}>
      <p>card : {card.type}</p>
      <p>
        {" "}
        value :
        {card.value === 14
          ? " Ace"
          : card.value === 13
          ? " king"
          : card.value === 12
          ? " queen"
          : card.value === 11
          ? " Joker"
          : " " + card.value}
      </p>
    </div>
  );
};
