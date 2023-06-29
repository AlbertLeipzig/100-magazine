import { Routes, Route, NavLink, useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home.jsx';
import { About } from '../pages/About.jsx';
import { Careers } from '../pages/Careers.jsx';
import { Location } from '../pages/Location.jsx';
import { Button } from './Button.jsx';
export const Header = () => {
  const routes = [
    {
      path: '/',
      element: <Home />,
      title: 'Home',
    },
    {
      path: 'about',
      element: <About />,
      title: 'About',
    },
    {
      path: 'careers',
      element: <Careers />,
      title: 'Careers',
    },
    {
      path: 'location',
      element: <Location />,
      title: 'Location',
    },
  ];
  const pageTitle = useRoutes(routes);
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="careers" element={<Careers />} />
    <Route path="location" element={<Location />} />
  </Routes>;
  return (
    <header>
      <div>
        <h2>scoot</h2>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="careers">Careers</NavLink>
          <NavLink to="location">Location</NavLink>
        </nav>
        <Button text="Get Scootin" link="about" />
      </div>
      <h1>{pageTitle}</h1>
    </header>
  );
};
