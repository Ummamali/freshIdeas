import React from "react";
import HomeScreen from "../../Components/Home/HomeScreen";
import SWRGlobalConfigs from "../../Components/Utils/SWRGlobalConfigs";
import lqd from "../../Data/Liquids/home";
import { filterCategory, caltulateArtworks } from "../../utilCode/serverFuncs";

export default function CategoryHome(props) {
  return (
    <SWRGlobalConfigs>
      <HomeScreen {...props} />
    </SWRGlobalConfigs>
  );
}

export async function getStaticProps({ params }) {
  const { category: currentCat } = params;
  const preload = filterCategory(currentCat);
  const artworkCount = caltulateArtworks();
  return {
    props: { currentCat, preload, artworkCount },
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
