import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/homePage.vue'
import About from './views/aboutPage.vue'
import Portfolio from './views/portfolioPage.vue'
import Contact from './views/contactPage.vue'
import '@fortawesome/fontawesome-free/css/all.css';


const routes = [
    { path: '/', component: Home, meta: { transition: 'slide-left' } },
    { path: '/about-me', component: About, meta: { transition: 'slide-right' } },
    { path: '/portfolio', component: Portfolio, meta: { transition: 'slide-right' } },
    { path: '/contact', component: Contact, meta: { transition: 'slide-right' } },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


createApp(App).use(router).mount('#app');
