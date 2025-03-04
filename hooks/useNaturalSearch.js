import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWRInfinite from "swr/infinite";
import lqd from "../Data/Liquids/home";
import { artworkFetcher } from "./sharedCode";

export default function useNaturalSearch(initialResult, category) {
  const count = lqd.tile.length;
  const options = {
    initialSize: 1,
    revalidateFirstPage: false,
    fallbackData: [initialResult],
  };

  function getKey(idx, prev) {
    const start = idx * count;
    if (idx !== 0 && prev.length < count) {
      return null;
    }

    // its a natural search
    return `/api/naturalSearch?${new URLSearchParams({
      start,
      count,
      cat: category,
    }).toString()}`;
  }

  const { data, error, setSize, size } = useSWRInfinite(
    getKey,
    artworkFetcher,
    options
  );

  const hasExhausted =
    data.length > 0 ? data[data.length - 1].length < count : false;
  const isLoading = data.length < size && !hasExhausted;

  function loadMore() {
    setSize((prev) => prev + 1);
  }

  return { data, error, loadMore, isLoading };
}
