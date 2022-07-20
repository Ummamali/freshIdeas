import fs from "fs/promises";
import path from "path";

export async function readFromData(...filePath) {
  const fullPath = path.join(process.cwd(), "Data", ...filePath);
  const fileContent = await fs.readFile(fullPath, "utf-8");
  return await JSON.parse(fileContent);
}
