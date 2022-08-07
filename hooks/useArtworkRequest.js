import { useSelector } from "react-redux";
import useSWR from "swr";
import { artworkFetcher } from "./sharedCode";

export default function useArtworkRequest(artworkId) {
  const fromCache = useSelector((state) => state.artworks.loaded[artworkId]);
  const { err } = useSWR(
    () =>
      typeof fromCache === "undefined"
        ? `/api/singleIllustration?id=${artworkId}`
        : null,
    artworkFetcher
  );

  const artwork = fromCache ? fromCache : null;

  const isLoading = !artwork && !err;
  console.log(err);
  return { artwork, isLoading, err };
}
