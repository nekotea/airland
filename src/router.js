import Vue           from 'vue';
import Router        from 'vue-router';
import Home          from './views/home/Home.vue';
import HomeBuildings from "./views/home/HomeBuildings";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path     : '/',
      name     : 'home',
      component: Home,
      children : [
        {path: '/buildings', name: 'buildings',component: HomeBuildings},
      ],
    },
  ],
});
