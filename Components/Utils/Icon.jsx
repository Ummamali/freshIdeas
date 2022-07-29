import Image from "next/image";
import React from "react";

const iconsSource = "/icons/";

export default function Icon({ name, alt = "", ext = ".svg", className = "" }) {
  return (
    <div className={"relative w-5 h-5 " + className}>
      <Image src={iconsSource + name + ext} alt={alt} layout="fill" />
    </div>
  );
}
