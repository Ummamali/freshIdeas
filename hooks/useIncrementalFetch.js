import useSWRInfinite from "swr/infinite";

async function fetcher(url) {
  const res = await fetch(url);
  return await res.json();
}

export default function useIncrementalFetch(url, params = {}, count = 10) {
  function getKey(idx, prev) {
    const start = idx * count;
    if (idx !== 0 && prev.length < count) {
      console.warn("Producer exhausted! Cancelling request");
      return null;
    }
    return (
      url + "?" + new URLSearchParams({ ...params, start, count }).toString()
    );
  }

  const { data, error, setSize, size } = useSWRInfinite(getKey, fetcher, {
    initialSize: 0,
    revalidateFirstPage: false,
  });

  function loadMore() {
    setSize(size + 1);
  }
  return { data, error, loadMore };
}
