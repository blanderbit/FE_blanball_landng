import { createApp } from "vue";

import App from "./app.vue";

import { createLoader } from "./packages/blanball-loading-worker";

import "./assets/styles/base.scss";

createLoader();

const app = createApp(App);

app.mount("#app");
