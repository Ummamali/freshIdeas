import React, { useRef } from "react";

export default function SearchBar({
  search,
  className,
  placeholder = "Search illustrations here...",
}) {
  const ref = useRef();
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={
        "flex items-center space-x-4 border-b border-white/25 pb-1 pl-2 " +
        className
      }
    >
      <label htmlFor="searchBar">
        <span className="material-symbols-outlined text-white/50">search</span>
      </label>
      <input
        type="text"
        ref={ref}
        id="searchBar"
        autoComplete="off"
        className="placeholder:text-sm placeholder:text-white/40 placeholder:font-light placeholder:italic focus:outline-none font-light bg-transparent text-white/70 w-[300px]"
        placeholder={placeholder}
      />
    </form>
  );
}
