import React, { useRef, useState } from "react";
import Icon from "./Icon";
import useSWR from "swr";

export default function SearchBar({
  search,
  className,
  placeholder = "Search illustrations here...",
  styledJsx = "",
  searchIcon = <Icon name="search_dark" className="opacity-80 w-7 h-7" />,
}) {
  const ref = useRef();
  const [q, setQ] = useState("");
  const { data, err } = useSWR(
    () => (q === "" ? null : q),
    (url) => fetch(`/api/search?q=${q}`).then((res) => res.json())
  );

  const isLoading = !data && !err && q !== "";

  function submitHandler(e) {
    e.preventDefault();
    setQ(ref.current.value);
  }
  return (
    <form
      onSubmit={submitHandler}
      className={
        "flex items-center space-x-4 border-b border-white/25 relative overflow-x-hidden " +
        className
      }
    >
      {isLoading && (
        <div className="h-0.5 w-20 absolute left-0 bottom-0 bg-primary z-10 rounded loadingBar"></div>
      )}
      <label htmlFor="searchBar">{searchIcon}</label>
      <input
        type="text"
        ref={ref}
        id="searchBar"
        autoComplete="off"
        className="placeholder:text-sm placeholder:text-white/40 placeholder:font-light focus:outline-none font-light bg-transparent text-white/70 w-full"
        placeholder={placeholder}
      />
      <style jsx>{`
        .loadingBar {
          animation: travel 2s infinite;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        @keyframes travel {
          from {
            transform: translateX(-100%);
            left: 0%;
          }
          to {
            transform: translateX(0%);
            left: 100%;
          }
        }

        ${styledJsx}
      `}</style>
    </form>
  );
}
