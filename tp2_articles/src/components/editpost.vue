<template>
  <div>
    <h1>Edit Post</h1>
    <div>
      <div>
        <label for="post"> Select Article :</label>
        <select id="post" v-model="selectedPostId" @change="loadPost" aria-placeholder="select an article">
          <option v-for="post in posts" :value="post.id" :key="post.id">{{ post.title }}</option>
        </select>
    </div>
      <div v-if="selectedPostId">
        <label for="field">Select Field to Modify:</label>
        <select id="field" v-model="selectedField">
          <option value="">-- Select Field --</option>
          <option value="title">Title</option>
          <option value="body">Body</option>
          <option value="tags">Tags</option>
          <option value="created_at">Created_at</option>
          <option value="updated_at">Updated_at</option>
        </select>
      </div>
      <div >
        <label for="value">New Value:</label>
        <input type="text" id="value" v-model="newValue">
      </div>
      <button @click="updatePost" >Update</button>
    </div>
    
  </div>
</template>

<script>
import posts from '@/obj.json';
export default {

  data() {
    return {
        posts:[...posts],
      
      selectedPostId: '',
      selectedField: '',
      newValue: ''
    };
  },
  computed: {
    selectedPost() {
      return this.posts.find(post => post.id === this.selectedPostId);
    }
  },
  
  methods: {
    updatePost() {
      // Update the selected field of the selected post with the new value
      if (this.selectedPost && this.selectedField && this.newValue) {
        this.selectedPost[this.selectedField] = this.newValue;
        // Save the updated post to obj.json or API
      }
    }
  }
};
</script>
<style>
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  select,
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
</style>

