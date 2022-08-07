import React from "react";
import ColorPallete from "../../Utils/ColorPallete";

export default function PalleteCollection({ pallets }) {
  return (
    <>
      <div className="flex items-center space-x-1 max-w-[100px] sm:max-w-[200px] overflow-x-scroll coll">
        {pallets.length > 0 ? (
          pallets.map((clr) => (
            <ColorPallete color={clr} key={clr} className="p-2 shadow" />
          ))
        ) : (
          <small className="text-black/60 italic">No pallets found...</small>
        )}
      </div>
      <style jsx>
        {`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .coll::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          .coll {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
    </>
  );
}
