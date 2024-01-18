import React from "react";
import { Outlet } from "react-router-dom";

const Layot = () => {
  return (
    <>
      <Outlet />
      <footer>rick and morty</footer>
    </>
  );
};

export default Layot;
