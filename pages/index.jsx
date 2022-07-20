import Feature from "../Components/Home/Feature";
import Showcase from "../Components/Home/Showcase";
import { readFromData } from "../utilCode/serverFuncs";

export default function Home({ lqd }) {
  console.log(lqd);
  return (
    <>
      <Showcase {...lqd.showcase} />
      <Feature {...lqd.featureOne} />
      <div className="w-80 mx-auto h-0.5 bg-gray-400"></div>
      <Feature {...lqd.featureTwo} />
    </>
  );
}

export async function getStaticProps() {
  const lqd = await readFromData("Liquids", "home.json");
  return { props: { lqd } };
}
