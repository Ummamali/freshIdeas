import { readFromData, readFromDataSync } from "../../utilCode/serverFuncs";
import Fuse from "fuse.js";

const ills = readFromDataSync("Main", "Illustrations.json");

const illsItems = Array.from(Object.entries(ills)).map((item) => {
  const [id, obj] = item;
  return { id, ...obj };
});

const categoryCache = new Map();

export default function (req, res) {
  if (req.method === "GET") {
    let { q = null, cat = null, start = 0, count = null } = req.query;
    start = parseInt(start);
    const sliceEnd = count !== null ? parseInt(count) + start : undefined;
    let options;
    if (cat !== null) {
      if (typeof categoryCache.get(cat) !== "undefined") {
        res
          .status(200)
          .json({ result: categoryCache.get(cat).slice(start, sliceEnd) });
      } else {
        options = { includeScore: true, keys: ["keywords"] };
        const fuse = new Fuse(illsItems, options);
        const result = fuse.search(cat);
        categoryCache.set(cat, result);
        res.status(200).json({
          result: result.slice(start, sliceEnd),
        });
      }
    } else if (q !== null) {
      options = { includeScore: true, keys: ["keywords", "title"] };
      const fuse = new Fuse(illsItems.slice(start, sliceEnd), options);
      const result = fuse.search(q);
      res.status(200).json({ result });
    }
  }
}
