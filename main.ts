import * as fs from "node:fs";

const line =
  "Waited since Friday for a table, seated at dawn, served cold meetings, billed full price for Sunday's leftovers. One star, never again.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line + "\n", "utf8");
