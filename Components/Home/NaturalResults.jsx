import React from "react";
import useNaturalSearch from "../../hooks/useNaturalSearch";
import Showcase from "./Showcase";
import ShowResults from "./ShowResults";

export default function NaturalResults({ preload, category }) {
  const {
    loadMore,
    data: results,
    isLoading,
  } = useNaturalSearch(preload, category);

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
