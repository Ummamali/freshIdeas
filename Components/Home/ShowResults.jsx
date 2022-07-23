import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ShowResults({ results, presets, tile, tileRows }) {
  const items = [];
  const tileLen = tile.length;
  for (const [i, resItem] of results.entries()) {
    const itemNo = i % tileLen;
    const tileNo = parseInt(i / tileLen);
    const conf = tile[itemNo];
    items.push(
      <SingleResult
        {...resItem}
        key={resItem.id}
        preset={presets[conf.preset]}
        row={conf.row + tileNo * tileRows}
        col={conf.col}
      />
    );
  }
  return (
    <div>
      <div className="max-w-container mx-auto resultContain">{items}</div>
      <style jsx>{`
        .resultContain {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          grid-auto-rows: 200px;
        }
      `}</style>
    </div>
  );
}

function SingleResult({ name, src, bg, preset, row, col }) {
  const styles = {
    gridRow: `${row} / span ${preset.rowSpan}`,
    gridColumn: `${col} / span ${preset.colSpan}`,
  };
  return (
    <div className="w-full h-full p-2" style={styles}>
      <div className="w-full h-full p-2" style={{ background: bg }}>
        <div className="w-full h-full relative">
          <Image alt={name} src={src} layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
}
