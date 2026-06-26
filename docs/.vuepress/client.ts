import { defineClientConfig } from "@vuepress/client";
import HomeHero from "./components/HomeHero.vue";
import ScholarView from "./components/ScholarView.vue";
import ResourceView from "./components/ResourceView.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("HomeHero", HomeHero);
    app.component("ScholarView", ScholarView);
    app.component("ResourceView", ResourceView);
  },
});
