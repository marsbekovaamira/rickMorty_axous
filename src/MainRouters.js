import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import AboutPage from "./components/AboutPage";
import NotFoundPage from "./components/NotFoundPage";
import Layot from "./components/Layot";
import UserDetalis from "./components/UserDetalis";
// ! Установливаем библиотеку npm i react-router-dom
// ! обернуть App в NrowsRouter
// !создаем файл MaunRoutes
// !
const MainRouters = () => {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/users/:id" element={<UserDetalis />} />
      <Route path="/" element={<Layot />} />
    </Routes>
  );
};

export default MainRouters;
