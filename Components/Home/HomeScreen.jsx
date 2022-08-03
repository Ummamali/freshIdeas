import { useSelector, useDispatch } from "react-redux";
import useSearch from "../../hooks/useNaturalSearch";

// Liquid for this Component
import lqd from "../../Data/Liquids/home";

import Navbar from "../Utils/Navbar";
import CategoryBar from "./CategoryBar";
import FullScreenDetails from "./FullScreenDetails";
import { useEffect, useState } from "react";
import { artworksActions, loadArtworks } from "../../store/artworksSlice";
import { useRouter } from "next/router";
import NaturalResults from "./NaturalResults";
import QueryResults from "./QueryResults";

export default function HomeScreen({ preload, currentCat }) {
  const router = useRouter();
  const { q = "" } = router.query;
  const preloadedCats = useSelector((state) => state.artworks.preloadedCats);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!preloadedCats.includes(currentCat)) {
      dispatch(loadArtworks(preload.map((i) => i.item)));
      dispatch(artworksActions.catPreloaded(currentCat));
    }
  }, []);

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
