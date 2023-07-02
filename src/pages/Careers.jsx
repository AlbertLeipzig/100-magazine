import { ContentCard } from '../components/ContentCard';
import { SmallCardsContainer } from '../components/SmallCardsContainer';

const bigCardData = {
  title: 'Care to join our mission?',
  description:
    "We're always looking for ambitious individuals to help us on our journey. If you're passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!",
  link: '#',
  image:
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
};

const smallCardsData = {
  title: '',
  cards: [
    {
      title: 'Our tech',
      description:
        "We're using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
      image:
        'https://images.unsplash.com/photo-1573152143286-0c422b4d2175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      title: 'Our integrity',
      description:
        'We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.',
      image:
        'https://images.unsplash.com/photo-1608022960353-c32edb61e269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjb290ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Our community',
      description:
        'We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.',
      image:
        'https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ],
};

const openPositionsData = [
  {
    position: 'General Manager',
    city: 'Jakarta, Indonesia',
  },
  {
    position: 'UI/UX Designer',
    city: 'Yokohama, Japan',
  },
  {
    position: 'Blog Content Copywriter',
    city: 'New York, United States',
  },
  {
    position: 'Graphic Designer',
    city: 'New York, United States',
  },
  {
    position: 'Fleet Supervisor',
    city: 'Jakarta, Indonesia',
  },
  {
    position: 'UX Analyst',
    city: 'London, United Kingdom',
  },
];

export const Careers = () => {
  return (
    <div>
      <ContentCard
        title={bigCardData.title}
        description={bigCardData.description}
        image={bigCardData.image}
        link={bigCardData.link}
      />
      <SmallCardsContainer
        title={smallCardsData.title}
        cards={smallCardsData.cards}
      />
      <div>
        <h2>Open positions</h2>
        <ul>
          {openPositionsData.map((position) => (
            <li>
              <h3>{position.position}</h3>
              <p>{position.city}</p>
              <button>Apply now</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
