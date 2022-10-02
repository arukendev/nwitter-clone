import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "routes/Home";
import Auth from "routes/Auth";
import Profile from "routes/Profile";
import Navigatioin from "components/Navigation";

function AppRouter({ isLoggedIn, userObj }) {
  return (
    <BrowserRouter>
      {isLoggedIn && <Navigatioin />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home userObj={userObj} />} />
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Auth />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        )}
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
