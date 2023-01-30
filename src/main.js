import axios from 'axios';
import { createApp } from 'vue'

import Toast from "vue-toastification";

import App from "./app.vue";

import "vue-toastification/dist/index.css";

const app = createApp(App);

export const HTTP = axios.create({
    baseURL: 'http://178.151.201.167:49203/api/v1/'
})

app
    .use(Toast)
    .mount('#app');