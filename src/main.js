import { createAuth0 } from '@auth0/auth0-vue';
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
const app = createApp(App);

app.use(
  createAuth0({
    domain: ,
    client_id: ,
    redirect_uri: window.location.origin
  })
);

app.mount('#app');
