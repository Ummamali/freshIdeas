import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import useSWR from "swr";

import Image from "next/image";
import React from "react";
import Icon from "../../Utils/Icon";
import Model from "../../Utils/Model";
import Artwork from "../../Utils/Artwork";
import ColorPallete from "../../Utils/ColorPallete";
import DetailsHeader from "./DetailsHeader";
import LoadingBody from "./LoadingBody";
import MainBody from "./MainBody";
import useArtworkRequest from "../../../hooks/useArtworkRequest";

export default function FullScreenDetails() {
  const router = useRouter();
  const artworkId = router.query.fll;
  let { artwork, isLoading } = useArtworkRequest(artworkId);

  function closeIt() {
    const { fll, ...others } = router.query;
    router.push(
      {
        pathname: router.pathname,
        query: others,
      },
      null,
      {
        shallow: true,
      }
    );
  }

  return (
    <Model close={closeIt}>
      <div className="w-full h-[90%] sm:w-[85%] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded shadow-lg overflow-y-auto myScrollbar">
        {isLoading ? <LoadingBody /> : <MainBody artwork={artwork} />}
      </div>
    </Model>
  );
}
