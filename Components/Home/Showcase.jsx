import React from "react";
import SearchBar from "../Utils/SearchBar";

export default function Showcase({ title, text }) {
  return (
    <div className="py-10 px-4">
      <div className="text-center max-w-lg mx-auto mb-4">
        <h1 className="text-3xl sm:text-4xl font-head tracking-wide text-black/80">
          {title}
        </h1>
        <div className="w-72 h-0.5 bg-primary mx-auto mb-3 brightness-110"></div>
        <p className="text-black/70 text-sm sm:text-base">{text}</p>
      </div>
      <SearchBar
        className={"rootEl"}
        search={console.log}
        styledJsx={`
        .rootEl{
          max-width: 40rem;
          margin-left: auto;
          margin-right: auto;
          background: #d6d6d6;
          padding-left: 1rem;
          border-radius: 2px;
        }

        .rootEl label span{
          color: hsl(0 0% 50% / 1);
          font-size: 1.8rem;
        }

        .rootEl input::placeholder{
          color: hsl(0 0% 40% / 1);
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
  );
}
