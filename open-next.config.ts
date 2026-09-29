import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // `build` script is `opennextjs-cloudflare build`. Without this, OpenNext
  // would run the packager build command (`pnpm build`) and recurse forever.
  buildCommand: "next build",
});
