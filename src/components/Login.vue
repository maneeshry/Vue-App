<template>
  <div class="login">
    <h1>Hello Friend</h1>
    <form>
      <label>Username:</label>
      <input type="email" v-model="email" :class="{ 'error': emailError}"><br>
      <label>Password:</label>
      <input type="password" v-model="password" :class="{ 'error': passwordError}"><br>
      <button type="button" @click="login">Login</button> 
      
    </form>
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
      loggedIn: false,
      emailError: false,
      passwordError: false
    };
  },
  methods: {
    login() {
    if (!this.email.includes("@")) { //checking email address
        this.emailError = true;
        alert("Invalid email address.");
      } else {
        this.emailError = false;

      // Validate password
      if (this.password.length < 8 ||  !/\d/.test(this.password)) { //checking password length and presence of a number
        alert("Invalid password.");
      } else {
        this.passwordError = false;

      if (this.email === "1234@1234" && this.password === "12345678") {
        var uname = this.email;
        console.log("user: " + uname);
        this.loggedIn = true;
        this.$router.push("/home");
        return uname;
      } else {
        alert("Invalid username or password.");
      }
    }
  }

    }
  }
};
</script>

<style>
.login {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: aquamarine;
}
form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}
</style>