import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import logoDark from "../../public/imgs/logoDark.svg";
import Icon from "./Icon";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";

export default function Navbar({ setNavMenu, navMenu }) {
  const [searchShowing, setSearchShowing] = useState(false);
  return (
    <nav className="bg-navbg">
      <div className="max-w-container mx-auto px-4 py-3.5 sm:py-4 flex items-center justify-between relative">
        <button
          className="flex items-center justify-center relative opacity-60 hover:opacity-100"
          onClick={() => setNavMenu((prev) => !prev)}
        >
          <Icon
            name="hamburger_light"
            className={`absolute transition ${
              navMenu ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`material-symbols-outlined text-white absolute h-5 w-5 transition ${
              navMenu ? "opacity-100" : "opacity-0"
            }`}
          >
            close
          </span>
        </button>
        <Link href="/">
          <a className="hover:cursor-pointer leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src={logoDark}
              alt="Fresh Ideas"
              width={34}
              height={34}
              objectFit="contain"
            />
          </a>
        </Link>
        {searchShowing ? (
          <SearchBar
            className="mainEl"
            searchIcon={<Icon name="search_light" className="opacity-70" />}
            styledJsx={`
          .mainEl{
            padding-bottom: 0.2rem;
          }
          
          .mainEl input{
            width: 15rem;
          }
        `}
          />
        ) : (
          <button
            className="flex items-center justify-center opacity-60 hover:opacity-100"
            onClick={setSearchShowing.bind(null, true)}
          >
            <Icon name="search_light" />
          </button>
        )}
      </div>
    </nav>
  );
}
