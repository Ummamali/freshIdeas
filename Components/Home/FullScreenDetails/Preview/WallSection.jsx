import Image from "next/image";
import React from "react";
import lqd from "../../../../Data/Liquids/home";
import Artwork from "../../../Utils/Artwork";
import SectionLabel from "./SectionLabel";

export default function WallSection({ artwork }) {
  const { previewRoom = "roomYellow" } = artwork;
  const roomObj = lqd.fullScreenDetail.previews.roomImages[previewRoom];
  return (
    <div
      className="relative w-full rounded overflow-hidden shadow shrink-0"
      style={{ aspectRatio: roomObj.aspectRatio }}
    >
      <Image
        src={roomObj.src}
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
          width: roomObj.artworkWidth,
          opacity: roomObj.artworkOpacity,
          ...roomObj.artworkPosition,
        }}
        className="aspect-square absolute -translate-x-1/2 -translate-y-1/2"
      />
      <SectionLabel text="Room Wall" />
    </div>
  );
}
