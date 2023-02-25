 <template>
  <div class="home">
    <h1>Home</h1>
    <p>Welcome: {{ username }}</p>
    <p>Here is your home page</p>
    <button type="button" @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data() {
    return {
      username: this.username
    };
  },
methods: {
  logout() {
    this.$router.push("/");
  }
}
};
</script> 
<!--
<template>
  <h3>Welcome User {{ user() }}</h3>

</template>

<script>
import { username } from '@/components/Login.vue';
export default {
  name: 'HomePage',
  
  props: ['username'] ,
  data() {
    return username;
  },
  methods:{
    user(){
      console.log("username: " + this.username);
      return this.username;

    }
  }
 


}
</script>
-->

<style>
.home {
  background-color: #138ab2;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
  color: #FFFFFF;
}

</style>