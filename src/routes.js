import index from "@/views/index";
import error from "@/views/error";

const home = () => import('./views/home');

export default {
  disableAutoBack: true,
  limit: 5,
  main: 'index',
  error: 'error',

  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/error',
      name: 'error',
      component: error
    },
  ],
};
