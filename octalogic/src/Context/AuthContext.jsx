import { useState, createContext } from "react";
export const AuthContext = createContext();
function AuthContextProviderComponent({ children }) {
  let [filter, setFilter] = useState("");
  let [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, filter, setFilter }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProviderComponent;
