import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import 'jquery/src/jquery';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import 'bootstrap-icons/font/bootstrap-icons.css'
// createApp(App).mount('#app')

const app = createApp(App);
app.use(router)
app.mount('#app');
