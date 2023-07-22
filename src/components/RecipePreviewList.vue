<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <!-- <b-card-img
          :src="require('@/assets/recipe-book.png')"
          class="mask"
          href="#"
          style="background-color: hsla(0, 0%, 98%, 0.35);"
          @click="openRecipe(recipe.id)"
        /> -->
    <!-- TODO: uncomment this -->
    <b-row v-for="r in recipes" :key="r.id">
      <b-col>
        <RecipePreview class="recipePreview" :recipe="r" :title="title"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    // TODO: uncomment this
    RecipePreview,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    // TOO: uncomment this
    routeName: {
      type: String,
      required: true,
    },
    filters: {
      type: Object,
      default: () => ({}),
      required: false
    },
    useLocalStorage: {
      type: Boolean,
      default: false,
      required: false
    },
    searchResults:{
      type: Array,
      required: false,
      default: () => [],
    }

  },
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    console.log('mounting........')
    console.log('this.useLocalStorage', this.useLocalStorage)
    if (this.useLocalStorage) {
      console.log("I'm here1") 
      console.log('this.searchResults', this.searchResults)
      const savedResults = localStorage.getItem("searchResults");
      this.recipes = this.searchResults; // Use the provided searchResults from localStorage
      if (savedResults) {
        // If no results in localStorage, fetch new results from the API
        this.recipes = JSON.parse(savedResults);
        // this.$emit('localStoragehandler')
        console.log("I'm here2")
        console.log('this.searchResults', this.searchResults) 
      }
    } else {
      this.updateRecipes();
    }
  },
  methods: {
    //TODO: uncomment this
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + this.routeName,
          {
            params: this.filters
          }
          // "https://test-for-3-2.herokuapp.com/recipes/random"
        );
        const recipes = response.data;//.recipes;
        this.recipes = [];
        this.recipes.push(...recipes);
        if(this.useLocalStorage){
          localStorage.setItem("searchResults", JSON.stringify(this.recipes));
        }
        
      } catch (error) {
        console.log("I catched the error")
        console.log("I'm here3")
        console.log(error)
        console.log(error, this.$root.store.server_domain, this.routeName);
      }
    },
  },
  watch:{
    filters:{
      handler(){
        this.updateRecipes();
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
// .container {
//   min-height: 400px;
// }
</style>
