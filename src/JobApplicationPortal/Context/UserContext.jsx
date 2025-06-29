import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: "Faiyaz Ansari",
    email: "faiyaz.ansari@gmail.com",
  });
  return (
    <UserContext.Provider value={{userInfo, setUserInfo}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
