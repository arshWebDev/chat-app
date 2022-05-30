import "../styles/globals.css";

import ContextContainer from "../context";

const MyApp = ({ Component, pageProps }) => {

  // console.log(API_KEY);

  return (
    <ContextContainer>
      <Component {...pageProps} />
    </ContextContainer>
  );
};

export default MyApp;
