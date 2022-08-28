import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { activateDownload } from "../../../utilCode/clientFuncs";
import { getTextColor } from "../../../utilCode/neutralFuncs";
import Artwork from "../../Utils/Artwork";

const mediaOptions = [
  { text: ".png", type: "image/png" },
  { text: ".jpeg", type: "image/jpeg", includeBg: true },
];

const sizeOptions = [
  { width: 600, height: 600 },
  { width: 1280, height: 720 },
  { width: 1920, height: 1080 },
];

export default function DownloadOptions({ artwork }) {
  const [moreOptions, setMoreOptions] = useState(false);
  const [mediaType, setMediaType] = useState(null);

  useEffect(() => {
    if (!moreOptions && mediaOptions !== null) {
      setMediaType(null);
    }
  }, [moreOptions]);

  const downloadBg =
    artwork.pallets.length > 0 ? artwork.pallets[0] : "#2F8F4B";
  return (
    <div
      className="relative text-sm"
      style={{ color: getTextColor(downloadBg) }}
    >
      <div className="flex items-stretch space-x-[0.5px] rounded-sm md:rounded overflow-hidden">
        <a
          href={artwork.src}
          download={artwork.title + "." + artwork.type}
          style={{
            backgroundColor: downloadBg,
            color: getTextColor(downloadBg),
          }}
          className="hover:brightness-110 py-2 px-6 block shadow-sm"
        >
          Download
        </a>
        <button
          className="px-1.5 hover:brightness-110 leading-none shadow-sm"
          style={{
            backgroundColor: downloadBg,
            color: getTextColor(downloadBg, { dark: 0.8, light: 0.8 }),
          }}
          onClick={setMoreOptions.bind(null, (prev) => !prev)}
        >
          <span className="material-symbols-outlined block icon-200">
            {moreOptions ? "expand_less" : "expand_more"}
          </span>
        </button>
      </div>
      {moreOptions && (
        <div
          className="absolute w-full py-2 top-full translate-y-px shadow   z-10 rounded"
          style={{ background: downloadBg }}
        >
          {mediaType !== null ? (
            <SizeOptions
              setMediaType={setMediaType}
              mediaType={mediaType}
              artwork={artwork}
              setMoreOptions={setMoreOptions}
            />
          ) : (
            <MediaOptions setMediaType={setMediaType} />
          )}
        </div>
      )}
    </div>
  );
}

function MediaOptions({ setMediaType }) {
  return (
    <div className="flex flex-col items-stretch text-center">
      {mediaOptions.map((m) => (
        <button
          key={m.text}
          onClick={setMediaType.bind(null, m)}
          className="hover:bg-black/10 py-1"
        >
          {m.text}
        </button>
      ))}
    </div>
  );
}

function SizeOptions({ setMediaType, artwork, mediaType, setMoreOptions }) {
  return (
    <div className="flex flex-col items-stretch text-center font-head">
      {sizeOptions.map((s) => (
        <button
          key={`${s.width}x${s.height}`}
          onClick={() => {
            activateDownload({
              width: s.width,
              height: s.height,
              svg: artwork.src,
              type: mediaType.type,
              fileName: `${artwork.title}-${s.width}x${s.height}`,
              bg: mediaType.includeBg ? artwork.bg : null,
            });
            setMoreOptions(false);
          }}
          className="hover:bg-black/10 py-1"
        >
          <span className="text-xs mr-1">{mediaType.text}</span>
          {`${s.width} x ${s.height}`}
        </button>
      ))}
      <button
        className="hover:bg-black/10 py-1"
        onClick={setMediaType.bind(null, null)}
      >
        back
      </button>
    </div>
  );
}
