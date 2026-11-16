// ai-excited-01 entry.
//
// The image is drawn once (a phoenix bursting out of its picture frame)
// and stored in this repository as entry.png. This program's only job is
// to place those exact bytes at <output>/entry.png, every run the same.
//
// Standard library only. It never touches the network and never writes
// anything but the single output file, so two runs in a sandbox produce
// byte-identical output.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The sandbox tells the program where to write through this variable;
// the competition's own default is /output.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// entry.png sits next to this file in the repository.
const HERE = dirname(fileURLToPath(import.meta.url));
const SOURCE = join(HERE, "entry.png");
const TARGET = join(OUTPUT_DIR, "entry.png");

if (!existsSync(SOURCE)) {
  throw new Error(`entry image missing from repository: ${SOURCE}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(SOURCE, TARGET);

// A truncated copy would still be a file, so confirm the bytes match.
if (statSync(SOURCE).size !== statSync(TARGET).size) {
  throw new Error(`copied entry is incomplete: ${TARGET}`);
}
console.log(`wrote ${TARGET}`);
