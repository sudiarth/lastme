
const routes = [
  {
    path: '/',
    component: () => import('layouts/Home.vue')
  },
  {
    path: '/search',
    component: () => import('layouts/Search.vue')
  },
  {
    path: '/setting',
    component: () => import('layouts/Setting.vue')
  },
  {
    path: '/auth/login',
    component: () => import('layouts/Login.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/auth/register',
    component: () => import('layouts/Register.vue'),
    children: [
      { path: '', component: () => import('pages/Register.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
