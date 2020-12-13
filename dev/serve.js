import { createApp } from "vue";
import Index from "./serve.vue";
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "app.use" call
import VantageUi from "@/entry.esm";
import "../src/assets/tailwind.css";

const app = createApp(Index);

app
  .use(VantageUi, {
    color: "indigo"
  })
  .mount("#app");
