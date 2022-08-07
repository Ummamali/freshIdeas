import React, { useState } from "react";
import { getTextColor } from "../../utilCode/neutralFuncs";
import Icon from "../Utils/Icon";

export default function ColorPallete({ color, className = "" }) {
  const [copied, setCopied] = useState(false);

  function copyToClip() {
    navigator.clipboard.writeText(color);
    setCopied(true);
  }
  return (
    <>
      <button
        className={`flex items-center justify-center p-1 rounded-full palleteCircle ${className}`}
        style={{ background: color }}
        onClick={copyToClip}
        onMouseLeave={setCopied.bind(null, false)}
      >
        <span
          className="material-symbols-outlined transition-opacity duration-75"
          style={{ fontSize: "1.2rem", color: getTextColor(color) }}
        >
          {copied ? "done" : "content_copy"}
        </span>
      </button>
      <style jsx>
        {`
          .palleteCircle span {
            opacity: 0;
          }

          .palleteCircle:hover span {
            opacity: 1;
          }
        `}
      </style>
    </>
  );
}
