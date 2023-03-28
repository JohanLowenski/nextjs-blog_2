// // `pages/_app.js`
// import "../styles/globals.css";

// export default function App({ Component, pageProps }) {
// 	return <Component {...pageProps} />;
// }


import "../styles/globals.css";
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
