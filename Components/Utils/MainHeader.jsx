import React from "react";
import { useState } from "react";
import CategoryBar from "../Home/Headers/CategoryBar";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";

export default function MainHeader({ currentCat }) {
  const [navMenu, setNavMenu] = useState(false);

  return (
    <header className="sticky top-0 z-10">
      <Navbar setNavMenu={setNavMenu} navMenu={navMenu} />
      <CategoryBar current={currentCat} />
      {navMenu ? <NavMenu /> : null}
    </header>
  );
}
