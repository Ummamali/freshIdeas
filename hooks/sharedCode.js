export async function artworkFetcher(url) {
  // this fetcher is only for hooks that fetch artworks
  const res = await fetch(url);
  if (res.ok) {
    const resObj = await res.json();
    return resObj.result;
  } else {
    const err = new Error(`API Call returned ${res.status}:\n${url}`);
    err.statusCode = res.status;
    throw err;
  }
}
