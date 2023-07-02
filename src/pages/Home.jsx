import { SmallCardsContainer } from '../components/SmallCardsContainer';
import { ContentCard } from '../components/ContentCard';

const cardsData = [
  {
    image:
      'https://images.unsplash.com/photo-1572016047668-5b5e909e1605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Easy to use riding telemetry',
    description: `The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.`,
  },
  {
    image:
      'https://images.unsplash.com/photo-1594058573823-d8edf1ad3380?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Coming to a city near you',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloribus delectus harum, debitis aliquam minima maxime! Ab vitae, at, eum molestiae hic, illum optio magnam harum consequuntur itaque accusamus iure?',
  },
  {
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Zero hassle payments',
    description: `Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.`,
  },
];

export const Home = () => {
  return (
    <>
      <div>
        <h1>Scooter sharing made simple</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloribus
          delectus harum, debitis aliquam minima maxime! Ab vitae, at, eum
          molestiae hic, illum optio magnam harum consequuntur itaque accusamus
          iure?
        </p>
        <b>Get Scootin</b>
      </div>
      {cardsData.map((card) => (
        <ContentCard card={card} />
      ))}
      {/*
       <SmallCardsContainer containerTitle="title" cards={cardsData} />
      
      */}
    </>
  );
};
