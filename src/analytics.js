import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-R8T58XFVYE');
};

export const logPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const logEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

export const logException = (description, fatal = false) => {
  ReactGA.exception({ description, fatal });
};
