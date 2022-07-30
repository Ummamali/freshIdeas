import React, { useState } from "react";
import Icon from "../Utils/Icon";
import styles from "./ColorPallete.module.css";

export default function ColorPallete({ color, className = "" }) {
  const [copied, setCopied] = useState(false);

  function copyToClip() {
    navigator.clipboard.writeText(color);
    setCopied(true);
  }
  return (
    <>
      <button
        className={`flex items-center justify-center p-[0.2rem] rounded-full ${className} ${styles.pallete}`}
        style={{ background: color }}
        onClick={copyToClip}
        onMouseLeave={setCopied.bind(null, false)}
      >
        <Icon
          name={copied ? "tick_dark" : "content_copy_dark"}
          className={"w-4 h-4 opacity-0  " + styles.icon}
        />
      </button>
    </>
  );
}
