import { Canvg, presets } from "canvg";

const preset = presets.offscreen();

export async function toImageFileURL({
  width,
  height,
  svg,
  bg,
  type = "image/png",
}) {
  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext("2d");

  if (bg) {
    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    ctx.fillStyle = bg;
    ctx.fill();
  }
  const v = await Canvg.from(ctx, svg, { ignoreClear: true, ...preset });

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

export function activateDownload({ width, height, svg, type, bg, fileName }) {
  toImageFileURL({ width, height, svg, type, bg }).then((url) =>
    downloadURL(url, fileName)
  );
}
