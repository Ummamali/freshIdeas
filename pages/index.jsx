import React, { useState } from "react";
import CategoryBar from "../Components/Home/CategoryBar";
import Showcase from "../Components/Home/Showcase";
import ShowResults from "../Components/Home/ShowResults";
import { readFromData } from "../utilCode/serverFuncs";

export default function Home({ lqd }) {
  const [category, setCategory] = useState(lqd.categories[0]);
  const [shownResults, setShownResults] = useState(lqd.freshResults);
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
        presets={lqd.cardPresets}
        tile={lqd.tile}
        tileRows={lqd.tileRows}
      />
    </>
  );
}

export async function getStaticProps() {
  const lqd = await readFromData("Liquids", "home.json");
  return { props: { lqd } };
}
