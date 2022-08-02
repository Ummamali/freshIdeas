import React from "react";
import HomeScreen from "../../Components/Home/HomeScreen";
import lqd from "../../Data/Liquids/home";

import Fuse from "Fuse.js";

export default function CategoryHome(props) {
  return <HomeScreen {...props} />;
}

export async function getStaticProps({ params }) {
  const ills = readFromDataSync("Main", "Illustrations.json");

  const illsItems = Array.from(Object.entries(ills)).map((item) => {
    const [id, obj] = item;
    return { id, ...obj };
  });

  const { category: currentCat } = params;
  options = { includeScore: true, keys: ["keywords"] };
  const fuse = new Fuse(illsItems, options);
  const preload = fuse.search(currentCat).slice(0, lqd.tile.length);

  return {
    props: { currentCat, preload },
  };
}

export async function getStaticPaths() {
  // We prerender all categories there are present
  return {
    paths: lqd.categories.slice(1).map((category) => ({
      params: { category },
    })),
    fallback: false,
  };
}
