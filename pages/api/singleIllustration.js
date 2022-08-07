import { readFromDataSync } from "../../utilCode/serverFuncs";

export default function handler(req, res) {
  const ills = readFromDataSync("Main", "Illustrations.json");
  res.status(200).json({ result: [{ item: ills[req.query.id] }] });
}
