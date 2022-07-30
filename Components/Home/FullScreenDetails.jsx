import Image from "next/image";
import React from "react";
import Icon from "../Utils/Icon";
import Model from "../Utils/Model";
import Artwork from "./Artwork";
import ColorPallete from "./ColorPallete";

export default function FullScreenDetails({ close, artwork }) {
  let bgType = "Background";
  if (artwork.bg.startsWith("linear-gradient")) {
    bgType = "Linear Gradient";
  } else if (artwork.bg.startsWith("radial-gradient")) {
    bgType = "Radial Gradient";
  } else if (artwork.bg.startsWith("url")) {
    bgType = "Image";
  }
  return (
    <Model close={close}>
      <div className="w-[95%] h-[84%] sm:w-[85%] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded shadow-lg">
        <header className="w-full h-full p-5 md:px-8 flex flex-col items-stretch space-y-10">
          <div className="flex items-start justify-between">
            <div className="leading-[0.1]">
              <h3 className="text-2xl font-light text-black/85">
                {artwork.title}
              </h3>
              <small className="ml-2 text-black/70 italic">
                .{artwork.type}
              </small>
            </div>
            <a
              href={artwork.src}
              download={artwork.name + "." + artwork.type}
              style={{
                backgroundColor:
                  artwork.pallets.length > 0 ? artwork.pallets[0] : "#2F8F4B",
              }}
              className="text-sm px-5 py-2 hover:brightness-110 rounded-sm text-black/70"
            >
              Download
            </a>
          </div>
          <Artwork
            src={artwork.src}
            padding="1.5rem"
            background={artwork.bg}
            className="w-full rounded-sm overflow-hidden grow sm:w-[90%] sm:mx-auto shadow-sm"
          />
          <div className="flex items-start justify-between">
            <div>
              <small className="text-black/80">Artwork Pallete</small>
              <div className="flex items-center space-x-1">
                {artwork.pallets.length > 0 ? (
                  artwork.pallets.map((clr) => (
                    <ColorPallete
                      color={clr}
                      key={clr}
                      className="w-6 h-6 shadow-sm"
                    />
                  ))
                ) : (
                  <small className="text-black/60 italic">
                    No pallets found...
                  </small>
                )}
              </div>
            </div>

            <div>
              <small className="text-black/80">Artwork Background</small>
              <button className="flex items-center text-black/80 text-sm space-x-2 underline-offset-1 hover:underline">
                <div
                  className="w-6 h-6 rounded-full shadow-sm"
                  style={{ background: artwork.bg }}
                ></div>
                <p>{bgType}</p>
              </button>
            </div>
          </div>
        </header>
      </div>
    </Model>
  );
}
