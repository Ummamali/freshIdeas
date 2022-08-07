import { useSelector, useDispatch } from "react-redux";
import useSearch from "../../hooks/useNaturalSearch";
import { useRouter } from "next/router";

// Liquid for this Component
import lqd from "../../Data/Liquids/home";

import Navbar from "../Utils/Navbar";
import CategoryBar from "./Headers/CategoryBar";
import NaturalResults from "./Results/NaturalResults";
import QueryResults from "./Results/QueryResults";
import FullScreenDetails from "./FullScreenDetails/FullScreenDetails";

export default function HomeScreen({ preload, currentCat }) {
  const router = useRouter();
  const { q = "" } = router.query;
  return (
    <div className="w-screen h-screen flex flex-col items-stretch">
      <header>
        <Navbar />
        <CategoryBar current={currentCat} />
      </header>
      {q !== "" ? (
        <QueryResults preload={preload} category={currentCat} />
      ) : (
        <NaturalResults preload={preload} category={currentCat} />
      )}
      {router.query.fll && <FullScreenDetails />}
    </div>
  );
}
