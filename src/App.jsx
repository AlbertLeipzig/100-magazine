import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { Location } from './pages/Location';
import './styles/main.scss';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="careers" element={<Careers />} />
        <Route path="location" element={<Location />} />
      </Routes>
      ;{/* <Footer /> */}
    </>
  );
}

export default App;
