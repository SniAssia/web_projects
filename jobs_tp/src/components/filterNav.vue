<template>
    <div>
      <h2>Filtrage des emplois</h2>
      <ul>
        <li v-for="emp in filteredEmployees" :key="emp.id">
          {{ emp.titre }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['liste_des_employes', 'employé_desiré'],
    computed: {
      filteredEmployees() {
        return this.liste_des_employes.filter(employe =>
          employe.titre.toLowerCase().includes(this.employé_desiré.toLowerCase())
        );
      }
    }
  };
  </script>
  
  <style scoped>
  /* Ajoute tes styles ici */
  </style>
  