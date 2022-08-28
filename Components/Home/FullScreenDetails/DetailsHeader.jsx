import React from "react";
import { activateDownload } from "../../../utilCode/clientFuncs";
import { getTextColor } from "../../../utilCode/neutralFuncs";
import Artwork from "../../Utils/Artwork";
import ColorPallete from "../../Utils/ColorPallete";
import DownloadOptions from "./DownloadOptions";
import PalleteCollection from "./PalleteCollection";

export default function DetailsHeader({ artwork }) {
  let bgType = "Background";
  if (artwork.bg.startsWith("linear-gradient")) {
    bgType = "Linear Gradient";
  } else if (artwork.bg.startsWith("radial-gradient")) {
    bgType = "Radial Gradient";
  } else if (artwork.bg.startsWith("url")) {
    bgType = "Image";
  }
  return (
    <header className="w-full h-full p-5 flex flex-col items-stretch space-y-10">
      <div className="flex flex-col items-center space-y-2 sm:flex-row sm:justify-between">
        <div>
          <h3 className="text-2xl sm:text-[1.7rem] font-light text-black/80">
            {artwork.title}
            <span className="text-sm italic text-black ml-1">
              .{artwork.type}
            </span>
          </h3>
        </div>
        <DownloadOptions artwork={artwork} />
      </div>
      <Artwork
        src={artwork.src}
        padding="1.5rem"
        background={artwork.bg}
        className="w-full rounded-sm overflow-hidden grow sm:w-[90%] sm:mx-auto lg:w-[70%] shadow-sm"
      />
      <div className="flex items-start justify-between">
        <div>
          <small className="text-black/80">Artwork Pallete</small>
          <PalleteCollection pallets={artwork.pallets} />
        </div>

        <div>
          <small className="text-black/80">Artwork Background</small>
          <button className="flex items-center text-black/70 text-sm space-x-2 underline-offset-1 hover:underline">
            <div
              className="w-6 h-6 rounded-full shadow-sm"
              style={{ background: artwork.bg }}
            ></div>
            <p>{bgType}</p>
          </button>
        </div>
      </div>
    </header>
  );
}
