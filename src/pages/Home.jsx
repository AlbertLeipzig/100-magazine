import { SmallCardsContainer } from '../components/SmallCardsContainer';
import { ContentCard } from '../components/ContentCard';

const cardsData = [
  {
    image:
      'https://images.unsplash.com/photo-1687992469789-3e2cb55e1cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    title: 'Scooty',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloribus delectus harum, debitis aliquam minima maxime! Ab vitae, at, eum molestiae hic, illum optio magnam harum consequuntur itaque accusamus iure?',
  },
  {
    image:
      'https://images.unsplash.com/photo-1687992469789-3e2cb55e1cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    title: 'Scooty',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloribus delectus harum, debitis aliquam minima maxime! Ab vitae, at, eum molestiae hic, illum optio magnam harum consequuntur itaque accusamus iure?',
  },
  {
    image:
      'https://images.unsplash.com/photo-1687992469789-3e2cb55e1cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    title: 'Scooty',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloribus delectus harum, debitis aliquam minima maxime! Ab vitae, at, eum molestiae hic, illum optio magnam harum consequuntur itaque accusamus iure?',
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
      {/* <SmallCardsContainer containerTitle="title" cards={cardsData} />
      <ContentCard />
      <ContentCard />
      <ContentCard /> */}
    </>
  );
};
