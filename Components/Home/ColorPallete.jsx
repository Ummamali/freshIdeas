import React, { useState } from "react";

export default function ColorPallete({ color, className }) {
  const [copied, setCopied] = useState(false);

  function copyToClip() {
    navigator.clipboard.writeText(color);
    setCopied(true);
  }
  return (
    <>
      <button
        className={"flex items-center justify-center " + className}
        style={{ background: color }}
        onClick={copyToClip}
        onMouseLeave={setCopied.bind(null, false)}
      >
        {copied ? (
          <span className="material-symbols-outlined">done</span>
        ) : (
          <span className="material-symbols-outlined">content_copy</span>
        )}
      </button>
      <style jsx>{`
        button span {
          font-size: 1rem;
          opacity: 0;
          color: rgba(0, 0, 0, 0.8);
        }

        button {
          width: 1.4rem;
          height: 1.4rem;
          border-radius: 100%;
        }

        button:hover span {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
