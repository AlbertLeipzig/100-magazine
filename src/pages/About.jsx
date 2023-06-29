import { ContentCard } from '../components/ContentCard';
import { SmallCardsContainer } from '../components/SmallCardsContainer';
const cardsData = [
  {
    image: 'https://picsum.photos/200/300',
    title: 'Card Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Card Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Card Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];
export const About = () => {
  return (
    <>
      <ContentCard />
      <ContentCard />
      <SmallCardsContainer title="Title" cards={cardsData} />
      <section>
        <h2>FAQs</h2>
        <section>
          <h3>How it works</h3>
          <details>
            <summary>How do I download the app?</summary>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              sunt esse quibusdam aperiam nostrum pariatur ratione eligendi
              unde, consectetur omnis?
            </p>
          </details>
          <details>
            <summary>Can I find a nearby Scoots?</summary>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              sunt esse quibusdam aperiam nostrum pariatur ratione eligendi
              unde, consectetur omnis?
            </p>
          </details>
          <details>
            <summary>Do I need a license to ride?</summary>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              sunt esse quibusdam aperiam nostrum pariatur ratione eligendi
              unde, consectetur omnis?
            </p>
          </details>
        </section>
      </section>
      <section>
        <h3>Safe driving</h3>
        <details>
          <summary>Should I wear a helmet?</summary>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sunt
            esse quibusdam aperiam nostrum pariatur ratione eligendi unde,
            consectetur omnis?
          </p>
        </details>
        <details>
          <summary>How about the rules & regulations?</summary>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sunt
            esse quibusdam aperiam nostrum pariatur ratione eligendi unde,
            consectetur omnis?
          </p>
        </details>
        <details>
          <summary>What if I damage my Scoot?</summary>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sunt
            esse quibusdam aperiam nostrum pariatur ratione eligendi unde,
            consectetur omnis?
          </p>
        </details>
      </section>
    </>
  );
};
