import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CategoryBar from "../Components/Home/CategoryBar";
import Showcase from "../Components/Home/Showcase";
import ShowResults from "../Components/Home/ShowResults";
import { readFromData } from "../utilCode/serverFuncs";
import useIncrementalFetch from "../hooks/useIncrementalFetch";

export default function Home({ lqd, preload, cats }) {
  const router = useRouter();
  const [category, setCategory] = useState(cats.first);

  const {
    loadMore,
    data: results,
    err,
  } = useIncrementalFetch("/api/illustration", { cat: category }, 12);
  useEffect(() => {
    if (Array.from(Object.keys(cats.items)).includes(router.query.cat)) {
      setCategory(router.query.cat);
    }
  }, [cats.items, router.query.cat]);
  return (
    <>
      <CategoryBar
        categories={Array.from(Object.keys(cats.items))}
        current={category}
        setCurrent={setCategory}
      />
      <Showcase {...lqd.showcase} />
      {results && <ShowResults results={results} tile={lqd.tile} />}
      <button onClick={loadMore}>LOad MOre</button>
    </>
  );
}

export async function getStaticProps(context) {
  const lqd = await readFromData("Liquids", "home.json");
  const illustrations = await readFromData("Main", "Illustrations.json");
  const cats = await readFromData("Main", "Categories.json");
  for (const [key, val] of Object.entries(cats.items)) {
    cats.items[key] = val.slice(0, lqd.tile.length);
  }
  const images = cats.items[cats.first];
  const preload = images.map((item) => ({ ...illustrations[item], id: item }));
  return {
    props: { lqd, preload, cats },
  };
}
