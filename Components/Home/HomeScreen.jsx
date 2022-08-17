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
import { globalActions } from "../../store/globalSlice";
import { useRef } from "react";

export default function HomeScreen({ preload, currentCat }) {
  const queryRef = useRef();
  const naturalRef = useRef();
  const router = useRouter();
  const { q = "" } = router.query;

  function scrollHandler(e) {
    const target = e.target;
    const targetRef = q !== "" ? queryRef : naturalRef;
    const fromBottom =
      target.scrollHeight - (target.clientHeight + target.scrollTop);
    if (fromBottom < 2 && !targetRef.current.isLoading) {
      targetRef.current.loadMore();
    }
  }
  return (
    <div
      className="bg-categoryBar w-screen h-screen overflow-y-auto myScrollbar"
      onScroll={scrollHandler}
    >
      <header className="sticky top-0 z-10">
        <Navbar />
        <CategoryBar current={currentCat} />
      </header>
      {q !== "" ? (
        <QueryResults preload={preload} category={currentCat} ref={queryRef} />
      ) : (
        <NaturalResults
          preload={preload}
          category={currentCat}
          ref={naturalRef}
        />
      )}
      {router.query.fll && <FullScreenDetails />}
    </div>
  );
}
