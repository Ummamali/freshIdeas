import { useRouter } from "next/router";
import { useEffect } from "react";
import HomeScreen from "../Components/Home/HomeScreen";
import lqd from "../Data/Liquids/home";
import { loadFirstTiles } from "../utilCode/serverFuncs";

export default function Home(props) {
  return <HomeScreen {...props} />;
}

export async function getStaticProps() {
  const currentCat = lqd.categories[0];
  const preload = await loadFirstTiles(currentCat);
  return {
    props: { preload, currentCat },
  };
}
