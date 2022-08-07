import { readFromDataSync } from "../../utilCode/serverFuncs";

export default function handler(req, res) {
  const ills = readFromDataSync("Main", "Illustrations.json");
  let artwork = ills[req.query.id];
  if (!artwork) {
    res.status(404).json({ msg: "Not found" });
  } else {
    artwork = { ...artwork, id: req.query.id };
    res.status(200).json({ result: [{ item: artwork }] });
  }
}
