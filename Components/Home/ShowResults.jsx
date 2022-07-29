import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getFilename, getFileType, titleIt } from "../../utilCode/neutralFuncs";
import ColorPallete from "./ColorPallete";
import styles from "./ShowResults.module.css";
import LoadingTile from "./LoadingTile";

const configs = {
  palleteLength: 2,
  imgPadding: "1rem", // default space around the image
};

export default function ShowResults({ results, tile, isLoading }) {
  const renderTiles = [];
  const resultsIttr = results ? results : [];
  for (const singlePage of resultsIttr) {
    const thisItems = singlePage.map((item, i) => (
      <SingleResult {...item} key={item.id} gridArea={tile[i]} />
    ));
    if (thisItems.length > 0) {
      renderTiles.push(<div className={styles.singleTile}>{thisItems}</div>);
    }
  }

  if (isLoading) {
    renderTiles.push(<LoadingTile tile={tile} />);
  }

  const emptyMsg = (
    <p className="font-light text-black/80 flex items-center justify-center">
      <span className="material-symbols-outlined text-red-500/80 mr-2">
        sentiment_dissatisfied
      </span>
      <span className="text-sm">No Illustrations found!</span>
    </p>
  );

  return (
    <div className="max-w-container mx-4 my-2 sm:mx-6 container:mx-auto">
      {renderTiles.length > 0 ? renderTiles : emptyMsg}
    </div>
  );
}

function SingleResult({
  src,
  bg,
  gridArea,
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
          <Image alt={name} src={src} layout="fill" objectFit="contain" />
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
