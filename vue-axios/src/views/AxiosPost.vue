<template>
  <div id="axios-post">
    <form @submit.prevent="sendNewPost">
      <label for="title">Başlık:</label>
      <input name="title" type="text" v-model="newPost.title" />
      <button type="submit" :disabled="inProgress">Kaydet</button>
    </form>
    <div v-if="sendNewPostResult">
      Oluşan Post
      <pre>{{ sendNewPostResult }}</pre>
    </div>
    <ul v-if="errors && errors.length">
      <li v-for="(error, index) of errors" :key="index">{{ index + 1 }} - {{ error.message }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      inProgress: false,
      errors: [],
      newPost: {
        title: ""
      },
      sendNewPostResult: null
    };
  },
  methods: {
    sendNewPost() {
      this.inProgress = true;
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.newPost)
        .then(response => (this.sendNewPostResult = response.data))
        .catch(error => {
          this.errors.push(error);
        })
        .finally(() => (this.inProgress = false));
    }
  }
};
</script>
