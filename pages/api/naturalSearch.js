import { getFreshIlls } from "../../utilCode/serverFuncs";

export default async function handler(req, res) {
  let { cat = null, pgIdx = null } = req.query;
  if (cat === null || pgIdx === null) {
    res.status(400).json({ msg: "All Parameters are required" });
    return;
  }
  pgIdx = parseInt(pgIdx);
  try {
    const result = await getFreshIlls(pgIdx, cat);
    res.status(200).json({ result: result });
  } catch (ex) {
    res.status(200).json({ msg: "Execution Failed due to some error" });
  }
}
