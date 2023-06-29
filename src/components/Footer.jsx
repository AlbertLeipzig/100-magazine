import { NavLink } from 'react-router-dom';

import appleStoreIcon from '../../public/assets/apple-store-icon.png';
import googleStoreIcon from '../../public/assets/google-store-icon.png';
import facebookIcon from '../../public/assets/facebook-icon.png';
import instagramIcon from '../../public/assets/instagram-icon.png';
import twitterIcon from '../../public/assets/twitter-icon.png';

export const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Sign up and Scoot off today</h2>
        <button>
          <a href="https://www.apple.com/de/app-store/" target="_blank">
            <img
              src={appleStoreIcon}
              alt="apple store icon"
              style={{ height: '60px' }}
            />
          </a>
        </button>
        <button>
          <a href="https://store.google.com/?pli=1&hl=de" target="_blank">
            <img
              src={googleStoreIcon}
              alt="google store icon"
              style={{ height: '60px' }}
            />
          </a>
        </button>
      </div>
      <div>
        <h2>scoot</h2>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="careers">Careers</NavLink>
          <NavLink to="location">Location</NavLink>
        </nav>
        <menu>
          <a href="https://www.facebook.com/" target="_blank">
            <img
              src={facebookIcon}
              alt="facebook icon"
              style={{ height: '40px' }}
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img
              src={instagramIcon}
              alt="instagram icon"
              style={{ height: '40px' }}
            />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img
              src={twitterIcon}
              alt="twitter icon"
              style={{ height: '40px' }}
            />
          </a>
        </menu>
      </div>
    </footer>
  );
};
