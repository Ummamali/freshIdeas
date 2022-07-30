import Image from "next/image";
import { getFilename, titleIt } from "../../utilCode/neutralFuncs";
import Artwork from "./Artwork";

import ColorPallete from "./ColorPallete";

import { configs } from "./ShowResults";

export default function SingleResult({
  id,
  src,
  bg,
  gridArea,
  setDetails,
  padding = configs.imgPadding,
  pallets = [],
}) {
  let [name, type] = getFilename(src).split(".");
  name = titleIt(name);
  return (
    <div
      className="relative w-full h-full p-2 card "
      style={{ gridArea }}
      onClick={(e) => {
        console.log(e.target.dataset);
        if (e.target.dataset.details === "yes") {
          setDetails({ src, bg, pallets, id, name, type });
        }
      }}
    >
      <div className="w-full h-full relative rounded md:rounded-sm overflow-hidden">
        <Artwork
          src={src}
          padding={padding}
          background={bg}
          className="w-full h-full"
        />
        <div
          className="absolute bottom-0 left-0 w-full h-full details opacity-0 transition-opacity flex flex-col items-stretch justify-between p-5"
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

/*  

const copy = (
  <div
    
    style={{ background: bg, padding }}
  >
    <div className="w-full h-full relative">
      <Image alt={name} src={src} layout="fill" objectFit="contain" />
    </div>
    
  </div>
);
*/
