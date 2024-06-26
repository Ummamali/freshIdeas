import React, { useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";

import Icon from "../../Utils/Icon";

import lqd from "../../../Data/Liquids/home";
import Link from "next/link";
import useClickedScroll from "../../../hooks/useClickedScroll";

export default function CategoryBar({ current }) {
  const {
    leftArrow,
    rightArrow,
    barRef,
    scrollHandler,
    leftArrowClickHandler,
    rightArrowClickHandler,
  } = useClickedScroll();
  return (
    <div className="bg-categoryBar/[97%] backdrop-blur-sm">
      <div className="max-w-container mx-auto relative text-sm">
        {leftArrow && (
          <button
            className="absolute left-0 bg-gradient-to-r from-navbg via-navbg/60 h-full w-16 pl-3 hover:brightness-110 z-10"
            onClick={leftArrowClickHandler}
          >
            <Icon name="chevron_left_light" className="opacity-60" />
          </button>
        )}
        <div
          className={
            "flex items-center space-x-6 text-white/50 font-light tracking-wide overflow-x-auto py-3.5 px-4 scroll-smooth scrollHidden"
          }
          onScroll={scrollHandler}
          ref={barRef}
        >
          {lqd.categories.map((cat, i) => (
            <Link key={cat} href={i === 0 ? "/" : `/cat/${cat}`}>
              <a
                className={`hover:text-white whitespace-nowrap ${
                  current === cat ? "text-white/90 scale-105" : ""
                } ${
                  current === cat && i === 0
                    ? " text-primary brightness-125 scale-105 hover:text-primary"
                    : ""
                }`}
              >
                {cat}
              </a>
            </Link>
          ))}
        </div>
        {rightArrow && (
          <button
            className="absolute right-0 top-0 bg-gradient-to-l from-navbg via-navbg/70 h-full w-16 pr-3 hover:brightness-110 z-10"
            onClick={rightArrowClickHandler}
          >
            <Icon name="chevron_right_light" className="opacity-60 ml-auto" />
          </button>
        )}
      </div>
      <style jsx>{`
        /* width */
        .scrollHidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
