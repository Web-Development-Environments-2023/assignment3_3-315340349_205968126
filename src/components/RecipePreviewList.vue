<template>
  <b-container>
    <h1>
      {{ title }}:
      <slot></slot>
    </h1>
    <b-row v-if="responsiveGrid">
      <b-col v-for="r in recipes" :key="r.id" :lg="colSize" :md="colSize" :sm="12">
        <RecipePreview class="recipePreview" :recipe="r" :title="title" />
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col v-for="r in recipes" :key="r.id" :sm="12">
        <RecipePreview class="recipePreview" :recipe="r" :title="title" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";

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
      colSize: 4, // Number of columns for RecipePreview (default is 4)
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
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + this.routeName,
          {
            params: this.filters,
          }
        );
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
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
// Add any necessary styles here
</style>
