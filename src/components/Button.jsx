import { Link } from 'react-router-dom';
export const Button = ({ text, link }) => {
  return (
    <button>
      <Link to={link}>{text}</Link>
    </button>
  )
}
