import React, { useImperativeHandle } from "react";
import { forwardRef } from "react";
import useNaturalSearch from "../../../hooks/useNaturalSearch";
import Showcase from "../Headers/Showcase";
import ShowResults from "./ShowResults";

function NaturalResults({ preload, category }, ref) {
  const {
    loadMore,
    data: results,
    isLoading,
  } = useNaturalSearch(preload, category);

  useImperativeHandle(ref, () => ({ loadMore, isLoading }), [isLoading]);

  return (
    <main>
      <Showcase category={category} />
      <ShowResults results={results} isLoading={isLoading} />
    </main>
  );
}

export default forwardRef(NaturalResults);
