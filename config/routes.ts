export default [
    {
        path: '/',
        redirect: '/index',
        exact: true,
    },
    {
        path: '/404',
        component: '@/pages/404',
    },
    {
        path: '/start',
        component: '@/pages/Start'
    },
    {
        path: '/house',
        component: '@/pages/House'
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true,
    },
];
