import React, { useState, createContext } from 'react'

const LoginPageContext = createContext();

const initialUser = {
  name: "Equipo #4",
  email: "user@email.com",
  password: "password",
};

const LoginPageContextprovider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  const [successfulLogin, setSuccessfulLogin] = useState(false)

  return (
    <LoginPageContext.Provider value={{ user, successfulLogin, setSuccessfulLogin }}>
      {children}
    </LoginPageContext.Provider>
  )
}

export { LoginPageContext, LoginPageContextprovider };
