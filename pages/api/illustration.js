import { readFromData } from "../../utilCode/serverFuncs";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // await new Promise((res) => setTimeout(res, 5000));
    const illustrations = await readFromData("Main", "Illustrations.json");
    const cats = await readFromData("Main", "Categories.json");
    const ills = cats.items[req.query.cat].slice(
      req.query.start,
      req.query.start + req.query.count
    );
    const illsHydr = ills.map((item) => ({
      ...illustrations[item],
      id: item,
    }));
    res.status(200).json(illsHydr);
  }
}
