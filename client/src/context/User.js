import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState("");
  //   const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("/me")
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setErrors(data.error);
          setLoggedIn(false);
        } else {
          setUser(data);
          //   console.log(user);
          setLoggedIn(true);
        }
      });
  }, []);

  const login = user => {
    setUser(user);
    setLoggedIn(true);
    // fetch("/note")
    //   .then(res => res.json())
    //   .then(data => {
    //     setNotes(data);
    //     console.log(notes);
    //   });
  };

  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  const signup = user => {
    setUser(user);
    setLoggedIn(true);
  };
  //   const updateNotes = data => {
  //     // console.log(data);
  //     const newNote = {
  //       text: data.text,
  //       updated_at: data.updated_at,
  //     };
  //     setNotes([...notes, newNote]);
  //   };

  return (
    <UserContext.Provider
      value={{
        user,
        // updateNotes,
        // notes,
        login,
        logout,
        signup,
        loggedIn,
        errors,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
