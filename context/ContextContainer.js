import AuthProvider from "./AuthContext";
import DarkModeProvider from "./DarkModeContext";

const ContextContainer = ({ children }) => {
  return (
    <AuthProvider>
      <DarkModeProvider>{children}</DarkModeProvider>
    </AuthProvider>
  );
};

export default ContextContainer;
