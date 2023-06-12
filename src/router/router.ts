export const constantRoute = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/bug',
        name: 'bug',
        component: () => import('@/layout/bug/index.vue'),
        meta: {
          title: 'bug',
        },
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/layout/about/index.vue'),
        meta: {
          title: '关于',
        },
      },
    ],
  },

  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]
