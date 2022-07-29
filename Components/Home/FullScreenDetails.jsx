import Image from "next/image";
import React from "react";
import Icon from "../Utils/Icon";
import Model from "../Utils/Model";
import Artwork from "./Artwork";

export default function FullScreenDetails({ close, artwork }) {
  return (
    <Model close={close}>
      <div className="w-full h-full sm:h-[95%] sm:w-[95%] md:w-[85%] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          className="absolute right-0 bg-red-600 p-2.5 hover:brightness-95 ml-auto"
          onClick={close}
        >
          <Icon name="cross_dark" className="opacity-80" />
        </button>
        <div className="w-full h-full flex flex-col items-stretch">
          <div className="flex items-center px-4 py-2">
            <div className="leading-[0.5]">
              <h3 className="text-2xl text-black/75">{artwork.name}</h3>
              <small className="ml-2 text-black/70 italic">
                .{artwork.type}
              </small>
            </div>
          </div>
          <Artwork
            src={artwork.src}
            padding="4rem"
            background={artwork.bg}
            className="w-[95%] md:w-[80%] h-96 mx-auto md:grow p-4"
          />
        </div>
      </div>
    </Model>
  );
}
