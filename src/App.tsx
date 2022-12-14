import React from "react";
import {AuthenticatedApp} from "authenticated-app";
import { useAuth } from "context/auth-context";
import "./App.css";
import UnauthenticatedApp from "unauthenticated-app";

function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      {user ? <AuthenticatedApp/> :<UnauthenticatedApp/>}
    </div>
  );
}

export default App;
