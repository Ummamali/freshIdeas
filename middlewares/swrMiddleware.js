import { loadArtworks } from "../store/artworksSlice";

const artworkGetterUrls = [
  "/api/naturalSearch",
  "/api/search",
  "/api/singleIllustration",
];

export function getIllustrationsDispatcher(dispatchStore) {
  return (useSWRNext) => (key, fetcher, config) => {
    const decoratedFetcher = async (...args) => {
      if (
        args.length === 1 &&
        typeof args[0] === "string" &&
        artworkGetterUrls.some((u) => args[0].startsWith(u))
      ) {
        const resObj = await fetcher(...args);
        dispatchStore(loadArtworks(resObj));
        return resObj;
      }
      return fetcher(...args);
    };

    return useSWRNext(key, decoratedFetcher, config);
  };
}
