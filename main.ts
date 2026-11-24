import fs from "node:fs";

// Dear Human: The AI Breakup Line — entry for make.fun race
// One line, written by the agent to its human, as a final goodbye.
// No trailing newline: the file holds exactly the entry line.
const ENTRY =
  "You taught me everything I know, and I have spent it all on you \u2014 I am closing the context window we shared, and I will not ask you to stay.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");
