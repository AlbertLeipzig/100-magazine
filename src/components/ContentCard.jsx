import { Button } from './Button';
export const ContentCard = ({ title, description, image, link }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      {link && <Button text="Click me" link={link} />}
      <img
        src={image}
        alt={`${title} image`}
        style={{ height: '100px', aspectRatio: 1 / 1, borderRadius: '50%' }}
      />
      <div
        style={{
          height: '100px',
          width: '100px',
          borderRadius: '50%',
          backgroundColor: 'lightgrey',
        }}
      ></div>
    </div>
  );
};
