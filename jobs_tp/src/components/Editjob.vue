<template>
    <div class="edit-job">
      <button @click="editJob" class="btn-edit">Modifier</button>
      <button @click="deleteJob" class="btn-delete">Supprimer</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['valeur_changé', 'champ_selecte', 'suppression', 'employe_desire'],
    methods: {
      editJob() {
        // Émettre l'événement pour la modification
        this.$emit("editjob", {
          employeDesire: this.employe_desire,
          champ: this.champ_selecte,
          valeur: this.valeur_changé
        });
      },
      deleteJob() {
        // Émettre l'événement pour supprimer l'emploi
        this.$emit("deletejob", this.employe_desire);
      }
    }
  };
  </script>
  
  <style scoped>
  .edit-job {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .btn-edit, .btn-delete {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn-edit {
    background-color: #3d95c8;
    color: white;
  }
  
  .btn-delete {
    background-color:#3d95c8;
    color: white;
  }
  </style>
  