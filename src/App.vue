<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
          <li class="nav-item dropdown" v-if="$root.store.username">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" :to="{ name: 'route1' }">
                Route 1
              </router-link>
              <router-link class="dropdown-item" :to="{ name: 'route2' }">
                Route 2
              </router-link>
              <router-link class="dropdown-item" :to="{ name: 'route3' }">
                Route 3
              </router-link>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="$root.store.username">
            <span class="navbar-text">{{ $root.store.username }}</span>
            <button class="btn btn-link nav-link" @click="Logout">
              Logout
            </button>
          </li>
          <li class="nav-item" v-else>
            <span class="navbar-text">Hello Guest</span>
          </li>
        </ul>
      </div>
    </nav>
    
    <div class="container">
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
  .container{
    padding-top: 30px;
  }
</style>

