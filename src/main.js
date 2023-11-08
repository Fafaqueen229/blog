import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

// Importer les icônes spécifiques de FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faPenNib, faTags, faSignInAlt, faUserPlus, faSearch, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Ajouter les icônes à la bibliothèque
library.add(faHome, faPenNib, faTags, faSignInAlt, faUserPlus, faSearch, faChartLine);

const app = createApp(App);

// Utiliser FontAwesome
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount('#app');
