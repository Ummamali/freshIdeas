import { ObjectId } from "mongodb";
import { getMainClient } from "../../utilCode/serverFuncs";

export default async function handler(req, res) {
  const { id } = req.query;
  const c = getMainClient();
  try {
    const db = c.db("mainDatabase");
    const ills = db.collection("illustrations");
    const result = await ills.findOne({ _id: new ObjectId(id) });
    res.status(200).json({ result });
  } finally {
    c.close();
  }
}
