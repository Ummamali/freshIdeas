import React, { useEffect, useRef, useState } from "react";
import styles from "./ShowResults.module.css";
import LoadingTile from "./LoadingTile";
import SingleResult from "./SingleResult";
import Icon from "../Utils/Icon";

export const configs = {
  palleteLength: 2,
  imgPadding: "1rem", // default space around the image
};

export default function ShowResults({ results, tile, isLoading, setDetails }) {
  const renderTiles = [];
  const resultsIttr = results ? results : [];
  for (const singlePage of resultsIttr) {
    const thisItems = singlePage.map((item, i) => (
      <SingleResult
        {...item}
        key={item.id}
        id={item.id}
        gridArea={tile[i]}
        setDetails={setDetails}
      />
    ));
    if (thisItems.length > 0) {
      renderTiles.push(<div className={styles.singleTile}>{thisItems}</div>);
    }
  }

  if (isLoading) {
    renderTiles.push(<LoadingTile tile={tile} />);
  }

  const emptyMsg = (
    <p className="font-light text-black/80 flex items-center justify-center space-x-2">
      <Icon name="sad_face" className="opacity-80" />
      <span className="text-sm">No Illustrations found!</span>
    </p>
  );

  return (
    <div className="max-w-container mx-4 my-2 sm:mx-6 container:mx-auto">
      {renderTiles.length > 0 ? renderTiles : emptyMsg}
    </div>
  );
}
