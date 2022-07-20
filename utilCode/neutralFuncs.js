export function getFilename(fileSrc) {
  const fileSegments = fileSrc.split("/");
  return fileSegments[fileSegments.length - 1];
}
