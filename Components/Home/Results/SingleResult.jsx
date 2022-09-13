import Image from "next/image";
import {
  getFilename,
  getTextColor,
  titleIt,
} from "../../../utilCode/neutralFuncs";
import Artwork from "../../Utils/Artwork";

import { useDispatch } from "react-redux";

import ColorPallete from "../../Utils/ColorPallete";

import { configs } from "./ShowResults";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SingleResult({ artwork, gridArea }) {
  const router = useRouter();
  const [detailShowing, setDetailShowing] = useState(false);

  let [fName, type] = getFilename(artwork.src).split(".");
  const {
    src,
    bg,
    borderClass = "",
    padding = configs.imgPadding,
    pallets = [],
  } = artwork;
  let { title = fName } = artwork;
  title = titleIt(title);
  const buttonBg = pallets.length > 0 ? pallets[0] : "#2F8F4B";
  return (
    <div
      className="relative w-full h-full p-2"
      style={{ gridArea }}
      onClick={(e) => {
        if (e.target.dataset.details === "yes") {
          router.push(
            {
              pathname: router.pathname,
              query: { ...router.query, fll: artwork._id },
            },
            null,
            { shallow: true }
          );
        }
      }}
    >
      <div
        className="w-full h-full relative rounded-sm  overflow-hidden hover:cursor-zoom-in"
        onMouseEnter={setDetailShowing.bind(null, true)}
        onMouseLeave={setDetailShowing.bind(null, false)}
      >
        <Artwork
          src={src}
          padding={padding}
          background={bg}
          borderClass={borderClass}
          className="w-full h-full"
        />
        {detailShowing ? (
          <SmallDetails
            title={title}
            pallets={pallets}
            type={type}
            src={src}
            buttonBg={buttonBg}
          />
        ) : null}
      </div>
    </div>
  );
}

function SmallDetails({ title, pallets, type, src, buttonBg }) {
  return (
    <div
      className="absolute bottom-0 left-0 w-full h-full bg-black/40 flex flex-col items-stretch justify-between p-5"
      data-details="yes"
    >
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
          <h3 className="text-white/80">{title}</h3>
          <small className="text-white/70 text-xs italic">{"." + type}</small>
        </div>
        <a
          href={src}
          download={title + "." + type}
          style={{
            backgroundColor: buttonBg,
            color: getTextColor(buttonBg),
          }}
          className="text-sm px-5 py-2 hover:brightness-110 rounded-sm"
        >
          Download
        </a>
      </div>
    </div>
  );
}
