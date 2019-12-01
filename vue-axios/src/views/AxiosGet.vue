<template>
  <div id="axios-get">
    <ul>
      <li v-for="post of posts" :key="post.id">{{ post.title }}</li>
    </ul>
    <ul v-if="errors && errors.length">
      <li v-for="(error, index) of errors" :key="index">{{ index + 1 }} - {{ error.message }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
      errors: []
    };
  },
  methods: {
    getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => (this.posts = response.data))
        .catch(error => {
          this.errors.push(error);
        });
    }
  }
};
</script>
