import Image from "next/image";
import Link from "next/link";
import React from "react";

import logoDark from "../../public/imgs/logoDark.svg";
import SearchBar from "../Home/SearchBar";

export default function Navbar() {
  return (
    <nav className="bg-navbg">
      <div className="max-w-container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <a className="hover:cursor-pointer flex items-center justify-center">
            <Image
              src={logoDark}
              alt="Fresh Ideas"
              width={34}
              height={34}
              objectFit="contain"
            />
          </a>
        </Link>
        <SearchBar />
      </div>
    </nav>
  );
}
