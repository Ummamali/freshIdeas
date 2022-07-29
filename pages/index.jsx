import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CategoryBar from "../Components/Home/CategoryBar";
import Showcase from "../Components/Home/Showcase";
import ShowResults from "../Components/Home/ShowResults";
import { readFromData } from "../utilCode/serverFuncs";
import useIncrementalFetch from "../hooks/useIncrementalFetch";
import Navbar from "../Components/Utils/Navbar";

export default function Home({ lqd, preload, cats }) {
  const router = useRouter();
  const [category, setCategory] = useState(cats.first);

  const {
    loadMore,
    data: results,
    loading,
  } = useIncrementalFetch("/api/illustration", { cat: category }, 12, {
    initialSize: 1,
  });
  useEffect(() => {
    if (Array.from(Object.keys(cats.items)).includes(router.query.cat)) {
      setCategory(router.query.cat);
    }
  }, [cats.items, router.query.cat]);

  function scrollHandler(e) {
    const target = e.target;
    const fromBottom =
      target.scrollHeight - (target.clientHeight + target.scrollTop);
    if (fromBottom < 2 && !loading) {
      loadMore();
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col items-stretch">
      <header>
        <Navbar />
        <CategoryBar
          categories={Array.from(Object.keys(cats.items))}
          current={category}
          setCurrent={setCategory}
        />
      </header>
      <main className="grow overflow-y-scroll" onScroll={scrollHandler}>
        <Showcase {...lqd.showcase} />
        <ShowResults results={results} tile={lqd.tile} isLoading={loading} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
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
