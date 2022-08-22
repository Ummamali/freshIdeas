import React from "react";

export default function SectionLabel({ text }) {
  return (
    <p className="absolute w-full left-0 bottom-0 bg-black/70 text-xs text-white/60 text-center py-2 z-10">
      {text}
    </p>
  );
}
