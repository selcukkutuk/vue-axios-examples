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

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  posts: any[] = [];
  errors: any[] = [];
  async created() {
    try {
      var response = await this.$axios.get("/posts");
      this.posts = response.data;
    } catch (error) {
      this.errors.push(error);
    }
  }
}
</script>
