import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: () => import('./Index') },
    { path: '/button', name: 'Button', component: () => import('./pages/Button') },
    { path: '/header', name: 'Header', component: () => import('./pages/Header') },
    { path: '/tabbar', name: 'tabbar', component: () => import('./pages/Tabbar') },
    { path: '/tabs', name: 'tabs', component: () => import('./pages/Tabs') },
    { path: '/badge', name: 'badge', component: () => import('./pages/Badge') },
    { path: '/cell', name: 'cell', component: () => import('./pages/Cell') },
    { path: '/swipe', name: 'swipe', component: () => import('./pages/Swipe') },
    { path: '/popup', name: 'popup', component: () => import('./pages/Popup') },
    { path: '/picker', name: 'picker', component: () => import('./pages/Picker') },
    {
      path: '/actionSheet',
      name: 'ActionSheet',
      component: () => import('./pages/ActionSheet')
    },
    { path: '/toast', name: 'toast', component: () => import('./pages/Toast') },
    { path: '/dialog', name: 'dialog', component: () => import('./pages/Dialog') },
    { path: '/switch', name: 'switch', component: () => import('./pages/Switch') },
    { path: '/checkbox', name: 'checkbox', component: () => import('./pages/Checkbox') },
    { path: '/rate', name: 'rate', component: () => import('./pages/Rate') },
    { path: '/radio', name: 'radio', component: () => import('./pages/Radio') },
    { path: '/ripple', name: 'ripple', component: () => import('./pages/Ripple') }
  ]
});
