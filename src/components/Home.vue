 <template>
  <div class="home">
    <h1>Home</h1><br>
    <p>Welcome {{ firstName }}</p>
    <h5>Here is your home page</h5> <br>
    <button type="button" @click="logout">Logout</button>
  </div>
</template>

<script>
import  firstName  from '@/components/Login.vue';  //importing firstName from Login.vue
export default {
  name: 'HomePage',
  props: {},
  data() {
    return {
      firstName: "User"
    };
    
  },
methods: {
  logout() {
    console.log(firstName);
    this.$router.push("/");   //redirect to login page
  }
}
};
</script> 


<style>
.home {
    text-align: center;
    color: #fff;
    margin-top: 10%;
    font-size: 1.5rem;
}
.logout-button {
        background-color: #ea1538;
        border-radius: 10px;
        padding: 10px 40px;
        color: #FFFFFF;
        margin: 1rem;
        font-size: 1rem;
    }
.logout-button:hover {
        background-color: green;
        color: #fff;
    }

</style>