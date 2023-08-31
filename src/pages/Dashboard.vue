<template>
  <div>
    <employee-form @create="createEmployee" />
    <employee-array :posts="posts" />
  </div>
</template>

<script>
import EmployeeForm from "@/components/EmployeeForm.vue";
import EmployeeArray from "@/components/EmployeeArray.vue";
export default {
  components: {
    EmployeeForm,
    EmployeeArray,
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
/* * { margin: 0; padding: 0; box-sizing: border-box; } .app { padding: 20px; }
*/
