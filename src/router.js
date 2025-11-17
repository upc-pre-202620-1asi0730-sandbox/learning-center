import {createRouter, createWebHistory} from "vue-router";
import Home from "./shared/presentation/views/home.vue";
import publishingRoutes from "./publishing/presentation/publishing-routes.js";
import iamRoutes from "./iam/presentation/iam-routes.js";

// TODO: Define lazy-loaded components for routes
const about = () => import('./shared/presentation/views/about.vue');
const pageNotFound = () => import('./shared/presentation/views/page-not-found.vue');
const routes = [
    { path: '/home',            name: 'home',       component: Home,        meta: { title: 'Home' } },
    { path: '/about',           name: 'about',      component: about,       meta: { title: 'About' } },
    { path: '/publishing',      name: 'publishing', children: publishingRoutes },
    { path: '/iam',             name: 'iam',        children: iamRoutes },
    { path: '/',                redirect: '/home' },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: pageNotFound, meta: { title: 'Page Not Found' } }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,

});

/**
 * Navigation guard that is called before each route change.
 * It sets the document title based on the target route's meta information
 * and can be used to implement authentication or other guards.
 *
 * @param {Object} to - The target Route Object being navigated to.
 * @param {Object} from - The current Route Object being navigated away from.
 * @param {Function} next - A function that must be called to resolve the hook.
 */
router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.name} to ${to.name}`);
    // Set the page title
    let baseTitle = 'ACME Learning Center';
    document.title = `${baseTitle} - ${to.meta['title']}`;
    // TODO: Call authentication guard
    next();
});

export default router;