import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./context/User";

const Navigation = () => {
  const { logout, loggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  // const linkStyles = {
  //   textAlign: "center",
  //   borderRadius: 40,
  //   display: "inline-block",
  //   width: "90px",
  //   padding: "20px",
  //   margin: "0 12px 6px",
  //   background: "blue",
  //   textDecoration: "none",
  //   color: "Beige",
  // };
  if (loggedIn !== false) {
    const logoutUser = () => {
      fetch("/logout", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }).then(() => {
        logout();
        navigate("/login");
      });
    };

    return (
      <div className="nav-div">
        <nav>
          <Link to="/" className="nav">
            Home
          </Link>
          <button onClick={logoutUser} className="save">
            logout
          </button>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="nav-div">
        <Link to="/" className="nav">
          Home
        </Link>
        <Link to="signup" className="nav">
          signup
        </Link>
        <Link to="login" className="nav">
          login
        </Link>
      </div>
    );
  }
};

export default Navigation;
