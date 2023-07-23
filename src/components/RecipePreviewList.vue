<template>
  <b-container>
    <h1>
      {{ title }}:
      <slot></slot>
    </h1>
    <div v-if="responsiveGrid" class="sort-buttons">
      <b-button @click="sortByPopularity" variant="primary">
        <i class="fas fa-arrow-up"></i>
      </b-button>
      <b-button @click="sortByReadyInMinutes" variant="primary">
        <i class="far fa-clock"></i>
      </b-button>
    </div>
    <b-row v-if="responsiveGrid">
      <b-col v-for="r in recipes" :key="r.id" :lg="colSize" :md="colSize" :sm="12">
        <RecipePreview class="recipePreview"
          :recipe="r"
          :title="title" 
          :route_name="routeName"
          :my_recipe="myRecipe"/>
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col v-for="r in recipes" :key="r.id" :sm="12">
        <RecipePreview class="recipePreview" 
          :recipe="r"
          :title="title" 
          :route_name="routeName"
          :my_recipe="myRecipe"/>
      </b-col>
      </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
import axios from "axios";

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    routeName: {
      type: String,
      required: true,
    },
    filters: {
      type: Object,
      default: () => ({}),
      required: false,
    },
    useLocalStorage: {
      type: Boolean,
      default: false,
      required: false,
    },
    searchResults: {
      type: Array,
      required: false,
      default: () => [],
    },
    responsiveGrid: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  data() {
    return {
      recipes: [],
      myRecipe: this.routeName=="/users/myRecipes" || this.routeName=="/users/myFamilyRecipes",
      colSize: 4, // Number of columns for RecipePreview (default is 4)
      sortBy: null,
    };
  },
  mounted() {
    if (this.useLocalStorage) {
      const savedResults = localStorage.getItem("searchResults");
      this.recipes = this.searchResults; // Use the provided searchResults from localStorage
      if (savedResults) {
        this.recipes = JSON.parse(savedResults);
      }
    } else {
      this.updateRecipes();
    }
  },
  methods: {
    sortByPopularity() {
      this.sortBy = "popularity";
      this.sortRecipes();
    },

    // Method to sort recipes by readyInMinutes
    sortByReadyInMinutes() {
      this.sortBy = "readyInMinutes";
      this.sortRecipes();
    },

    // Method to sort the recipes based on the selected sorting option
    sortRecipes() {
      if (this.sortBy === "popularity") {
        this.recipes.sort((a, b) => b.popularity - a.popularity);
      } else if (this.sortBy === "readyInMinutes") {
        this.recipes.sort((a, b) => a.readyInMinutes - b.readyInMinutes);
      }
    },
    async updateRecipes() {
      try {
        // console.log("Hiiiiiiiiii");
        // console.log(this.$root.store.server_domain + this.routeName);
        const response = await this.axios.get(
          this.$root.store.server_domain + this.routeName,
          {
            params: this.filters,
          }
        );
        const recipes = response.data;

        for (const recipe of recipes) {
          // Fetch isFavorite and isWatched values for each recipe
          const recipeId = recipe.id;
          const response = await axios.get(
            `${this.$root.store.server_domain}/users/favoriteandWatched/${recipeId}`
          );
          recipe.isFavorite = response.data.isFavorite;
          recipe.isWatched = response.data.isWatched;
        }
        if (this.sortBy === "popularity") {
          this.recipes.sort((a, b) => b.popularity - a.popularity);
        } else if (this.sortBy === "readyInMinutes") {
          this.recipes.sort((a, b) => a.readyInMinutes - b.readyInMinutes);
        }
        this.recipes = recipes;

        if (this.useLocalStorage) {
          localStorage.setItem("searchResults", JSON.stringify(this.recipes));
        }
      } catch (error) {
        console.log(error);
        console.log(this.$root.store.server_domain, this.routeName);
      }
    },

    // Adjust colSize based on screen width (you can fine-tune these values as needed)
    adjustColSize() {
      if (window.innerWidth < 768) {
        this.colSize = 12; // On small screens (e.g., smartphones), display one RecipePreview per row
      } else if (window.innerWidth < 992) {
        this.colSize = 6; // On medium screens (e.g., tablets), display two RecipePreviews per row
      } else {
        this.colSize = 4; // On large screens (e.g., desktops), display three RecipePreviews per row
      }
    },
  },
  watch: {
    filters: {
      handler() {
        this.updateRecipes();
      },
      deep: true,
    },
  },
  created() {
    this.adjustColSize();
    // Recalculate colSize when the window is resized
    window.addEventListener("resize", this.adjustColSize);
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed to avoid memory leaks
    window.removeEventListener("resize", this.adjustColSize);
  },
};
</script>

<style lang="scss" scoped>
.sort-buttons {
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-top: -30px; /* Adjust this value to control the vertical position */
}

.sort-button {
  background-color: transparent;
  border: none;
  color: #007bff; /* Set the desired text color for the buttons */
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px; /* Adjust this value to control the horizontal spacing between buttons */
}

.sort-button i {
  margin-right: 5px; /* Adjust this value to control the space between the icon and text */
}
</style>
