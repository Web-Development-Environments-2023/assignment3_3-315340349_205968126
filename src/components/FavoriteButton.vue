<template>
    <button @click="toggleFavorite">
      <span v-if="isFavorited">
        <i class="fas fa-heart"></i> <!-- Font Awesome heart icon when favorited -->
      </span>
      <span v-else>
        <i class="far fa-heart"></i> <!-- Font Awesome heart outline icon when not favorited -->
      </span>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      isFavorited: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      toggleFavorite() {
        this.$emit("toggle-favorite");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles for the FavoriteButton component here */
  button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  </style>
  