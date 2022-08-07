import React from "react";
import Image from "next/image";

export default function Artwork({
  src,
  background,
  padding = "0px",
  borderClass = "",
  className = "",
}) {
  return (
    <div className={`${borderClass} ${className}`}>
      <div style={{ padding, background }} className="w-full h-full">
        <div className="w-full h-full relative">
          <Image alt="" src={src} layout="fill" objectFit="contain" priority />
        </div>
      </div>
    </div>
  );
}
