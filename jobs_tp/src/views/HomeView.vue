<template>
  <div class="home-container">
    <h1>Liste des emplois</h1>

    <div class="filter-section">
      <input v-model="employer_desire" placeholder="Entrer le titre d'un emploi" class="input-field"/>
    </div>

    <div class="job-list-section">
      <div v-for="emp in filteredEmployees" :key="emp.id" @click="selectJob(emp)" class="job-item">
        <div>{{ emp.titre }}</div>
      </div>
    </div>

    <div v-if="selectedJob" class="job-detail-section">
      <job-detail class="ff" :emp="selectedJob"/>
    </div>
    
    <div v-if="selectedJob" class="edit-section">
      <div class="change-field-message">Merci de choisir le champ que vous voulez changer :</div>

      <select v-model="champ_selecte" class="select-field">
        <option value="titre">Titre</option>
        <option value="description">Description</option>
        <option value="salaire">Salaire</option>
        <option value="date_de_creation">Date de création</option>
      </select>

      <input v-model="valeur_change" placeholder="Entrer la nouvelle valeur" class="input-field"/>
      <div class="change-field-message">Est ce que vous étes sur de la suppression de cet element ?</div>
      <select v-model="suppression" class="select-field" aria-placeholder="">
        <option value="oui">Oui</option>
        <option value="non">Non</option>
      </select>

      <editjob 
        :valeur_changé="valeur_change" 
        :champ_selecte="champ_selecte" 
        :suppression="suppression" 
        :employe_desire="selectedJob.titre"
        @editjob="editJob"
        @deletejob="deleteJob"
      />
      
      
    </div>
  </div>
</template>

<script>
import jobDetail from '@/components/jobDetail.vue';
import editjob from '@/components/Editjob.vue';
import jobs from '@/objet1.json';

export default {
  name: "HomeView",
  components: {
    jobDetail,
    editjob,
    
  },
  data() {
    return {
      employer_desire: "",
      selectedJob: null,
      champ_selecte: "",
      valeur_change: "",
      suppression: "non",
      jobs :jobs.jobs // Initialisation des emplois à partir du fichier JSON
    };
  },
  computed: {
    filteredEmployees() {
      return this.jobs.filter(job => 
        job.titre.toLowerCase().includes(this.employer_desire.toLowerCase())
      );
    }
  },
  methods: {
    selectJob(job) {
      this.selectedJob = job;
    },
    editJob({ employeDesire, champ, valeur }) {
      const jobIndex = this.jobs.findIndex(job => job.titre === employeDesire);
      if (jobIndex !== -1) {
        this.jobs[jobIndex][champ] = valeur; // Modification locale dans l'objet JSON
      }
    },
    deleteJob(employeDesire) {
      this.jobs = this.jobs.filter(job => job.titre !== employeDesire); // Suppression locale de l'objet
      this.selectedJob = null;
    },
    
  

   
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.filter-section, .job-list-section, .job-detail-section, .edit-section {
  margin-bottom: 20px;
  width: 80%;
  max-width: 600px;
  
}
h1{
  background-color: #5d0c0c;
  color: white;
  border-radius: 10px;
  padding: 10px;
  width:500px;
  text-align: center;
}
.edit-section{
  background-color: #5d0c0c;
  padding: 10px;
  color:white;
  border-radius: 10px;

}
.ff{
  background-color: #5d0c0c;
  color: white;
  border-radius: 10px;
}

.input-field  {
  margin-top: 10px;
  padding: 8px;
  width: 100%;
  max-width: 300px;
}
.select-field{
  margin-top: 10px;
  padding: 8px;
  width: 100%;
  max-width: 200px;
}

.job-item {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

.job-item:hover {
  background-color: #e9e9e9;
}
      .change-field-message {
        font-size: 16px;
        font-weight: bold;
        margin-top: 10px;
      }
      </style>

