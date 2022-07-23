import React, { useState } from "react";
import CategoryBar from "../Components/Home/CategoryBar";
import { readFromData } from "../utilCode/serverFuncs";

export default function Home({ lqd }) {
  const [category, setCategory] = useState(lqd.categories[0]);
  return (
    <>
      <CategoryBar
        categories={lqd.categories}
        current={category}
        setCurrent={setCategory}
      />
    </>
  );
}

export async function getStaticProps() {
  const lqd = await readFromData("Liquids", "home.json");
  return { props: { lqd } };
}
