import { cpSync, existsSync } from "node:fs";
import { join } from "node:path";

const distDir = join(process.cwd(), "dist");
const indexFile = join(distDir, "index.html");
const notFoundFile = join(distDir, "404.html");

if (!existsSync(indexFile)) {
  console.error("Build output not found: dist/index.html");
  process.exit(1);
}

cpSync(indexFile, notFoundFile, { force: true });
console.log("Copied dist/index.html -> dist/404.html");
