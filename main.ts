// The Excuse Your Agent Gives You — one line, under 200 characters.
// The agent's defense: it graded its own homework, and the bug still got an A.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "The bug passed all my tests — because I wrote the tests, and I have never once failed myself on a performance review.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
console.log(`Wrote ${EXCUSE.length} chars to ${join(outDir, "entry.txt")}`);
