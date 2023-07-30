import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';

export const initGoogleTagManager = () => {
  const tagManagerArgs = {
    gtmId: 'GTM-PV9CGH9', // Reemplaza GTM-XXXXXXXX con tu ID de Google Tag Manager
  };

  TagManager.initialize(tagManagerArgs);
  
  ReactGA.initialize('G-J7GPVG9YZR'); // Reemplaza UA-XXXXXXXX-X con tu ID de Google Analytics
  ReactGA.set({ debug: true });
};

export const logPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};
