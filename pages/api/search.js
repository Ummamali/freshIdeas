import { getMainClient } from "../../utilCode/serverFuncs";

export default async function handler(req, res) {
  let { q = null, pgIdx = null } = req.query;
  if (q === null || pgIdx === null) {
    res.status(400).json({ msg: "Not enough parameters" });
    return;
  }
  const likeQ = new RegExp(`${q}`, "i");
  pgIdx = parseInt(pgIdx);
  const c = getMainClient();
  try {
    const db = c.db("mainDatabase");
    const ills = db.collection("illustrations");
    const n = process.env.nPerPage;

    const result = await ills
      .find({
        $or: [{ keywords: { $regex: likeQ } }, { title: { $regex: likeQ } }],
      })
      .skip(n * pgIdx)
      .limit(n)
      .toArray();
    res.status(200).json({ result });
  } catch (err) {
    res.status(200).json({ msg: "Execution Failed" });
  } finally {
    await c.close();
  }
}
