import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const isGitHubActions = !!process.env.GITHUB_ACTIONS;
const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : undefined;
const base = isGitHubActions && repoName ? `/${repoName}/` : "/";

export default defineConfig({
  base,
  plugins: [react()],
});
