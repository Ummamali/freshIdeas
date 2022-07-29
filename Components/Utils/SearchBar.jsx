import React, { useRef } from "react";
import Icon from "./Icon";

export default function SearchBar({
  search,
  className,
  placeholder = "Search illustrations here...",
  styledJsx = "",
  searchIcon = <Icon name="search_dark" className="opacity-80 w-7 h-7" />,
}) {
  const ref = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        search(ref.current.value);
      }}
      className={
        "flex items-center space-x-4 border-b border-white/25 " + className
      }
    >
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
        ${styledJsx}
      `}</style>
    </form>
  );
}
