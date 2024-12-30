/** @type {import('next').NextConfig} */
import moduleAlias from "module-alias";
moduleAlias.addAlias("punycode", "punycode/");
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
