import { Button } from "../components/Button";

export const Location = () => {
  return (
    <div>
      <section>
      <img src="https://images.unsplash.com/photo-1562504208-03d85cc8c23e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ybGQlMjBtYXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      <p>New York</p>
      <p>London</p>
      <p>Yokohama</p>
      <p>Jakarta</p>
      </section>
      <section>
        <h2>Your city not listed?</h2>
        <p>If you'd like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
        <Button text = "Message Us" link="#" />
      </section>
    </div>
  );
};
