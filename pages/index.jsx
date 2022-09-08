import { useRouter } from "next/router";
import { useEffect } from "react";
import HomeScreen from "../Components/Home/HomeScreen";
import SWRGlobalConfigs from "../Components/Utils/SWRGlobalConfigs";
import lqd from "../Data/Liquids/home";
import { caltulateArtworks, getFreshIlls } from "../utilCode/serverFuncs";

export default function Home(props) {
  return (
    <SWRGlobalConfigs>
      <HomeScreen {...props} />
    </SWRGlobalConfigs>
  );
}

export async function getStaticProps() {
  const currentCat = lqd.categories[0];
  const preload = await getFreshIlls(0, currentCat);
  const artworkCount = await caltulateArtworks();
  return {
    props: { preload, currentCat, artworkCount },
  };
}
