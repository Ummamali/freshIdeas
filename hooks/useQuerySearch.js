import { useRouter } from "next/router";
import useSWRInfinite from "swr/infinite";
import lqd from "../Data/Liquids/home";
import { artworkFetcher } from "./sharedCode";

export default function useQuerySearch() {
  const count = lqd.tile.length;
  const router = useRouter();
  const { q } = router.query;

  const options = {
    initialSize: 1,
    revalidateFirstPage: false,
  };

  function getKey(idx, prev) {
    if (idx !== 0 && prev.length < count) {
      return null;
    }

    const searchFrom = prev ? Math.max(...prev.map((i) => i.refIndex)) : 0;

    // its a natural search
    return `/api/search?${new URLSearchParams({
      q,
      count,
      searchFrom,
    }).toString()}`;
  }

  const {
    data = [],
    error,
    setSize,
    size,
  } = useSWRInfinite(getKey, artworkFetcher, options);

  const hasExhausted =
    data.length > 0 ? data[data.length - 1].length < count : false;
  const isLoading = data.length < size && !hasExhausted;

  function loadMore() {
    setSize((prev) => prev + 1);
  }

  return { data, error, loadMore, isLoading };
}
