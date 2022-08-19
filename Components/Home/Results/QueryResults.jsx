import React from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import useQuerySearch from "../../../hooks/useQuerySearch";
import Showcase from "../Headers/Showcase";
import ShowResults from "./ShowResults";

function QueryResults({ category, artworkCount }, ref) {
  const { loadMore, data: results, isLoading } = useQuerySearch();

  useImperativeHandle(ref, () => ({ loadMore, isLoading }), [isLoading]);

  return (
    <main>
      <Showcase category={category} artworkCount={artworkCount} />
      <ShowResults results={results} isLoading={isLoading} />
    </main>
  );
}

export default forwardRef(QueryResults);
