import React, { useEffect, useRef, useState } from "react";

import styles from "../../styles/hiddenScroll.module.css";

const scrollJump = 150;

export default function CategoryBar({ categories, current, setCurrent }) {
  const [leftArrow, setleftArrow] = useState(false);
  const [rightArrow, setrightArrow] = useState(false);

  const barRef = useRef();

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
            className="absolute left-0 bg-gradient-to-r from-navbg pr-4 h-full text-white/70 aspect-square flex items-center justify-center hover:text-white"
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
            <span className="material-symbols-outlined text-4xl">
              chevron_left
            </span>
          </button>
        )}
        <div
          className={
            "flex items-center space-x-7 text-white/50 font-light overflow-x-auto py-3.5 px-4 scroll-smooth " +
            styles.scrollHidden
          }
          onScroll={scrollHandler}
          ref={barRef}
        >
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={
                "hover:text-white whitespace-nowrap " +
                (current === cat ? "text-white/90 scale-105" : "") +
                (current === cat && i === 0
                  ? " text-primary brightness-125"
                  : "")
              }
              onClick={() => setCurrent(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        {rightArrow && (
          <button
            className="absolute right-0 top-0 bg-gradient-to-l from-navbg h-full text-white/70 aspect-square flex items-center justify-center hover:text-white"
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
            <span className="material-symbols-outlined text-4xl">
              chevron_right
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
