import { Button } from './Button';
export const ContentCard = ({ title, description, image, link }) => {
  return (
    <div>
      <h2>Card title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta
        facilis corrupti natus provident nemo esse, officiis repellat quibusdam
        praesentium.
      </p>
      <Button text="Click me" link="about" />
      <img
        src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="placeholder image"
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
