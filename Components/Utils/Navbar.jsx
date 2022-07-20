import Image from "next/image";
import React from "react";

import logoDark from "../../public/imgs/logoDark.svg";

export default function Navbar() {
  return (
    <nav className="bg-navbg">
      <div className="max-w-container mx-auto px-3 py-2 flex items-center justify-center">
        <Image src={logoDark} alt="Fresh Ideas" width={34} height={34} />
      </div>
    </nav>
  );
}
