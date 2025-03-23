<template>
   <div>
    <div>Liste des articles : </div>
    
    <!-- Afficher la liste des articles -->
    <div v-for="emp in jobs" :key="emp.id" class="post-item">
      <div>{{ emp.title }}</div>
      <div>{{ emp.body.substring(0, 50) }}...</div> <!-- Afficher un extrait -->
      
      <!-- Lien pour afficher les détails -->
      
    </div>
    
    <!-- Affichage des tags -->
    <tagcloud />
  </div>

</template>
<script>
import objjson from '@/obj.json';
export default {
    name: "poslist",
    props:{
        listeofemployees:{
            type:Array,
            required:true
        }
    },
    data() {
        return {
            jobs: [...objjson]
        };
    },
    computed: {
        
    },
    methods: {
        afficherarticle(article){
            this.selectedarticle = article;
        }
    },
};
</script>

<style scoped>
.post-item {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
}

.post-item div {
  margin-bottom: 5px;
}

.post-item div:first-child {
  font-weight: bold;
}

.post-item div:last-child {
  color: #888;
}

.router-link {
  color: blue;
  text-decoration: underline;
}

.tagcloud {
  margin-top: 20px;
}

</style>