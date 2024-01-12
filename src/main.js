import { Router } from '@vaadin/router';

function initRouter() {
    const router = new Router(document.querySelector('#app'));

    router.setRoutes([
        {
            path: '/',
            component: 'page-characters',
            action: () => import('./pages/characters')
        },
        {
            path: '/character-details',
            component: 'page-character-details',
            action: () => import('./pages/character-details')
        },
        {
            path: '(.*)',
            component: 'page-not-found',
            action: () => import('./pages/not-found')
        }
    ]);
}

window.addEventListener('load', () => initRouter());
