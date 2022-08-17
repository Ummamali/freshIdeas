import Image from "next/image";
import Link from "next/link";
import React from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

export default function NavMenu() {
  return (
    <div className="w-full h-[70vh] sm:h-auto bg-categoryBar/[98%] backdrop-blur-sm absolute top-full left-0 z-10 shadow border-t border-white/[5%]">
      <div className="max-w-container mx-auto flex flex-col items-center sm:flex-row sm:justify-between sm:items-start px-4 py-4 sm:py-6 space-y-4 sm:space-y-0">
        <div>
          <div className="text-white/50 flex flex-col items-center space-y-2 text-sm">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                <a className="hover:text-white">{item.name}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/imgs/logoFull.svg"
            width={180}
            height={40}
            objectFit="contain"
            alt=""
          />
          <div className="text-center text-xs text-white/30 mt-3">
            <p>Fresh Ideas Pro &trade;</p>
            <p>&copy; All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
