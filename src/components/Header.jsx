import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Careers } from './Careers';
import { Location } from './Location';
export const Header = () => {
  return (
    <header>
      <div>
        <h2>Title</h2>
        <nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="careers" element={<Careers />} />
            <Route path="location" element={<Location />} />
          </Routes>
        </nav>
      </div>
    </header>
  );
};
