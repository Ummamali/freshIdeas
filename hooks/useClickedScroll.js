import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export function getDistance(elem) {
  return [
    elem.scrollLeft,
    Math.abs(elem.scrollWidth - elem.scrollLeft - elem.clientWidth),
  ];
}
export default function useClickedScroll(tolearnce = 5, scrollJump = 150) {
  const [leftArrow, setleftArrow] = useState(false);
  const [rightArrow, setrightArrow] = useState(false);

  const barRef = useRef();

  useEffect(() => {
    const right = getDistance(barRef.current)[1];
    if (right >= tolearnce) {
      setrightArrow(true);
    }
  }, []);

  function scrollHandler(e) {
    const [left, right] = getDistance(e.target);
    if (leftArrow && left < tolearnce) {
      setleftArrow(false);
    } else if (!leftArrow && left >= tolearnce) {
      setleftArrow(true);
    }

    if (rightArrow && right < tolearnce) {
      setrightArrow(false);
    } else if (!rightArrow && right >= tolearnce) {
      setrightArrow(true);
    }
  }

  function leftArrowClickHandler() {
    const tar = barRef.current;
    const leftDist = getDistance(tar)[0];
    if (leftDist < scrollJump) {
      tar.scrollLeft = 0;
    } else {
      tar.scrollLeft -= scrollJump;
    }
  }

  function rightArrowClickHandler() {
    const tar = barRef.current;
    const rightDistance = getDistance(tar)[1];
    if (rightDistance < scrollJump) {
      tar.scrollLeft = tar.clientWidth + tar.scrollLeft;
    } else {
      tar.scrollLeft += scrollJump;
    }
  }

  return {
    leftArrow,
    rightArrow,
    barRef,
    scrollHandler,
    leftArrowClickHandler,
    rightArrowClickHandler,
  };
}
