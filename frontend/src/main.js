// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Adjust the path if necessary
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);
app.use(router); // Make sure to use the router
app.mount('#app');
