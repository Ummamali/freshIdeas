import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { mutate } from "swr";
import useIncrementalFetch from "../../hooks/useIncrementalFetch";

// Liquid for this Component
import lqd from "../../Data/Liquids/home";

import Navbar from "../Utils/Navbar";
import CategoryBar from "./CategoryBar";
import FullScreenDetails from "./FullScreenDetails";
import Showcase from "./Showcase";
import ShowResults from "./ShowResults";

export default function HomeScreen({ preload, currentCat }) {
  const [details, setDetails] = useState(null);

  const router = useRouter();

  const {
    loadMore,
    data: results,
    loading,
  } = useIncrementalFetch(
    "/api/illustration",
    { cat: currentCat },
    lqd.tile.length,
    {
      initialSize: 1,
      fallbackData: [preload],
    }
  );

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
        <ShowResults
          results={results}
          tile={lqd.tile}
          isLoading={loading}
          setDetails={setDetails}
        />
      </main>
      {details && (
        <FullScreenDetails
          close={setDetails.bind(null, null)}
          artwork={details}
        />
      )}
    </div>
  );
}
