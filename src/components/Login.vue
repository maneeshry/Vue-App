<template>
  <div class="login">
    <h1>Login</h1>
    <form>
      <label>Username:</label>
      <input type="text" v-model="username"><br>
      <label>Password:</label>
      <input type="password" v-model="password"><br>
      <button type="button" @click="login">Login</button>
    </form>
    <div v-if="loggedIn">
      <router-link to="/home">Go to Home Page</router-link>
    </div>
  </div>
</template>



<script>
export default {
  name: 'LoginPage',
  props: {
    msg: String
  },
  data() {
    return {
      username: "",
      password: "",
      loggedIn: false
    };
  },
  methods: {
    login() {
      if (this.username === "maneesh" && this.password === "1234") {
        this.loggedIn = true;
      } else {
        alert("Invalid username or password.");
      }
    }
  }
};
</script>
    