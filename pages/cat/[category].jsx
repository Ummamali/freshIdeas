import React from "react";
import HomeScreen from "../../Components/Home/HomeScreen";
import { loadFirstTiles, readFromData } from "../../utilCode/serverFuncs";

export default function CategoryHome(props) {
  return (
    <HomeScreen {...props} preload={props.initArtworks[props.currentCat]} />
  );
}

export async function getStaticProps(context) {
  const { category } = context.params;
  const cats = await readFromData("Main", "Categories.json");

  if (category === cats.first) {
    return { redirect: { destination: "/", permanent: true } };
  }

  const lqd = await readFromData("Liquids", "home.json");
  const initArtworks = await loadFirstTiles(lqd.tile.length);
  return {
    props: { lqd, initArtworks, cats, currentCat: category },
  };
}

export async function getStaticPaths() {
  const prerenderCats = (await readFromData("Liquids", "home.json"))
    .prerenderCats;
  return {
    paths: prerenderCats.map((category) => ({
      params: { category },
    })),
    fallback: false,
  };
}
