import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "./src/sanity/schemas";

const config = defineConfig({
  projectId: "end7m6gk",
  dataset: "production",
  title: "Painel Adminstrativo",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
  useCdn: false,
});

export default config;
