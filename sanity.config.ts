import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "./src/sanity/schemas";

const config = defineConfig({
  projectId: "6ofi8cxt",
  dataset: "production",
  title: "Painel Adminstrativo",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
