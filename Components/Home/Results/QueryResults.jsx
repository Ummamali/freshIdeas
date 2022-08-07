import React from "react";
import useQuerySearch from "../../../hooks/useQuerySearch";
import Showcase from "../Headers/Showcase";
import ShowResults from "./ShowResults";

export default function QueryResults({ category }) {
  const { loadMore, data: results, isLoading } = useQuerySearch();

  function scrollHandler(e) {
    const target = e.target;
    const fromBottom =
      target.scrollHeight - (target.clientHeight + target.scrollTop);
    if (fromBottom < 2 && !isLoading) {
      loadMore();
    }
  }

  return (
    <main
      className="grow overflow-y-scroll myScrollbar"
      onScroll={scrollHandler}
    >
      <Showcase category={category} />
      <ShowResults results={results} isLoading={isLoading} />
    </main>
  );
}
