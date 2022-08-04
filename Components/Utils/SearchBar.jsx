import React, { useRef, useState } from "react";
import Icon from "./Icon";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function SearchBar({
  className,
  placeholder = "Search illustrations here...",
  styledJsx = "",
  searchIcon = <Icon name="search_dark" className="opacity-80 w-7 h-7" />,
}) {
  const router = useRouter();
  const { q = "" } = router.query;
  const [searchVal, setSearchVal] = useState(q);

  function submitHandler(e) {
    e.preventDefault();
    const newQ = searchVal;
    const { q, ...others } = router.query;
    const query = newQ !== "" ? { ...router.query, q: newQ } : others;
    router.push(
      {
        pathname: router.pathname,
        query,
      },
      null,
      { shallow: true }
    );
  }
  return (
    <form
      onSubmit={submitHandler}
      className={
        "flex items-center space-x-4 border-b border-white/25 relative overflow-x-hidden " +
        className
      }
    >
      <label htmlFor="searchBar">{searchIcon}</label>
      <input
        type="text"
        id="searchBar"
        autoComplete="off"
        className="placeholder:text-sm placeholder:text-white/40 placeholder:font-light focus:outline-none font-light bg-transparent text-white/70 w-full"
        placeholder={placeholder}
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
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
