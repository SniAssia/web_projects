<template>
    <div v-if="article">
      <h1>{{ article.title }}</h1>
      <p>{{ article.body }}</p>
      <p><strong>Tags:</strong> {{ article.tags.join(', ') }}</p>
      <p><strong>Créé le:</strong> {{ article.created_at }}</p>
      <p><strong>Mis à jour le:</strong> {{ article.updated_at }}</p>
    </div>
    <div v-else>
      <p>Article non trouvé.</p>
    </div>
  </template>
  
  <script>
  import objjson from '@/obj.json';
  
  export default {
    name: 'PostDetail',
    data() {
      return {
        article: null
      };
    },
    mounted() {
      this.fetchArticle();
    },
    methods: {
      fetchArticle() {
        const articleId = this.$route.params.id;
        this.article = objjson.find(post => post.id === parseInt(articleId));
      }
    }
  };
  </script>
  
  <style scoped>
  .post-detail {
    margin: 20px;
    padding: 10px;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .post-detail h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .post-detail p {
    margin-bottom: 5px;
  }

  .post-detail strong {
    font-weight: bold;
  }

  .post-detail .not-found {
    color: red;
    font-weight: bold;
  }
  
  /* Styles pour le composant PostDetail */
  </style>
  