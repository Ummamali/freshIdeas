import React from "react";
import FrostSection from "./FrostSection";
import PageSection from "./PageSection";
import WallSection from "./WallSection";

export default function PreviewSection({ idx, artwork }) {
  if (idx === 0) {
    return (
      <>
        <FrostSection artwork={artwork} />
        <WallSection artwork={artwork} />
      </>
    );
  } else if (idx === 1) {
    return (
      <>
        <PageSection artwork={artwork} pageType="light" />
        <PageSection artwork={artwork} pageType="dark" />
      </>
    );
  }
}
