import Image from "next/image";
import React from "react";
import Model from "../Utils/Model";
import Artwork from "./Artwork";

export default function FullScreenDetails({ close, artwork }) {
  return (
    <Model close={close}>
      <div className=" w-full h-full sm:h-[95%] sm:w-[95%] md:w-[85%] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-full h-full flex flex-col items-stretch">
          <div className="flex items-center">
            <h3 className="text-2xl ml-4 text-black/75">{artwork.name}</h3>
            <button
              className="bg-red-600 p-2 text-black/70 hover:brightness-95 ml-auto"
              onClick={close}
            >
              <p>
                <span className="material-symbols-outlined">close</span>
              </p>
            </button>
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
