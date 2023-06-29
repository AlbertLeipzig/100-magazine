import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../pages/Home.jsx';
import { About } from '../pages/About.jsx';
import { Careers } from '../pages/Careers.jsx';
import { Location } from '../pages/Location.jsx';
export const Header = () => {
  return (
    <header>
      <div>
        <h2>Title</h2>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="careers">Careers</NavLink>
          <NavLink to="location">Location</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="careers" element={<Careers />} />
          <Route path="location" element={<Location />} />
        </Routes>
      </div>
    </header>
  );
};
