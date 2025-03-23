<template>
  <div>
    <h1>Add Post</h1>
    <form @submit.prevent="addPost">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="post.title" required>
      <br>
      <label for="content">Content:</label>
      <textarea id="content" v-model="post.content" required></textarea>
      <br>
      <label for="author">Author:</label>
      <input type="text" id="author" v-model="post.author" required>
      <br>
      <button type="submit">Add Post</button>
    </form>
    <div v-if="addedPost">
      <h2>Added Post:</h2>
      <p>Title: {{ addedPost.title }}</p>
      <p>Body: {{ addedPost.body }}</p>
      <p>tags: {{ addedPost.tags }}</p>
      <p>Created_at:{{ addedPost.created_at }}</p>
      <p>Updated at :{{ addedPost.updated_at }}</p>
    </div>
  </div>
</template>
<script>
import obj from '@/obj.json';
export default {
  data() {
    return {
        obj:[...obj],
      post: {
        id:obj.length+1,
        title: '',
        body: '',
        tags: '',
        created_at:'',
        updated_at:''
      },
      addedPost: null
    };
  },
  methods: {
    addPost() {
        obj.push(this.post);
      this.addedPost = { ...this.post };
      this.post = {
        id:'',
        title: '',
        body: '',
        tags: '',
        created_at:'',
        updated_at:''
      };
    }
  }
};
</script>
<style scoped>
    h1 {
        color: #333;
        font-size: 24px;
        margin-bottom: 20px;
    }

    form {
        margin-bottom: 20px;
    }

    label {
        display: block;
        margin-bottom: 10px;
    }

    input,
    textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 10px;
    }

    button {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .added-post {
        margin-top: 20px;
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 4px;
    }

</style>