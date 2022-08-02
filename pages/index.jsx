import { useRouter } from "next/router";
import { useEffect } from "react";
import HomeScreen from "../Components/Home/HomeScreen";
import lqd from "../Data/Liquids/home";
import { readFromDataSync } from "../utilCode/serverFuncs";

import Fuse from "fuse.js";

export default function Home(props) {
  return <HomeScreen {...props} />;
}

export async function getStaticProps() {
  const ills = readFromDataSync("Main", "Illustrations.json");

  const illsItems = Array.from(Object.entries(ills)).map((item) => {
    const [id, obj] = item;
    return { id, ...obj };
  });

  const currentCat = lqd.categories[0];
  const options = { includeScore: true, keys: ["keywords"] };
  const fuse = new Fuse(illsItems, options);
  const preload = fuse.search(currentCat).slice(0, lqd.tile.length);
  return {
    props: { preload, currentCat },
  };
}
