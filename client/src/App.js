import React from "react";
import { UserProvider } from "./context/User";
import Navigation from "./Navigation";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <UserProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
