<template>
  <!-- Library.vue -->
  <nav>
    <h1>Bienvenue dans votre bibliothèque en ligne</h1>
    
  </nav>

  <div class="flex1">
    <input v-model="searchTitle" placeholder="Rechercher par titre" />
    <input v-model="searchAuthor" placeholder="Rechercher par auteur" />
    
    <label for="statusFilter">Filtrer par statut:</label>
    <select v-model="statusFilter" id="statusFilter">
      <option value="all">Tous</option>
      <option value="available">Disponible</option>
      <option value="borrowed">Emprunté</option>
    </select>
    
    <ul>
      <li v-for="book in filteredBooks" :key="book.id">
        <div class="flex2">
          <router-link :to="'/details_du_livre/' + book.id">
            <h2>{{ book.titre }} - {{ book.auteur }}</h2>
            <p>{{ book.categorie }} - {{ book.annee }}</p>
            <p>{{ book.disponible ? 'Disponible' : 'Emprunté' }}</p>
            
      <p>Année: {{ book.annee }}</p>
      
      
      <p>Résumée du book : {{ book.resume }}</p>
      <img :src="book.image" alt="Book Image" />
          </router-link>
            
          
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import books from "@/objet.json";

export default {
  data() {
    return {
      books: books.livres,
      searchTitle: "",
      searchAuthor: "",
      statusFilter: "all",
    };
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => {
        // Filter by title and author
        const matchesTitle = book.titre.toLowerCase().includes(this.searchTitle.toLowerCase());
        const matchesAuthor = book.auteur.toLowerCase().includes(this.searchAuthor.toLowerCase());
        
        // Filter by status (available or borrowed)
        let matchesStatus = true;
        if (this.statusFilter === "available") {
          matchesStatus = book.disponible === true;
        } else if (this.statusFilter === "borrowed") {
          matchesStatus = book.disponible === false;
        }
        
        return matchesTitle && matchesAuthor && matchesStatus;
      });
    }
  }
};
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  
  margin-right: 10px;
}

input {
  margin: 10px 0;
  padding: 8px;
}

select {
  margin: 10px 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
}

h2 {
  font-size: 1.5em;
}

.flex1{
  display:flex;
  flex-direction: column;

}
.flex2{ 
  color:white;
  background-color: rgb(142, 65, 89);
  border-radius: 4px;
  padding:10px;
}
h1{
  border-radius: 4px;
  background-color: rgb(142, 65, 89);
  padding:10px;
}
</style>
