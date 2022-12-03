import "./App.css";
import React, { useState } from "react";
import Router from "./routes";
import LoginContext from "./context/LoginContext";

function App() {
  const [token, setToken] = useState(null);
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const loginData = {
    baseUrl: "https://ms-discord-upy5mhs63a-rj.a.run.app",
    values: {
      email: [email, setEmail],
      discordId: [id, setId],
    },
    token: [token, setToken],
    logged: [logged, setLogged],
  };

  return (
    <div className="App">
      <LoginContext.Provider value={loginData}>
        <Router />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
