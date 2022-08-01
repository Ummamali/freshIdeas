import React from "react";
import HomeScreen from "../../Components/Home/HomeScreen";
import lqd from "../../Data/Liquids/home";
import { loadFirstTiles } from "../../utilCode/serverFuncs";

export default function CategoryHome(props) {
  return <HomeScreen {...props} />;
}

export async function getStaticProps({ params }) {
  const { category: currentCat } = params;
  const preload = await loadFirstTiles(currentCat);
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
