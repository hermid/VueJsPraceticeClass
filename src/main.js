import { createApp } from "vue";

// import font-awesome
import "@fortawesome/fontawesome-free/css/all.css";
// import bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";

const app = createApp(App);
app.use(VueAxios, axios);
app.mount("#app");
