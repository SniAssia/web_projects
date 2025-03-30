<template>
  <div  v-if="emp" class="job-detail">
    <h2>{{ emp.titre }}</h2>
    <p><strong>Description:</strong> {{ emp.description }}</p>
    <p><strong>Salaire:</strong> {{ emp.salaire }}</p>
    <p><strong>Date de création:</strong> {{ emp.date_de_creation }}</p>
  </div>
</template>

<script>
export default {
  props: ['emp'],
  name: 'jobDetail'
};
</script>

<style scoped>
.job-detail {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 20px;
  background-color: #f9f9f9;
}

.job-detail h2 {
  margin-bottom: 10px;
}

.job-detail p {
  font-size: 20px;
  color: white;
  background-color: #751b1b;
  padding: 10px;
}
</style>
