<template>
  <div id="axios-global">
    <ul>
      <li v-for="post of posts" :key="post.id">{{ post.title }}</li>
    </ul>
    <ul v-if="errors && errors.length">
      <li v-for="(error, index) of errors" :key="index">{{ index + 1 }} - {{ error.message }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  async created() {
    await this.getPostsAsync();
  },
  data() {
    return {
      posts: [],
      errors: []
    };
  },
  methods: {
    async getPostsAsync() {
      try {
        const response = await this.$axios.get("/posts");
        this.posts = response.data;
      } catch (error) {
        this.errors.push(error);
      }
    }
  }
};
</script>
