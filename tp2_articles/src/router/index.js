import {createRouter , createWebHistory } from 'vue-router';
import navbar from '../components/navbar.vue';
import poslist from '../components/poslist.vue';
import postdetail from '../components/postdetail.vue';
import tagcloud from '../components/tagcloud.vue';
import addpost from '../components/addpost.vue';
import editpost from '../components/editpost.vue';
const routes =[
  {
    path:"/addpost",
    name:"addpost",
    component:addpost
  },
  {
    path:"/editpost",
    name:"editpost",
    component:editpost
  },
  {
    path:"/",
    name:"navbar",
    component:navbar
  },
  {
    path:"/poslist",
    name:"poslist",
    component:poslist
  },
  {
    path:"/postdetail/:id",
    name:"postdetail",
    component:postdetail
  }, 
 
  {
    path:"/tagcloud",
    name:"tagcloud",
    component:tagcloud
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;