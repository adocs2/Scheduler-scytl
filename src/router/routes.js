const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/newTask',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'newTask', component: () => import('pages/NewTask.vue') }
    ]
  },
  {
    path: '/editTask/:taskId',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'editTask', component: () => import('pages/EditTask.vue'), props: true }
    ],
    props: true
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
