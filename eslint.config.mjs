import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Script JS d'origine, conservé comme asset statique de référence (non maintenu).
    "public/assets/**",
    // Archive du site original (HTML/CSS/JS bruts capturés).
    "_archive-site-original/**",
  ]),
]);

export default eslintConfig;
