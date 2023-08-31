<template>
  <form @submit.prevent class="container box p-6 has-background-light">
    <div class="title is-4 has-text-centered has-text-grey-dark">
      Yangi Xodimni Yarating
    </div>
    <div class="field">
      <label class="label">Ismi*</label>
      <div class="control">
        <input
          v-bind:value="post.name"
          @input="post.name = $event.target.value"
          class="input"
          type="text"
          placeholder="First name"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Familiyasi*</label>
      <div class="control">
        <input
          v-bind:value="post.surname"
          @input="post.surname = $event.target.value"
          class="input"
          type="text"
          placeholder="Surname"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Telefon raqami</label>
      <div class="control">
        <input
          v-bind:value="post.phoneNumber"
          @input="post.phoneNumber = $event.target.value"
          class="input"
          type="text"
          placeholder="+998..."
        />
      </div>
    </div>
    <div class="field">
      <label class="label">E-mail</label>
      <div class="control">
        <input
          v-bind:value="post.email"
          @input="post.email = $event.target.value"
          class="input"
          type="email"
          placeholder="test@gmail.com"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Jinsi</label>
      <div class="control">
        <div class="select">
          <select
            v-bind:value="post.gender"
            @change="post.gender = $event.target.value"
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">Qoshimcha ma'lumot</label>
      <div class="control">
        <textarea
          v-bind:value="post.extraInfo"
          @input="post.extraInfo = $event.target.value"
          class="textarea"
          placeholder="..."
        ></textarea>
      </div>
    </div>
    <button @click="createEmployee" class="button is-primary btn">
      Create
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        name: "",
        surname: "",
        email: "",
        phoneNumber: "",
        gender: "",
        extraInfo: "",
      },
    };
  },
  methods: {
    createEmployee() {
      if (!this.post.name) {
        alert("Ism va familiyani toldiring!");
        return;
      }
      if (!this.post.surname) {
        alert("Ism va familiyani toldiring!");
        return;
      }
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        name: "",
        surname: "",
        email: "",
        phoneNumber: "",
        gender: "",
        extraInfo: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}

.input {
  width: 100%;
  border: 1px solid teal;
  /* padding: 10px 15px; */
  /* margin-top: 15px; */
}
</style>
