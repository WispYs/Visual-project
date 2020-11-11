export default [
	{
    path: '/',
    name: 'index',
    component: resolve => require.ensure([], () => resolve(require('@/pages/Index')), 'index'),
    meta: {
      keepAlive : true
    }
  },
  {
    path: '/equipment',
    name: 'equipment',
    component: resolve => require.ensure([], () => resolve(require('@/pages/Equipment')), 'equipment'),
    meta: {
      keepAlive : false
    }
  },
  {
    path: '/management',
    name: 'management',
    component: resolve => require.ensure([], () => resolve(require('@/pages/Management')), 'management'),
    meta: {
      keepAlive : false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require.ensure([], () => resolve(require('@/pages/Login')), 'login'),
    meta: {
      keepAlive : false
    }
  },
  // {
  //   path: '',
  //   // component: resolve => require.ensure([], () => resolve(require('@/components/MainLayout')), 'mainLayout'),
  //   redirect: '/index',
  //   children: [
  //     {
  //       path: '/index',
  //       name: 'index',
  //       component: resolve => require.ensure([], () => resolve(require('@/pages/Index')), 'index'),
  //     },
     
  //   ]
  // },
];
