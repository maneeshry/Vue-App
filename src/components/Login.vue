<template>
  <div class="login">
    <h1 style="color: aliceblue;">Hello Friend</h1>
    <form class="form" action="" method="">
        <div class="login-container">
            <h1 class="login-header">Welcome</h1>
            <input class="input-box" type="text" name="username" placeholder="Username" v-model="username" :class="{ 'error': emailError}" required>
            <input class="input-box" type="password" name="password" placeholder="Password" v-model="password" :class="{ 'error': passwordError}" required>
            <span class="login-forget">Forget Password?</span>
            <button type="submit" @click="login">Log in</button>
        </div>
    </form>
    </div>
</template>


<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: "",
      username: "", //hbingley1
      password: "", //CQutx25i8r
      firstName: "",
      loggedIn: false,
      emailError: false,
      passwordError: false,
      errors: [],
    };
  },
  
  methods: {     
     login() {
      
      // Validate password
      if (this.password.length < 8 ||  !/\d/.test(this.password)) { //checking password length and presence of a number
        alert("Invalid password.");
      } else {
        
        this.passwordError = false;
        
      try{
        fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            
            username: this.username,
            password: this.password
          })
        })
        .then(res => res.json())
        const data = res => res.json()
        this.$router.push("/home");
        this.$router.push({ name: 'Home', params: { firstName: data.firstName } });
      } catch(err) {
        console.error(err)
      }
    }

  },
}
};          
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
    * {
        margin: 0;
        padding: 0;
    }
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
        color: whitesmoke;
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