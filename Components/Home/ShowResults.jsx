import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getFilename, getFileType, titleIt } from "../../utilCode/neutralFuncs";
import ColorPallete from "./ColorPallete";
import styles from "./ShowResults.module.css";

const configs = {
  palleteLength: 2,
  imgPadding: "1rem", // default space around the image
};

export default function ShowResults({ results, tile, illPath }) {
  const tiles = [];
  const items = [];
  for (const [i, resItem] of results.entries()) {
    const itemNo = i % tile.length;
    items.push(
      <SingleResult
        {...resItem}
        key={resItem.id}
        gridArea={tile[itemNo]}
        illPath={illPath}
      />
    );
    if (items.length === tile.length) {
      const thisItems = [...items];
      tiles.push(
        <div className={styles.singleTile} key={`tile-${tiles.length}`}>
          {thisItems}
        </div>
      );
      items.length = 0;
    }
  }
  if (items.length > 0) {
    tiles.push(
      <div className={styles.singleTile} key={`tile-${tiles.length}`}>
        {items}
      </div>
    );
  }
  return (
    <div className="max-w-container mx-4 sm:mx-6 container:mx-auto">
      {tiles}
    </div>
  );
}

function SingleResult({
  src,
  bg,
  gridArea,
  illPath,
  padding = configs.imgPadding,
  pallets = [],
}) {
  let [name, type] = getFilename(src).split(".");
  name = titleIt(name);
  return (
    <div className="w-full h-full p-2 card " style={{ gridArea }}>
      <div
        className="w-full h-full p-2 relative"
        style={{ background: bg, padding }}
      >
        <div className="w-full h-full relative">
          <Image
            alt={name}
            src={illPath + "/" + src}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full details opacity-0 transition-opacity flex flex-col items-stretch justify-between p-5">
          <div className="">
            <div className="flex items-center space-x-1">
              {pallets.slice(0, configs.palleteLength).map((p) => (
                <ColorPallete key={p} color={p} />
              ))}
              {pallets.length > configs.palleteLength ? (
                <small className="text-white/60 text-xs pl-1 italic">
                  +{pallets.length - configs.palleteLength} more...
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
              style={{
                backgroundColor: pallets.length > 0 ? pallets[0] : "#2F8F4B",
              }}
              className="text-sm px-5 py-2 hover:brightness-110 rounded-sm text-black/70"
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
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.1) 50%,
            rgba(0, 0, 0, 0.3) 85%
          );
        }

        .card:hover .details {
          opacity: 1;
          cursor: zoom-in;
        }
      `}</style>
    </div>
  );
}
