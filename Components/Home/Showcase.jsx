import React from "react";
import Image from "next/image";

import homeStyles from "./home.module.css";
import { getFilename } from "../../utilCode/neutralFuncs";

export default function Showcase({
  smallTitle,
  bigTitle,
  text,
  imageSrc,
  footerText,
}) {
  return (
    <div className="py-10 md:py-16 px-4 bg-showcaseBg">
      <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:justify-between md:max-w-5xl md:mx-auto md:mb-16">
        <div className="px-8 md:px-0">
          <h2 className="text-3xl font-head text-showcaseText/90">
            {smallTitle}
          </h2>
          <h1 className="font-head text-showcaseHead text-6xl xl:text-7xl mb-4">
            {bigTitle}
          </h1>
          <div className="text-sm font-light text-showcaseText/70 leading-tight max-w-lg md:max-w-md space-y-4">
            <p>{text}</p>
            <a
              href="./app/index.html"
              className="bg-primary py-3 px-12 inline-block rounded text-black/70 font-normal shadow-md"
            >
              Explore
            </a>
          </div>
        </div>
        <div className="flex items-center flex-col pt-12 md:pt-0 ">
          <div className={homeStyles.rotateMe}>
            <Image
              src={imageSrc}
              alt=""
              height={200}
              width={300}
              objectFit="contain"
            />
          </div>
          <a
            href={imageSrc}
            download={getFilename(imageSrc)}
            className="text-showcaseHead/80 text-sm z-10"
          >
            <span className="material-symbols-outlined">file_download</span>
            Download
          </a>
        </div>
      </div>
      <div className="hidden sm:block my-4 w-max mx-auto">
        <Image
          src={"/imgs/zigzag.png"}
          alt=""
          width={700}
          height={100}
          objectFit="contain"
        />
      </div>
      <p className="text-sm font-light text-showcaseText/50 leading-tight italic mt-6 max-w-lg text-center mx-auto px-6">
        {footerText}
      </p>
    </div>
  );
}
