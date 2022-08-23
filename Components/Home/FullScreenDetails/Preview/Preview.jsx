import Image from "next/image";
import React from "react";
import { useState } from "react";
import lqd from "../../../../Data/Liquids/home";
import useClickedScroll from "../../../../hooks/useClickedScroll";
import Artwork from "../../../Utils/Artwork";
import Icon from "../../../Utils/Icon";
import FrostSection from "./FrostSection";
import PageSection from "./PageSection";
import PreviewSection from "./PreviewSection";
import SectionLabel from "./SectionLabel";
import WallSection from "./WallSection";

const options = ["Real World", "Print Design", "Web Design"];

export default function Preview({ artwork }) {
  const [currOptionIdx, setCurrOptionIdx] = useState(0);

  return (
    <div className="bg-navbg py-8">
      <div className="mb-7 text-center">
        <p>
          <span className="material-symbols-outlined text-white/70 brightness-110">
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
      <div className="flex items-center justify-center space-x-3 mb-6 text-primary">
        {options.map((op, i) => (
          <button
            key={op}
            onClick={setCurrOptionIdx.bind(null, i)}
            className={`brightness-110 text-xs sm:text-sm hover:brightness-95 py-1 px-2 rounded-sm ${
              currOptionIdx === i ? "bg-primary text-black/80" : ""
            }`}
          >
            {op}
          </button>
        ))}
      </div>
      <div className="px-12 sm:px-16 grid grid-cols-1 grid-rows-2 gap-6 justify-items-center mx-auto md:grid-cols-2 md:grid-rows-1 md:px-8 md:gap-3 lg:max-w-5xl lg:px-16 lg:gap-7 2xl:max-w-7xl">
        <PreviewSection artwork={artwork} idx={currOptionIdx} />
      </div>
    </div>
  );
}
