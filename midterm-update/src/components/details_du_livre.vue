<template>
    <!-- details_du_livre.vue -->
    <div v-if="book">
      <h1>{{ book.titre }}</h1>
      <p>Auteur: {{ book.auteur }}</p>
      <p>Année: {{ book.annee }}</p>
      <p>Catégorie: {{ book.categorie }}</p>
      <p>Status: {{ book.disponible ? 'Disponible' : 'Emprunté' }}</p>
      <p>{{ book.resume }}</p>
      <img :src="book.image" alt="Book Image" />
    </div>
  </template>
  
  <script>
  import books from "@/objet.json"; 
  
  export default {
    
      
        data() {
          return {
            book: null
          };
        },
    created() {
      const bookId = this.$route.params.id;
      this.book = books.livres.find(b => b.id === Number(bookId));
    }
  };
  </script>
  
  <style scoped>
  img {
    max-width: 300px;
    margin-top: 20px;
  }
  </style>
  