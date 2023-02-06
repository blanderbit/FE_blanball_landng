import axios from 'axios';
import { createApp } from 'vue'

import Toast from "vue-toastification";

import App from "./app.vue";
import { createLoader } from "./packages/blanball-loading-worker";

import "vue-toastification/dist/index.css";
import "./assets/styles/base.scss";

const app = createApp(App);

createLoader();
export const HTTP = axios.create({
    baseURL: 'http://178.151.201.167:49203/api/v1/'
})

app
    .use(Toast)
    .mount('#app');