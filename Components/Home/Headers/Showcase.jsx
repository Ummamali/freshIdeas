import React from "react";
import lqd from "../../../Data/Liquids/home";
import Artwork from "../../Utils/Artwork";
import SearchBar from "../../Utils/SearchBar";

export default function Showcase() {
  const { title, text } = lqd.showcase;
  return (
    <div className="mainItem">
      <div className="py-16 px-4 max-w-container container:mx-auto">
        <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-y-0 sm:justify-between mb-8">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-[2.8rem] sm:leading-none font-head font-light tracking-tight uppercase text-white/60">
              {title}
            </h1>
            <div className="w-64 h-0.5 mx-auto lg:mx-0 bg-primary mb-4 mt-2 brightness-110"></div>
            <p className="max-w-lg text-white/[55%] font-light text-sm sm:text-base">
              {text}
            </p>
          </div>
          <Artwork
            src={lqd.showcase.artworkSrc}
            className="w-40 aspect-square md:w-64"
          />
        </div>
        <SearchBar
          className={"rootEl shadow"}
          styledJsx={`
        .rootEl{
          max-width: 40rem;
          margin-left: auto;
          margin-right: auto;
          background: #e6e6e6;
          padding-left: 1rem;
          border-radius: 2px;
        }

        .rootEl input::placeholder{
          color: hsl(0 0% 55% / 1);
          font-size: 1rem;
        }

        .rootEl input{
          font-size: 1.2rem;
          color: hsl(0 0% 30% / 1);
          letter-spacing: 0.2px;
          padding: 1rem 0rem;
        }


        @media (max-width: 780px){
          .rootEl input{
            font-size: 1rem;
            padding: 0.7rem 0rem;
          }
        }
      `}
        />
      </div>
      <style jsx>
        {`
          .mainItem {
            background: linear-gradient(
                315deg,
                hsla(73 49% 20% / 0.1),
                hsla(73 49% 20% / 0.1) 10%,
                transparent 10%
              ),
              linear-gradient(
                135deg,
                hsla(73 49% 20% / 0.1),
                hsla(73 49% 20% / 0.1) 12%,
                transparent 12%
              ),
              linear-gradient(45deg, hsl(150, 3%, 15%), hsl(150, 3%, 12%));
          }

          @media (max-width: 1024px) {
            .mainItem {
              background: linear-gradient(
                60deg,
                hsl(150, 3%, 15%),
                hsl(150, 3%, 12%)
              );
            }
          }
        `}
      </style>
    </div>
  );
}
