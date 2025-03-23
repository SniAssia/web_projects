<template>
  <nav>
    <router-link to="/addpost" class="nav-link">Ajouter un article</router-link>
    <span>|</span>
    <router-link to="/editpost" class="nav-link">Modifier un article</router-link>
    <span>|</span>
    <router-link to="/poslist" class="nav-link">Afficher la liste des articles</router-link>
    <span>|</span>
    <router-link to="/tagcloud" class="nav-link">Voir les tags</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  padding: 20px;
}

nav .nav-link {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
