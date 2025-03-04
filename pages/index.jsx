import { useRouter } from "next/router";
import { useEffect } from "react";
import HomeScreen from "../Components/Home/HomeScreen";
import SWRGlobalConfigs from "../Components/Utils/SWRGlobalConfigs";
import lqd from "../Data/Liquids/home";
import { filterCategory, caltulateArtworks } from "../utilCode/serverFuncs";
import Color from "color";

export default function Home(props) {
  return (
    <SWRGlobalConfigs>
      <HomeScreen {...props} />
    </SWRGlobalConfigs>
  );
}

export async function getStaticProps() {
  const currentCat = lqd.categories[0];
  const preload = filterCategory(currentCat).slice(0, lqd.tile.length);
  const artworkCount = caltulateArtworks();
  return {
    props: { preload, currentCat, artworkCount },
  };
}
