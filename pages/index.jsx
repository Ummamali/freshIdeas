import HomeScreen from "../Components/Home/HomeScreen";
import { loadFirstTiles, readFromData } from "../utilCode/serverFuncs";

export default function Home(props) {
  return (
    <HomeScreen {...props} preload={props.initArtworks[props.currentCat]} />
  );
}

export async function getStaticProps() {
  const lqd = await readFromData("Liquids", "home.json");
  const cats = await readFromData("Main", "Categories.json");
  const initArtworks = await loadFirstTiles(lqd.tile.length);
  return {
    props: { lqd, initArtworks, cats, currentCat: cats.first },
  };
}
