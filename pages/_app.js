import "../styles/globals.css";

import { DarkModeProvider } from "../context";

const MyApp = ({ Component, pageProps }) => {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
};

export default MyApp;
