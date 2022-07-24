export function getFilename(fileSrc) {
  const fileSegments = fileSrc.split("/");
  return fileSegments[fileSegments.length - 1];
}

export function getFileType(filesrc) {
  return filesrc.split(".").at(-1);
}

export function titleIt(text) {
  const arr = text.split(" ");

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}

export function copyToClipboard(text) {
  navigator.clipboard.writeText();
}
