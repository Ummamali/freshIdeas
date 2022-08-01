import Feature from "../Components/About/Feature";
import Showcase from "../Components/About/Showcase";
import Navbar from "../Components/Utils/Navbar";

import lqd from "../Data/Liquids/about";

export default function About({ lqd }) {
  return (
    <>
      <Navbar />
      <Showcase {...lqd.showcase} />
      <Feature {...lqd.featureOne} />
      <div className="w-80 mx-auto h-0.5 bg-gray-400"></div>
      <Feature {...lqd.featureTwo} />
      <div className="w-80 mx-auto h-0.5 bg-gray-400"></div>
      <Feature {...lqd.featureThree} />
    </>
  );
}

export async function getStaticProps() {
  return { props: { lqd } };
}
