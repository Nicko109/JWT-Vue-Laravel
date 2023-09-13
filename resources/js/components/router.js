import {createRouter, createWebHistory} from 'vue-router';


const routes = [
    {
        path: '/fruits',
        name: 'fruit.index',
        component: () => import('./Fruit/Index.vue')
    },
    {
        path: '/users/login',
        name: 'user.login',
        component: () => import('./User/Login.vue')
    },
    {
        path: '/users/registration',
        name: 'user.registration',
        component: () => import('./User/Registration.vue')
    },
    {
        path: '/users/personal',
        name: 'user.personal',
        component: () => import('./User/Personal.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('./User/Personal.vue')
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to, from, next) => {

    const accessToken = localStorage.getItem('access_token')

    if (!accessToken) {
        if (to.name === 'user.login' || to.name === 'user.registration' ) {
            return next()
        } else {
            return next({
                name: 'user.login'
            })
        }
    }
    if (to.name === 'user.login' || to.name === 'user.registration' && accessToken) {
        return next({
            name: 'user.personal'
        })
    }

    next()
})


export default router;

