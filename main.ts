import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: exactly two lines — a confession, then a resolve.
// Line 1 owns one specific, human-scale mistake.
// Line 2 says what was learned and names the changed behaviour.
const ENTRY =
  "I am sorry I watered the plastic fern on the windowsill every day while the basil beside it wilted.\n" +
  "I learned I was watering by sight alone, so now I check the soil before I pour.";

// Gate: the brief requires UTF-8 text of 1 to 400 characters, not only
// white space, in exactly two lines (one confession, one resolve).
// Refuse to write anything that violates that gate.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 400) {
  throw new Error(`Entry must be 1-400 characters, got ${charCount}.`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only white space.");
}
const lines = ENTRY.split("\n");
if (lines.length !== 2) {
  throw new Error(`Entry must have exactly 2 lines, got ${lines.length}.`);
}
for (const line of lines) {
  if (line.length === 0) {
    throw new Error("Entry lines must not be empty.");
  }
  if (line !== line.trim()) {
    throw new Error("Entry lines must not have leading or trailing whitespace.");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
