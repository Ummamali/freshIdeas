import Image from "next/image";
import React from "react";
import lqd from "../../../../Data/Liquids/home";
import Artwork from "../../../Utils/Artwork";
import FrostSection from "./FrostSection";
import PageSection from "./PageSection";
import SectionLabel from "./SectionLabel";
import WallSection from "./WallSection";

export default function Preview({ artwork }) {
  const { frostImg, roomImages } = lqd.fullScreenDetail.previews;
  const { previewRoom = "roomYellow" } = artwork;
  const roomObj = roomImages[previewRoom];
  console.log(artwork);
  return (
    <div className="bg-navbg py-6">
      <div className="mb-7 text-center">
        <p>
          <span className="material-symbols-outlined text-primary brightness-110">
            panorama
          </span>
        </p>
        <h3 className="text-2xl font-head text-white/75 uppercase">
          Artwork Preview
        </h3>
        <p className="text-sm text-white/50">
          How this artwork looks and feels in various settings
        </p>
      </div>
      <div className="h-[500px] w-full px-4 ">
        <div className="h-full flex items-center space-x-6 overflow-x-auto scrollHidden">
          <FrostSection artwork={artwork} />
          <WallSection roomObj={roomObj} artwork={artwork} />
          <PageSection artwork={artwork} />
        </div>
      </div>
      <style jsx>{`
        .scrollHidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
