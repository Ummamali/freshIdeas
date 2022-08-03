import { filterCategory } from "../../utilCode/serverFuncs";

const cache = new Map();

export default function handler(req, res) {
  let { cat = null, start = null, count = null } = req.query;
  if (!cat || !start || !count) {
    res.status(400).json({ msg: "All Parameters are required" });
    return;
  }
  start = parseInt(start);
  count = parseInt(count);
  let result = cache.get(cat);
  if (!result) {
    result = filterCategory(cat);
    cache.set(cat, result);
  }
  result = result.slice(start, start + count);
  res.status(200).json({ result });
}
