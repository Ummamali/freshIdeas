import React from "react";
import styles from "./ShowResults.module.css";

export default function LoadingTile({ tile }) {
  const results = tile.map((grArea) => (
    <div
      className="w-full h-full p-2"
      style={{ gridArea: grArea }}
      key={grArea}
    >
      <div className="w-full h-full bg-black/30"></div>
    </div>
  ));
  return <div className={"animate-pulse " + styles.singleTile}>{results}</div>;
}
