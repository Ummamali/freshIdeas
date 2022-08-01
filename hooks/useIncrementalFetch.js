import useSWRInfinite from "swr/infinite";

async function fetcher(url) {
  const res = await fetch(url);
  return await res.json();
}

export default function useIncrementalFetch(
  url,
  params = {},
  count = 10,
  options = {}
) {
  function getKey(idx, prev) {
    const start = idx * count;
    if (idx !== 0 && prev.length < count) {
      return null;
    }
    return (
      url + "?" + new URLSearchParams({ ...params, start, count }).toString()
    );
  }

  const { data, error, setSize, size } = useSWRInfinite(getKey, fetcher, {
    initialSize: 0,
    revalidateFirstPage: false,
    ...options,
  });

  const hasExhausted =
    data.length > 0 ? data[data.length - 1].length < count : false;
  const loading = data.length < size && !hasExhausted;

  function loadMore() {
    setSize((prev) => prev + 1);
  }
  return { data, error, loadMore, loading };
}
