import React, { useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";

import Icon from "../../Utils/Icon";

import lqd from "../../../Data/Liquids/home";
import Link from "next/link";

const scrollJump = 150;

export default function CategoryBar({ current }) {
  const [leftArrow, setleftArrow] = useState(false);
  const [rightArrow, setrightArrow] = useState(false);

  const barRef = useRef();

  const router = useRouter();

  function getDistance(elem) {
    return [
      elem.scrollLeft,
      Math.abs(elem.scrollWidth - elem.scrollLeft - elem.clientWidth),
    ];
  }

  useEffect(() => {
    const right = getDistance(barRef.current)[1];
    if (right >= 5) {
      setrightArrow(true);
    }
  }, []);

  function scrollHandler(e) {
    const [left, right] = getDistance(e.target);
    if (leftArrow && left < 5) {
      setleftArrow(false);
    } else if (!leftArrow && left >= 5) {
      setleftArrow(true);
    }

    if (rightArrow && right < 5) {
      setrightArrow(false);
    } else if (!rightArrow && right >= 5) {
      setrightArrow(true);
    }
  }
  return (
    <div className="bg-showcaseBg sticky top-0">
      <div className="max-w-container mx-auto relative text-sm">
        {leftArrow && (
          <button
            className="absolute left-0 bg-gradient-to-r from-navbg via-navbg/60 h-full w-16 pl-3 hover:brightness-110 z-10"
            onClick={(e) => {
              const tar = barRef.current;
              const leftDist = getDistance(tar)[0];
              if (leftDist < scrollJump) {
                tar.scrollLeft = 0;
              } else {
                tar.scrollLeft -= scrollJump;
              }
            }}
          >
            <Icon name="chevron_left_light" className="opacity-60" />
          </button>
        )}
        <div
          className={
            "flex items-center space-x-7 text-white/50 font-light overflow-x-auto py-3.5 px-4 scroll-smooth scrollHidden"
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
            onClick={(e) => {
              const tar = barRef.current;
              const leftDist = getDistance(tar)[1];
              console.log(leftDist);
              if (leftDist < scrollJump) {
                tar.scrollLeft = tar.clientWidth + tar.scrollLeft;
              } else {
                tar.scrollLeft += scrollJump;
              }
            }}
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