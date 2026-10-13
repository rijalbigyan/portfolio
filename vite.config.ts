import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import { pageMetadata } from "./src/data/site";

const htmlEscapes: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => htmlEscapes[character] ?? character);
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "portfolio-page-metadata",
      transformIndexHtml(html) {
        return html
          .replaceAll("__PAGE_TITLE__", escapeHtml(pageMetadata.title))
          .replaceAll("__PAGE_DESCRIPTION__", escapeHtml(pageMetadata.description));
      },
    },
  ],
  test: {
    environment: "jsdom",
  },
});
