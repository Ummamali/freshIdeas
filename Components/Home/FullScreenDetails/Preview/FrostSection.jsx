import Image from "next/image";
import React from "react";
import lqd from "../../../../Data/Liquids/home";
import Artwork from "../../../Utils/Artwork";
import SectionLabel from "./SectionLabel";

export default function FrostSection({ artwork }) {
  const frostObj = lqd.fullScreenDetail.previews.frostImg;
  return (
    <div
      style={{
        aspectRatio: frostObj.aspectRatio,
      }}
      className="relative rounded overflow-hidden shadow w-full shrink-0"
    >
      <Image
        src={frostObj.src}
        alt=""
        objectFit="cover"
        layout="fill"
        quality={60}
        placeholder="blur"
        blurDataURL="/imgs/logoDark.svg"
      />
      <Artwork
        src={artwork.src}
        className="w-1/2 h-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90 saturate-0 brightness-90"
      />
      <SectionLabel text="Glass Monochroma" />
    </div>
  );
}
