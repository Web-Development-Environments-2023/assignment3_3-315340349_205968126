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
  },
  data() {
    return {
      recipes: [],
      myRecipe: this.routeName=="/users/myRecipes" || this.routeName=="/users/myFamilyRecipes",
    };
  },
  mounted() {
    this.updateRecipes();
    // console.log("routeName:", this.routeName);
    // console.log("myRecipe:", this.myRecipe);
  },
  methods: {
    //TODO: uncomment this
    async updateRecipes() {
      try {
        // console.log("Hiiiiiiiiii");
        // console.log(this.$root.store.server_domain + this.routeName);
        const response = await this.axios.get(
          this.$root.store.server_domain + this.routeName
          // "https://test-for-3-2.herokuapp.com/recipes/random"
        );

        // console.log(response);
        // const recipes = response.data; //.recipes;
        // console.log('this is the response')
        // console.log(response.data);
        const recipes = response.data;//.recipes;
        // console.log("Recipes:", recipes);
        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log("Recipes with IDs:", this.recipes);
      } catch (error) {
        console.log(error, this.$root.store.server_domain, this.routeName);
      }
    },
    //TODO: remove this
    // async openRecipe(recipeId) {
    //   try {
    //     // TODO: updateLastWatchedRecipes
    //     // if (!this.recipe.isWatched){
    //     //   this.updateLastWatchedRecipes(recipeId);
    //     // }
    //     // Use router.push to navigate to the RecipeViewPage
    //     this.$router.push({ name: 'recipe', params: { recipeId : recipeId } });
    //     this.$forceUpdate();
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
