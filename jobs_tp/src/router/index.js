import {createRouter , createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import addjob1 from '../views/addjob1.vue';
import Editjob from '../components/Editjob.vue';

const routes =[
  {
    path:"/",
    name:"HomeView",
    component:HomeView
  },
  {
    path:"/add",
    name:"addjob1",
    component:addjob1
  },
  {
    path:"/jobs/:id",
    name:"Editjob",
    component:Editjob
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;