import React from "react";
import Image from "next/image";
import { getFilename } from "../../utilCode/neutralFuncs";

export default function Feature({
  title,
  subtitle,
  text,
  imageSrc,
  accentColor,
  reverse,
}) {
  const rowClass = reverse ? " md:flex-row-reverse" : " md:flex-row";
  return (
    <section
      className={
        "flex flex-col items-center space-y-8 p-8 text-center max-w-container md:justify-between md:space-y-0 md:space-x-4 md:mx-auto" +
        rowClass
      }
    >
      <div className="max-w-lg md:text-left md:max-w-md">
        <div className="mb-4">
          <h2 className="text-xl mb-1 font-head text-black/80 md:mb-0 lg:text-2xl uppercase">
            {title}
          </h2>
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-2">
            <div
              className="h-0.5 w-32 md:w-14 rounded"
              style={{ backgroundColor: accentColor }}
            ></div>
            <h3 className="text-black text-sm md:italic">{subtitle}</h3>
          </div>
        </div>
        <p className="leading-none text-black/80 text-sm">{text}</p>
      </div>
      <div className="flex flex-col">
        <Image
          src={imageSrc}
          alt="Mountains"
          width={288}
          height={160}
          objectFit="contain"
        />
        <a
          href={imageSrc}
          download={getFilename(imageSrc)}
          className="text-sm font-light"
          style={{ color: accentColor }}
        >
          <span className="material-symbols-outlined translate-y-1">
            file_download
          </span>
          Download
        </a>
      </div>
    </section>
  );
}
