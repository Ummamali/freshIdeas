import React from "react";

export default function LoadingTile() {
  return (
    <div className="flex items-center justify-center py-2 text-sm md:text-base animate-pulse">
      <span className="material-symbols-outlined mr-1">fast_forward</span>
      <p className="leading-none">Loading...</p>
    </div>
  );
}
