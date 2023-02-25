<template>
  <!-- added image in body tag observe in css i notified in styles changed some divs -->
<body>
    <form class="form" action="" method="">
        <div class="login-container">
            <h1 class="login-header">Welcome</h1>
            <input class="input-box" type="email" name="Umail" placeholder="Email" v-model="email" :class="{ 'error': emailError}" required>
            <input class="input-box" type="password" name="Upassword" placeholder="Password" v-model="password" :class="{ 'error': passwordError}" required>
            <span class="login-forget">Forget Password?</span>
            <button type="submit" @click="login">Log in</button>
        </div>
    </form>
</body>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
    * {
        margin: 0;
        padding: 0;
    }
/* observe this body css */
    body {
        font-family: 'Roboto', sans-serif;
        background-image: url(/src/assets/pxfuel.jpg);
        cursor: pointer;
    }

    .login-container {
        background-color: #0708478e;
        border-radius: 15px;
        height: 30rem;
        width: 40%;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 20%;
        right: 30%;
        flex-direction: column;
        align-items: center;
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(10px);
    }

    .login-header {
        margin-bottom: 35px;
        color: #fff;
    }

    .input-box {
        width: 50%;
        padding: 12px 20px;
        margin: 10px 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        border-bottom: 1px solid black;
    }

    .login-forget {
        margin: 2px 0 25px 0;
        font-size: 10px;
        width: 50%;
        color: blue;
        display: flex;
        justify-content: end;
        
    }

    .login-forget:hover {
        color: steelblue;
    }

    button {
        width: 50%;
        margin: 10px 0;
        padding: 12px 20px;
        border-radius: 25px;
        background-color: #3C79F5;
        color: #fff;
    }
    
    button:hover {
        background-color: crimson;
        color: white;
    }

</style>