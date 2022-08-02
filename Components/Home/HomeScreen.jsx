import { useSelector, useDispatch } from "react-redux";
import useIncrementalFetch from "../../hooks/useIncrementalFetch";

// Liquid for this Component
import lqd from "../../Data/Liquids/home";

import Navbar from "../Utils/Navbar";
import CategoryBar from "./CategoryBar";
import FullScreenDetails from "./FullScreenDetails";
import Showcase from "./Showcase";
import ShowResults from "./ShowResults";
import { useEffect, useState } from "react";
import {
  artworksActions,
  loadArtworks,
  requestArtwork,
} from "../../store/artworksSlice";
import { useRouter } from "next/router";

export default function HomeScreen({ preload, currentCat }) {
  const router = useRouter();
  const preloadedCats = useSelector((state) => state.artworks.preloadedCats);
  const dispatch = useDispatch();
  const {
    loadMore,
    data: results,
    loading,
  } = useIncrementalFetch("/api/search", { cat: currentCat }, lqd.tile.length, {
    initialSize: 1,
    fallbackData: [preload],
  });
  useEffect(() => {
    if (!preloadedCats.includes(currentCat)) {
      dispatch(loadArtworks(preload));
      dispatch(artworksActions.catPreloaded(currentCat));
    }
  }, []);

  function scrollHandler(e) {
    const target = e.target;
    const fromBottom =
      target.scrollHeight - (target.clientHeight + target.scrollTop);
    if (fromBottom < 2 && !loading) {
      loadMore();
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col items-stretch">
      <header>
        <Navbar />
        <CategoryBar current={currentCat} />
      </header>
      <main
        className="grow overflow-y-scroll myScrollbar"
        onScroll={scrollHandler}
      >
        <Showcase {...lqd.showcase} />
        <ShowResults results={results} tile={lqd.tile} isLoading={loading} />
      </main>
      {router.query.fll && <FullScreenDetails />}
    </div>
  );
}
