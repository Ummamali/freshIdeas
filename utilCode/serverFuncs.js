import fs from "fs/promises";
import path from "path";

export async function readFromData(...filePath) {
  const fullPath = path.join(process.cwd(), "Data", ...filePath);
  const fileContent = await fs.readFile(fullPath, "utf-8");
  return await JSON.parse(fileContent);
}

export async function loadFirstTiles(tileSize, category = "") {
  const cats = (await readFromData("Main", "Categories.json")).items;
  const illustrations = await readFromData("Main", "Illustrations.json");
  const mapper = (id) => ({ ...illustrations[id], id });
  if (category !== "") {
    return cats[category].slice(0, tileSize).map(mapper);
  } else {
    const mappedCats = {};
    for (const [catName, catItems] of Object.entries(cats)) {
      mappedCats[catName] = catItems.slice(0, tileSize).map(mapper);
    }
    return mappedCats;
  }
}
