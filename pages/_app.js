import {useContext} from 'react'
import { DarkThemeProvider } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DarkThemeProvider>
      <Component {...pageProps} />
    </DarkThemeProvider>
  );
}

export default MyApp;
