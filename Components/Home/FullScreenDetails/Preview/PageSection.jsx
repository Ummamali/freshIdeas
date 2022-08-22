import Image from "next/image";
import React from "react";
import { useState } from "react";
import lqd from "../../../../Data/Liquids/home";
import Artwork from "../../../Utils/Artwork";
import SectionLabel from "./SectionLabel";

const enums = ["light", "dark"];

export default function PageSection({ artwork }) {
  const pageObj = lqd.fullScreenDetail.previews.pageImages;
  const [enumIdx, setEnumIdx] = useState(0);
  const pageType = enums[enumIdx];

  function changeMode() {
    setEnumIdx((prev) => (prev + 1) % enums.length);
  }
  return (
    <div
      className="relative h-full rounded overflow-hidden shadow shrink-0"
      style={{ aspectRatio: pageObj.aspectRatio }}
    >
      <button
        className="absolute top-0 right-0 leading-none z-10 p-1.5 brightness-105 bg-primary rounded-bl text-black/70 shadow-sm hover:brightness-90"
        onClick={changeMode}
      >
        <span className="material-symbols-outlined">light_mode</span>
      </button>
      <Image
        src={`/imgs/previewPages/${pageType}.png`}
        alt=""
        layout="fill"
        objectFit="contain"
      />
      <Artwork
        src={artwork.src}
        style={{
          width: pageObj.artworkWidth,
          opacity: pageObj.artworkOpacity,
          ...pageObj.artworkPosition,
        }}
        className="aspect-square absolute -translate-x-1/2 -translate-y-1/2"
      />
      <SectionLabel text="Printing Publications" />
    </div>
  );
}
