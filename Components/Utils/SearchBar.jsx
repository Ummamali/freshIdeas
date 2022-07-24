import React, { useRef } from "react";

export default function SearchBar({
  search,
  className,
  placeholder = "Search illustrations here...",
  styledJsx = "",
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
      <label htmlFor="searchBar">
        <span className="material-symbols-outlined text-white/50 translate-y-0.5">
          search
        </span>
      </label>
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
