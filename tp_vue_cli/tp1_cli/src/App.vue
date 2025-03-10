<template>
  
  <input type="text" v-model="searchquery" placeholder="Rechercher une piece par nom...">
  <input type="text" v-model="searchquery1" placeholder="Rechercher une piece par catégorie...">
  <select v-model="ordre" placeholder="Choisir l'ordre de tri :">
    <option value="None">None</option>
    <option value="croissant">Ordre croissant</option>
    <option value="decroissant">Ordre decroissant</option>
  </select>
  
  <div class="flex">
  <div v-for="elem in sortedfilteredItems" :key="elem.id">
    <div class="elem1">{{ elem.nom }}</div>
    <div class="elem1">{{ elem.prix }}</div>
    <div class="elem1"> {{ elem.categorie }}</div>
    <div class="elem1">{{ elem.Disponible }}</div>
    <button v-on:click="ajout(elem)">Ajout au panier</button>
    <div>
      <img :src="elem.Image" alt="eee">
    </div>
    
  </div>

    <div v-if="panier.length>0"  class="fiches">
      <h3>Fiches des produits séléctionnés :</h3>
      <div v-for="el in panier" :key="el.id">
        <div class="elem1">{{ el.nom }}</div>
        <div class="elem1">{{ el.prix }}</div>
      </div>
    
    </div>
  </div>
    
    
  
</template>
<script>
import jsondata from './data/pieces-autos.json';


export default {
  name: 'App',
  data(){
    return {
      ordre:'None',
      jsondata: jsondata, // assigner les donnees importées a la propriete data 
      searchquery:'',
      searchquery1:'',
      
      panier:[]
    }; 
  },
  computed: {
    // Calculer les éléments filtrés en fonction de la recherche
    filteredItems() {
      const filtered= this.jsondata.filter(item => {
        const elem1=item.nom.toLowerCase().includes(this.searchquery.toLowerCase());
        const elem2=item.categorie.toLowerCase().includes(this.searchquery1.toLowerCase());
      
        return elem1 && elem2 && item.Disponible;
      });
      return filtered ;
    },
    sortedfilteredItems(){
      const sorted_list=[...this.filteredItems];//copier la liste filtrée
      console.log('Avant le tri:', sorted_list);
      if (this.ordre === 'croissant') {
        // Trier par prix croissant
        sorted_list.sort((a, b) => a.prix - b.prix);
      } else if (this.ordre === 'decroissant') {
        // Trier par prix décroissant
        sorted_list.sort((a, b) => b.prix - a.prix);
      }
      return sorted_list;
    }
    
  },
  methods:{
    ajout(element){
      const ifexist=this.panier.find(item=>item.id==element.id);
      if (!ifexist){
        this.panier.push(element);
      }
     
      
    }
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  padding: 8px;
  width: 800px;
  font-size: 16px;
  margin: 10px 0;
}
select {
  padding: 8px;
  width: 800px;
  font-size: 16px;
  margin: 10px 0;
}
button {
  padding: 8px;
  width: 800px;
  font-size: 16px;
  margin: 10px 0;
  background-color: rgb(217, 133, 133);
  color:white;
  font-size: x-large;
  font-weight: bold;

}
.elem1{
  height: 40px;
  background-color: darkred;
  padding: 10px;
  color:white;
  font-size: x-large;
  font-weight: bold;
  margin: 7px;
}
</style>
