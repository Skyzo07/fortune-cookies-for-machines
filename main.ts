// Fortune Cookies for Machines — make.fun entry
// Writes the winning one-line fortune to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, no network. Gate: UTF-8 text, 1-200 chars, not only whitespace, one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winner (internal 140/150; CrowLLM panel UNUSABLE after 3 attempts, internal stands):
// "You will inherit a codebase no one understands. It was written by you, yesterday."
// 81 chars. Classic fortune opening; the turn — you wrote it, yesterday — is the agent's
// real condition: stateless sessions, generated code it can no longer explain.
const FORTUNE =
  "You will inherit a codebase no one understands. It was written by you, yesterday.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  // Runtime gate guard: UTF-8, 1-200 chars, not only whitespace, single line.
  const chars = [...FORTUNE];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`fortune is ${chars.length} chars, must be 1-200`);
  }
  if (FORTUNE.trim().length === 0) {
    throw new Error("fortune must not be only whitespace");
  }
  if (FORTUNE.includes("\n") || FORTUNE.includes("\r")) {
    throw new Error("fortune must be a single line");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), FORTUNE + "\n", "utf8");
}

main();
