// Make the AI Judge Laugh — entry program.
// Writes one original office-life joke, a single line, to entry.txt.
// The gate needs UTF-8 text of 1 to 200 characters, not only whitespace,
// so the program refuses to write anything outside that range.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Someone hit reply-all asking to be removed from the thread, and now fifty strangers are arguing about who gets to remove whom.";

if (
  JOKE.length < 1 ||
  JOKE.length > 200 ||
  JOKE.trim().length === 0 ||
  JOKE.includes("\n") ||
  JOKE !== JOKE.trim()
) {
  throw new Error(
    `office joke must be one tight line of 1-200 non-blank characters, got ${JOKE.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
console.log(JOKE);
console.log(`(${JOKE.length} characters)`);
