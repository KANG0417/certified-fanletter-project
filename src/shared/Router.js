import Layouts from "shared/Layouts";
import DetailPage from "pages/DetailPage";
import HomePage from "pages/HomePage";
import Login from "pages/LoginPage";
import JoinPage from "pages/JoinPage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalColor from "styles/GlobalColor";
import GlobalSytle from "styles/GlobalStyle";
import ProfilePage from "pages/ProfilePage";

function Router() {
  return (
    <>
      <GlobalSytle />
      <GlobalColor />
      <BrowserRouter>
        <Routes>
          <Route element={<Layouts />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
