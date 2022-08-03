import React, { useEffect, useRef, useState } from "react";
import styles from "./ShowResults.module.css";
import LoadingTile from "./LoadingTile";
import SingleResult from "./SingleResult";
import Icon from "../Utils/Icon";
import lqd from "../../Data/Liquids/home";

export const configs = {
  palleteLength: 2,
  imgPadding: "1rem", // default space around the image
};

export default function ShowResults({ results, isLoading }) {
  const tile = lqd.tile;
  const renderTiles = [];
  for (const [i, singlePage] of results.entries()) {
    const thisItems = singlePage.map((rslt, i) => (
      <SingleResult artwork={rslt.item} key={rslt.item.id} gridArea={tile[i]} />
    ));
    if (thisItems.length > 0) {
      renderTiles.push(
        <div className={styles.singleTile} key={i}>
          {thisItems}
        </div>
      );
    }
  }

  if (isLoading) {
    renderTiles.push(<LoadingTile tile={tile} key="loadingTile" />);
  }

  const emptyMsg = (
    <div className="font-light text-black/80 flex items-center justify-center space-x-2">
      <Icon name="sad_face" className="opacity-80" />
      <span className="text-sm">No Illustrations found!</span>
    </div>
  );

  return (
    <div className="max-w-container mx-4 my-2 sm:mx-6 container:mx-auto">
      {renderTiles.length > 0 ? renderTiles : emptyMsg}
    </div>
  );
}
