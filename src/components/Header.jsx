import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home.jsx';
import { About } from '../pages/About.jsx';
import { Careers } from '../pages/Careers.jsx';
import { Location } from '../pages/Location.jsx';
import { Button } from './Button.jsx';
export const Header = () => {
  const [pageTitle, setPageTitle] = useState('Home');

  useEffect(() => {
    document.title = `Scoot - ${pageTitle}`;
  }, [pageTitle]);

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

 
  return (
    <header>
      <div>
        <h2>scoot</h2>
        <nav>
          <NavLink to="/" onClick={() => setPageTitle('Home')}>
            Home
          </NavLink>
          <NavLink to="about" onClick={() => setPageTitle('About')}>
            About
          </NavLink>
          <NavLink to="careers" onClick={() => setPageTitle('Careers')}>
            Careers
          </NavLink>
          <NavLink to="location" onClick={() => setPageTitle('Location')}>
            Location
          </NavLink>
        </nav>
        <Button text="Get Scootin" link="about" />
      </div>
      <h1>{pageTitle}</h1>
    </header>
  );
};
