import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import logoDark from "../../public/imgs/logoDark.svg";
import Icon from "./Icon";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [searchShowing, setSearchShowing] = useState(false);
  return (
    <nav className="bg-navbg sticky top-0 z-10">
      <div className="max-w-container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <a className="hover:cursor-pointer flex items-center justify-center relative aspect-square w-8">
            <Image
              src={logoDark}
              alt="Fresh Ideas"
              layout="fill"
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
            className="flex items-center justify-center opacity-80 hover:opacity-100"
            onClick={setSearchShowing.bind(null, true)}
          >
            <Icon name="search_light" />
          </button>
        )}
      </div>
    </nav>
  );
}
