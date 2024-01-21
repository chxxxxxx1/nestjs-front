import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  model: {},
  request: {},
  layout: false,
  routes: [
    {
      path: '/registor',
      component: './User/Registor',
    },
    {
      path: '/login',
      component: './User/Login',
    },
  ],
  npmClient: 'pnpm',
  proxy: {
    '/api/v1': {
      target: 'http://127.0.0.1:3000',
    },
  },
});
