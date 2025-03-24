import { createRouter, createWebHistory } from 'vue-router';
import Affichage from '../components/affichage.vue';
import DetailsDuLivre from '../components/details_du_livre.vue'; 

const routes = [
  {
    path: '/affichage',
    name: 'Affichage',
    component: Affichage
  },
  {
    path: '/details_du_livre/:id',
    name: 'details_du_livre',
    component: DetailsDuLivre
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;