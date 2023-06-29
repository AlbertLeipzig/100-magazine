export const SmallCardsContainer = ({ containerTitle, cards }) => {
  console.log(cards);
  return (
    <div>
      <h2>{containerTitle}</h2>
      <div>
        {cards.map((card) => (
          <div>
            <img src={card.image} alt={card.title} />
            <p>1</p>
            <p>{card.description}</p>
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
