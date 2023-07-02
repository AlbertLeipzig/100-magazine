export const SmallCardsContainer = ({ title, cards }) => {
  console.log(cards);
  return (
    <div>
      <h2>{title}</h2>
      {cards.map((card, index) => (
        <div>
          <img
            src={card.image}
            alt={card.title}
            style={{ height: '80px', aspectRatio: 1 / 1 }}
          />
          <p>{index + 1}</p>
          <p>{card.description}</p>
          <h3>{card.title}</h3>
        </div>
      ))}
    </div>
  );
};
