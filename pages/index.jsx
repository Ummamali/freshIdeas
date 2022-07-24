import React, { useState } from "react";
import CategoryBar from "../Components/Home/CategoryBar";
import Showcase from "../Components/Home/Showcase";
import ShowResults from "../Components/Home/ShowResults";
import { readFromData } from "../utilCode/serverFuncs";

export default function Home({ lqd, preload }) {
  const [category, setCategory] = useState(lqd.categories[0]);
  const [shownResults, setShownResults] = useState(preload);
  return (
    <>
      <CategoryBar
        categories={lqd.categories}
        current={category}
        setCurrent={setCategory}
      />
      <Showcase {...lqd.showcase} />
      <ShowResults
        results={shownResults}
        tile={lqd.tile}
        illPath={lqd.illPath}
      />
    </>
  );
}

export async function getStaticProps() {
  const lqd = await readFromData("Liquids", "home.json");
  const illustrations = await readFromData("illustrations.json");
  const preload = [];
  for (const item of lqd.fresh) {
    preload.push({ ...illustrations[item], id: item });
  }
  return { props: { lqd, preload } };
}
