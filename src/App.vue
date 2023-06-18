<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <router-link class="navbar-brand" :to="{ name: 'main' }">
        Vue Recipes
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'main' }">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'search' }">
              Search
            </router-link>
          </li>
          <li class="nav-item" v-if="!$root.store.username">
            <router-link class="nav-link" :to="{ name: 'register' }">
              Register
            </router-link>
          </li>
          <li class="nav-item" v-if="!$root.store.username">
            <router-link class="nav-link" :to="{ name: 'login' }">
              Login
            </router-link>
          </li>
          <li class="nav-item" v-if="$root.store.username">
            <span class="navbar-text">{{ $root.store.username }}</span>
            <button class="btn btn-link nav-link" @click="Logout">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
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
/* Add any custom styles specific to the navbar or the app */
</style>

