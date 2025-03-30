<template>
  <nav>
    <router-link to="/" class="nav-link">Home</router-link>
    <span>|</span>
    <router-link to="/add" class="nav-link">Add a job</router-link>
    <span>|</span>
    
  </nav>
  <router-view/>
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
  color: #831a0e;
}
</style>
