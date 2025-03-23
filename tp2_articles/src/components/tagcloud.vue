<template>
    <div>
      <h2>Tags</h2>
      <div class="tag-list">
        <div v-for="tag in tags" :key="tag.id" @click="showArticles(tag)">
          {{ tag.name }}
        </div>
      </div>
      
      <h2>Articles</h2>
      <ul>
        <li v-for="article in filteredArticles" :key="article.id">
          <router-link :to="'/postdetail/' + article.id">{{ article.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import tags from '@/tags.json';
  import obj from '@/obj.json';
  
  export default {
    data() {
      return {
        tags: [...tags],
        articles: [...obj],
        selectedTag: null
      };
    },
    computed: {
      filteredArticles() {
        if (this.selectedTag) {
          return this.articles.filter(article => article.tags.includes(this.selectedTag.name));
        } else {
          return this.articles;
        }
      }
    },
    methods: {
      showArticles(tag) {
        this.selectedTag = tag;
      }
    }
  };
  </script>
  
  <style scoped>
  .tag-list {
    display: flex;
    flex-wrap: wrap;
  }
  
  .tag-list div {
    margin: 5px;
    padding: 5px;
    background-color: lightgray;
    cursor: pointer;
  }
  </style>
  
  