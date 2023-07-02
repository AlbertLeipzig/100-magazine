import { ContentCard } from '../components/ContentCard';
import { SmallCardsContainer } from '../components/SmallCardsContainer';
const bigCardsData = [
  {
    title: 'Mobility for the digital era',
    image:
      'https://images.unsplash.com/photo-1613290907219-ee677464bd45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description:
      'Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1578950586898-faece8969e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Better urban living',
    description:
      "We're helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",
  },
];

const smallCardsData = {
  title: 'Our values',
  cards: [
    {
      title: 'Community',
      image:
        'https://images.unsplash.com/photo-1598826867442-9ef9e2527b1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      description:
        "We're using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
    },
    {
      title: 'Our integrity',
      image:
        'https://images.unsplash.com/photo-1538895490524-0ded232a96d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nvb3RlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      description:
        'We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.',
    },
    {
      title: 'Our community',
      image:
        'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbXVuaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      description:
        'We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.   ',
    },
  ],
};

const questionsData = [
  {
    title: 'How it works',
    questions: [
      {
        question: 'How do I download the app?',
        answer:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sunt esse quibusdam aperiam nostrum pariatur ratione eligendi unde, consectetur omnis?',
      },
      {
        question: 'Can I find a nearby Scoots?',
        answer:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sunt esse quibusdam aperiam nostrum pariatur ratione eligendi unde, consectetur omnis?',
      },
      {
        question: 'Do I need a license to ride?',
        answer:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sunt esse quibusdam aperiam nostrum pariatur ratione eligendi unde, consectetur omnis?',
      },
    ],
  },
  {
    title: 'Safe driving',
    questions: [
      {
        question: 'Should I wear a helmet?',
        answer:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sunt esse quibusdam aperiam nostrum pariatur ratione eligendi unde, consectetur omnis?',
      },
      {
        question: 'How about the rules & regulations?',
        answer:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sunt esse quibusdam aperiam nostrum pariatur ratione eligendi unde, consectetur omnis?',
      },
      {
        question: 'What if I damage my Scoot?',
        answer:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sunt esse quibusdam aperiam nostrum pariatur ratione eligendi unde, consectetur omnis?',
      },
    ],
  },
];

export const About = () => {
  return (
    <>
      {bigCardsData.map((card) => (
        <ContentCard
          title={card.title}
          description={card.description}
          image={card.image}
          link={card.link}
        />
      ))}
      <SmallCardsContainer
        title={smallCardsData.title}
        cards={smallCardsData.cards}
      />
      <section>
        <h2>FAQs</h2>
        {questionsData.map((section) => (
          <section>
            <h3>{section.title}</h3>
            {section.questions.map((question) => (
              <details>
                <summary>{question.question}</summary>
                <p>{question.answer}</p>
              </details>
            ))}
          </section>
        ))}
      
      </section>
    </>
  );
};
