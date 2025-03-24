<template>
    //affichage
    <div>
      <h1>Bienvenue dans votre en ligne Bibliothèque</h1>
      <div>
        <input v-model="var1" placeholder="Rechercher par titre" />
        <input v-model="var2" placeholder="Rechercher par auteur" />
      </div>
      <ul>
        <li v-for="book in filteredBooks" :key="book.id">
          <div>
            <router-link :to="'/details_du_livre/' + book.id">
              {{ book.titre }} - {{ book.auteur }}
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
import books from "@/objet.json"; // Assuming `objet.json` is in the same directory as `src`
 
  export default {
    data() {
      return {
        books: books,
        var1: "",
        var2: ""
      };
    },
    computed: {
      filteredBooks() {
        return this.books.filter(book => {
          return book.titre.includes(this.var1) && book.auteur.includes(this.var2);
        });
      }
    }
  };
  </script>
  