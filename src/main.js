import { createApp } from 'vue'
import App from './app'

const app = createApp(App);

export const HTTP = axios.create({
    baseURL: 'http://178.151.201.167:49203/api/v1/'
})

app.mount('#app');