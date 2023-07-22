<template>
  <div id="app">
    <Navbar /> <!-- Use the Navbar component here -->
    <div class="container mt-5 px-0">
      <router-view />
    </div>
  </div>
</template>



<script>
import Navbar from "./components/Navbar.vue"; // Import the Navbar component

export default {
  name: "App",
  components: {
    Navbar, // Add the Navbar component to the list of components
  },
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
  },
};
</script>

<style>
  /* .container{
    padding-top: 30px;
  } */
  /* .app{
    background: rgb(92,195,133);
    background: linear-gradient(90deg, rgba(92,195,133,1) 0%, rgba(249,249,229,1) 100%);
  } */
  /* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  } */
  body {
    margin: 0;
    padding: 0;
    background: rgb(92, 195, 133);
    background: linear-gradient(
      0deg,
      rgba(92, 195, 133, 1) 0%,
      rgba(249, 249, 229, 1) 100%
    );
    background-position: center;
    background-size: cover;
    min-height: 100vh;
  }
</style>

