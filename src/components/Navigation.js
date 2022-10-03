import React from "react";
import { Link } from "react-router-dom";

function Navigatioin({ userObj }) {
  console.log(userObj);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">{userObj.displayName}'s Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigatioin;
