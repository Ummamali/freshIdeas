import Image from "next/image";
import React from "react";

import FullLogo from "../../public/imgs/logoFull.svg";

export default function MainFooter() {
  return (
    <footer className="bg-navbg">
      <div className="max-w-container mx-auto py-8 flex flex-col items-center space-y-2">
        <Image
          src={FullLogo}
          alt="Fresh Ideas Pro"
          width={220}
          height={30}
          objectFit="contain"
        />
        <small className="text-gray-400/80 font-light">
          &copy; 2022, All rights reserved
        </small>
      </div>
    </footer>
  );
}
