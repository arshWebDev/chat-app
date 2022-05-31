import "../styles/globals.css";

import ContextContainer from "../context";

const MyApp = ({ Component, pageProps }) => {

  return (
    <ContextContainer>
      <Component {...pageProps} />
    </ContextContainer>
  );
};

export default MyApp;
