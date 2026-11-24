import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My cat knocked my laptop off the table, then sat where it was and stared at me like I'd been fired.";

const targets = [
  "/output/entry.txt",
  "/home/hatch/workspace/bugbounty/makefun/local-grade/cat-joke/out/entry.txt",
];

for (const path of targets) {
  const dir = path.slice(0, path.lastIndexOf("/"));
  mkdirSync(dir, { recursive: true });
  writeFileSync(path, joke, "utf8");
  console.log(`wrote ${joke.length} characters to ${path}`);
}
