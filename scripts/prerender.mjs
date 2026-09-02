import { writeFileSync, mkdirSync, copyFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outputDir = join(root, ".output", "public");

async function prerender() {
  const serverEntry = await import(join(root, ".output", "server", "index.mjs"));
  const handler = serverEntry.default?.fetch ?? serverEntry.fetch;

  if (!handler) {
    console.error("Could not find fetch handler in server entry");
    process.exit(1);
  }

  const request = new Request("http://localhost/academy/", { method: "GET" });
  const response = await handler(request, {}, { waitUntil: () => {} });
  const html = await response.text();

  writeFileSync(join(outputDir, "index.html"), html, "utf-8");
  console.log(`Pre-rendered / -> index.html (${response.status})`);

  copyFileSync(join(outputDir, "index.html"), join(outputDir, "404.html"));
  console.log("Created 404.html fallback for SPA routing");
}

prerender().catch((err) => {
  console.error("Pre-render failed:", err);
  process.exit(1);
});
