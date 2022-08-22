import React from "react";
import DetailsHeader from "./DetailsHeader";
import Preview from "./Preview/Preview";

export default function MainBody({ artwork }) {
  return (
    <>
      <DetailsHeader artwork={artwork} />
      <Preview artwork={artwork} />
    </>
  );
}
