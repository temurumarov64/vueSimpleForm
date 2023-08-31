<template>
  <div>
    <auth-form @create="createEmployee" />
    <h1>Welcome to the page</h1>
  </div>
</template>

<script>
import AuthForm from "@/components/AuthForm.vue";
export default {
  components: {
    AuthForm,
  },
  data() {
    return {
      posts: [
        // { id: 1, name: "js1", surname: "Описание", email: "test@gmail.com" },
        // { id: 2, name: "js2", surname: "Описание", email: "test@gmail.com" },
        // { id: 3, name: "js3", surname: "Описание", email: "test@gmail.com" },
      ],
    };
  },
  methods: {
    createEmployee(post) {
      this.posts.push(post);
    },
  },
};
</script>

<style>
@import "bulma/css/bulma.css";
</style>
