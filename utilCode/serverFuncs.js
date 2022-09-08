import fs from "fs/promises";
import fsSync from "fs";
import path from "path";
import lqd from "../Data/Liquids/home";
import Fuse from "fuse.js";
import { MongoClient } from "mongodb";

export async function readFromData(...filePath) {
  const fullPath = path.join(process.cwd(), "Data", ...filePath);
  const fileContent = await fs.readFile(fullPath, "utf-8");
  return await JSON.parse(fileContent);
}

export function readFromDataSync(...filePath) {
  const fullPath = path.join(process.cwd(), "Data", ...filePath);
  const fileContent = fsSync.readFileSync(fullPath, "utf-8");
  return JSON.parse(fileContent);
}

export async function loadFirstTiles(category = "") {
  const tileSize = lqd.tile.length;
  const cats = await readFromData("Main", "Categories.json");
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

export function filterCategory(category) {
  const ills = readFromDataSync("Main", "Illustrations.json");

  const illsItems = Array.from(Object.entries(ills)).map((item) => {
    const [id, obj] = item;
    return { id, ...obj };
  });

  const fuse = new Fuse(illsItems, { indludeScore: true, keys: ["keywords"] });

  return fuse.search(category);
}

export async function caltulateArtworks() {
  const c = getMainClient();
  try {
    const db = c.db("mainDatabase");
    const ills = db.collection("illustrations");
    return await ills.countDocuments();
  } catch (ex) {
    throw ex;
  } finally {
    c.close();
  }
}

export function getMainClient() {
  const uri = process.env.mongoUri;
  const client = new MongoClient(uri);
  return client;
}

export async function getFreshIlls(pgIdx, cat) {
  const c = getMainClient();
  const query = cat === "Fresh" ? null : { keywords: cat };
  try {
    const db = c.db("mainDatabase");
    const ills = db.collection("illustrations");
    const n = process.env.nPerPage;
    return (
      await ills
        .find(query)
        .sort({ $natural: -1 })
        .skip(pgIdx * n)
        .limit(n)
        .toArray()
    ).map((item) => ({ ...item, _id: item._id.toString() }));
  } catch (ex) {
    throw ex;
  } finally {
    c.close();
  }
}
