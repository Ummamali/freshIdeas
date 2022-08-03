import { readFromDataSync } from "../../utilCode/serverFuncs";
import Fuse from "fuse.js";

const ills = readFromDataSync("Main", "Illustrations.json");

const illsItems = Array.from(Object.entries(ills)).map((item) => {
  const [id, obj] = item;
  return { id, ...obj };
});

export default async function handler(req, res) {
  let { q = null, searchFrom = null, cat = null, count = null } = req.query;
  if (!q || !searchFrom || !count) {
    res.status(400).json({ msg: "All params are required" });
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  q = cat !== null ? `${q} ${cat}` : q;
  searchFrom = parseInt(searchFrom);
  count = parseInt(count);

  const fuse = new Fuse(illsItems.slice(searchFrom), {
    includeScore: true,
    keys: ["title", "keywords"],
  });

  const result = fuse.search(`\`"${q}"`, { limit: count });

  res.status(200).json({ result });
}
