import { SmallCardsContainer } from '../components/SmallCardsContainer';
import { ContentCard } from '../components/ContentCard';
import generic from '../../public/assets/generic.png';
import { Button } from '../components/Button';
const bigCardsData = [
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

const smallCardsData = [
  {
    title: 'Locate with app',
    description:
      'Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.',
    image:
      'https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      link : "#"
  },
  {
    title: 'Pick your scooter',
    description:
      'We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.',
    image:
      'https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      link : "#"
  },
  {
    title: 'Enjoy the ride',
    description:
      "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you're off! Always lock bikes away from walkways and accessibility ramps.",
    image:
      'https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      link : "#"
  },
];

export const Home = () => {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1170&q=80"
        alt="GENERIC"
        style={{ height: '300px', width: '300px', backgroundColor: 'red' }}
      />
      <div>
        <h1>Scooter sharing made simple</h1>
        <p>
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities. Use our app to locate the
          nearest bike, unlock it with a tap, and you're away!
        </p>
        <Button text="get scootin" link="#" />
      </div>
      <>
        {
          smallCardsData.map(card => (
            <div>
              <img src={card.image} alt={card.title} style={{height : "80px", aspectRatio : 1/1}} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))
        }
      </>
      {bigCardsData.map((card) => (
        <ContentCard title = {card.title} image = {card.image} description={card.description} link = {card.link}/>
      ))}
    </>
  );
};
