import '../styles/globals.css';
import smoothscroll from 'smoothscroll-polyfill';

function MyApp({ Component, pageProps }) {
  // kick off the polyfill!
  smoothscroll.polyfill();

  return <Component {...pageProps} />;
}

export default MyApp;
