<template>
  <div class="container box p-2 post" v-for="post in posts" :key="post.id">
    <p>Backendga jo'nataladigan ma'lumot:</p>
    <div>Ism va familiya: {{ post.name }} {{ post.surname }}</div>
    <div>Telefon raqami: {{ post.phoneNumber || "toldirilmagan"}}</div>
    <div>E-mail: {{ post.email || "toldirilmagan"}}</div>
    <div>Jinsi: {{ post.gender || "tanlanmagan" }}</div>
    <div>Qo'shimcha ma'lumot: {{ post.extraInfo || "toldirilmagan"}}</div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>
