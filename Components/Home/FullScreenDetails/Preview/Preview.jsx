import Image from "next/image";
import React from "react";
import lqd from "../../../../Data/Liquids/home";
import useClickedScroll from "../../../../hooks/useClickedScroll";
import Artwork from "../../../Utils/Artwork";
import Icon from "../../../Utils/Icon";
import FrostSection from "./FrostSection";
import PageSection from "./PageSection";
import SectionLabel from "./SectionLabel";
import WallSection from "./WallSection";

export default function Preview({ artwork }) {
  const {
    leftArrow,
    rightArrow,
    scrollHandler,
    barRef,
    leftArrowClickHandler,
    rightArrowClickHandler,
  } = useClickedScroll();
  const buttonClsShared =
    "bg-black/80 hover:brightness-150 text-white/60 ln p-2";
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
      <div className="h-[500px] w-full px-4 relative ">
        {leftArrow && (
          <button
            className={"abs-left-centre left-4 rounded-r-sm " + buttonClsShared}
            onClick={leftArrowClickHandler}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
        )}
        <div
          className="h-full flex items-center space-x-6 overflow-x-auto scrollHidden scroll-smooth"
          ref={barRef}
          onScroll={scrollHandler}
        >
          <FrostSection artwork={artwork} />
          <WallSection artwork={artwork} />
          <PageSection artwork={artwork} />
        </div>
        {rightArrow && (
          <button
            className={
              "abs-right-centre right-4 rounded-l-sm " + buttonClsShared
            }
            onClick={rightArrowClickHandler}
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        )}
      </div>
      <style jsx>{`
        .scrollHidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
