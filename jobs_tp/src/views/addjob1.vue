<template>
    <div class="add-job-container">
      <h2>Ajouter un emploi</h2>
  
      <form  class="job-form">
        <div class="form-group">
          <label for="titre">Titre</label>
          <input v-model="titre1" type="text" id="titre" placeholder="Entrer le titre de l'emploi" required />
        </div>
  
        <div class="form-group">
          <label for="description">Description</label>
          <textarea v-model="description1" id="description" placeholder="Entrer la description de l'emploi" required></textarea>
        </div>
  
        <div class="form-group">
          <label for="salaire">Salaire</label>
          <input v-model="salaire1" type="text" id="salaire" placeholder="Entrer le salaire" required />
        </div>
  
        <div class="form-group">
          <label for="date_de_creation">Date de création</label>
          <input v-model="date_de_creation1" type="date" id="date_de_creation" required />
        </div>
  
        <button type="submit" class="submit-btn" @click.prevent="addJob">Ajouter l'emploi</button>
      </form>
    </div>
  </template>
  
<script>
export default {
    data() {
        return {
            titre1: '',
            description1: '',
            salaire1: '',
            date_de_creation1: '',
            jobs: []
        }
    },
    methods: {
        addJob() {
            fetch('http://localhost:3000/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: this.jobs.length + 1,
                    titre: this.titre1,
                    description: this.description1,
                    salaire: this.salaire1,
                    date: this.date_de_creation1
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    this.jobs.push(data);
                    this.titre1 = '';
                    this.description1 = '';
                    this.salaire1 = '';
                    this.date_de_creation1 = '';
                    alert('Job added successfully!');
                })
                .catch(error => console.error('Error:', error));
        }
    },

    mounted() {
        fetch('http://localhost:3000/jobs')
            .then(response => response.json())
            .then(data => this.jobs = data)
            .catch(console.error);
    }
}
</script>
<style scoped>
  .add-job-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #9e2929;
    color: white;
  }
     
  h2 {
    margin-bottom: 20px;
    background-color: #560c0c;
    padding: 20px;
    color: white;
    
  }
  
  .job-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 500px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  label {
    font-weight: bold;
  }
  
  input, textarea {
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  textarea {
    resize: vertical;
  }
  
  .submit-btn {
    padding: 10px 20px;
    background-color: #560c0c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  
  </style>
  