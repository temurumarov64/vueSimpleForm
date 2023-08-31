<template>
  <form @submit.prevent class="hero is-fullheight">
    <div class="hero-body is-justify-content-center is-align-items-center">
      <div class="columns is-flex is-flex-direction-column box">
        <div class="column">
          <!-- <div class="title is-4 has-text-centered has-text-grey-dark">TEST</div> -->
          <div class="field">
            <label class="label">Log In</label>
            <div class="control">
              <input
                v-bind:value="credentials.name"
                @input="credentials.name = $event.target.value"
                class="input"
                type="text"
                placeholder="username"
              />
            </div>
          </div>

          <button @click="logIn" class="button is-primary btn is-pulled-right">
            Create
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        name: "",
      },
    };
  },
  methods: {
    logIn() {
      if (!this.credentials.name) {
        alert("Usernameni to'ldiring!");
        return;
      }
      this.$emit("create", this.credentials);
      this.credentials = {
        name: "",
      };
      this.$router.push("/dashboard");
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
