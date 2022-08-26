import { Canvg, presets } from "canvg";

const preset = presets.offscreen();

export async function toImageFileURL({
  width,
  height,
  svg,
  type = "image/png",
}) {
  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext("2d");
  const v = await Canvg.from(ctx, svg, preset);

  // Render only first frame, ignoring animations and mouse.
  await v.render();

  console.log(type);
  const blob = await canvas.convertToBlob({ type });
  const pngUrl = URL.createObjectURL(blob);

  return pngUrl;
}

export function downloadURL(dataUrl, filename) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename;
  link.click();
}

export function activateDownload({ width, height, svg, type, fileName }) {
  toImageFileURL({ width, height, svg, type }).then((url) =>
    downloadURL(url, fileName)
  );
}
