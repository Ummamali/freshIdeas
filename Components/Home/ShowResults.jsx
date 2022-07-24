import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getFilename, getFileType, titleIt } from "../../utilCode/neutralFuncs";
import ColorPallete from "./ColorPallete";

const palleteLength = 4;

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

function SingleResult({ src, bg, preset, row, col, pallets = [] }) {
  let [name, type] = getFilename(src).split(".");
  name = titleIt(name);
  const styles = {
    gridRow: `${row} / span ${preset.rowSpan}`,
    gridColumn: `${col} / span ${preset.colSpan}`,
  };
  return (
    <div className="w-full h-full p-2 card " style={styles}>
      <div className="w-full h-full p-2 relative" style={{ background: bg }}>
        <div className="w-full h-full relative">
          <Image alt={name} src={src} layout="fill" objectFit="contain" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full details opacity-0 transition-opacity flex flex-col items-stretch justify-between p-5">
          <div className="">
            <div className="flex items-center space-x-1">
              {pallets.slice(0, palleteLength).map((p) => (
                <ColorPallete key={p} color={p} />
              ))}
              {pallets.length > palleteLength ? (
                <small className="text-white/40 text-xs pl-1 italic">
                  +{pallets.length - palleteLength} more...
                </small>
              ) : null}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="leading-none">
              <h3 className="text-white/80">{name}</h3>
              <small className="text-white/70 text-xs italic">
                {"." + type}
              </small>
            </div>
            <a
              href={src}
              download={name + "." + type}
              className="bg-primary text-sm px-5 py-2 brightness-[1.25] hover:brightness-110 rounded-sm text-black/90"
            >
              Download
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .details {
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.3) 15%,
            rgba(0, 0, 0, 0.5) 80%
          );
          backdrop-filter: blur(0.7px);
        }

        .card:hover .details {
          opacity: 1;
          cursor: zoom-in;
        }
      `}</style>
    </div>
  );
}
