import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // This project intentionally lives beside another JavaScript project. Keep
  // tracing scoped here rather than letting Next infer the parent workspace.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
