<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <router-link class="navbar-brand" :to="{ name: 'main' }">
        <img
        src="@/assets/logo.png"
        alt="Cooking Logo"
        style="height: 40px; width: auto; filter: brightness(0) invert(1);"
      />
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
          <li v-if="$root.store.username" class="nav-item">
            <a
              class="nav-link"
              href="#"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Open Modal Form
            </a>
          </li>
          <li class="nav-item dropdown" v-if="$root.store.username">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" :to="{ name: 'createRecipe' }">
                createRecipe
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
            <span class="navbar-text">Welcome {{ $root.store.username }}</span>
          </li>
          <li class="nav-item" v-else>
            <span class="navbar-text">Hello Guest</span>
          </li>
          <li v-if="$root.store.username">
            <button class="btn btn-link nav-link" @click="Logout"> Logout </button>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    methods: {
      Logout() {
        //Clear the search results form localStorage
        localStorage.removeItem("searchResults");
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
  /* Your navbar styles... */
  </style>
  