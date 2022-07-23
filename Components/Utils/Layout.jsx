import React from "react";
import MainFooter from "./MainFooter";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}
