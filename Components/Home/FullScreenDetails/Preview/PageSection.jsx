import Image from "next/image";
import React from "react";
import { useState } from "react";
import lqd from "../../../../Data/Liquids/home";
import Artwork from "../../../Utils/Artwork";
import SectionLabel from "./SectionLabel";

export default function PageSection({ artwork, pageType }) {
  const pageObj = lqd.fullScreenDetail.previews.pageImages;

  return (
    <div
      className="relative w-full rounded overflow-hidden shadow shrink-0"
      style={{ aspectRatio: pageObj.aspectRatio }}
    >
      <Image
        src={`/imgs/previewPages/${pageType}.png`}
        alt=""
        layout="fill"
        objectFit="contain"
        quality={60}
        placeholder="blur"
        blurDataURL={lqd.fullScreenDetail.previews.placeholderUrl}
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
      <SectionLabel text={`Print Media (${pageType})`} />
    </div>
  );
}
