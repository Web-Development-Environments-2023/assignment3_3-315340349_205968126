<template>
  <div class="container">
    <b-row>
      <b-col class="leftCol">
        <!--3 random recipes-->
        // TODO: uncomment this
        <!-- <RecipePreviewList
          ref="randomRecipe"
          title="Explore this recipes"
          class="RandomRecipes"
          routeName = "/recipes/getRandoms"
        />
        <button @click="$refs.randomRecipe.updateRecipes()">
          New Random Recipes
        </button> -->
      </b-col>
      <b-col class="rightCol">
        <!--for logged in user, last watched recipes. else, login and sign-in option-->
        <RecipePreviewList
          v-if="$root.store.username"
          ref="lastViewed"
          title="Last Viewed Recipes"
          class="LastViewedRecipes"
          
          routeName = "/users/getLastWatched"
        ></RecipePreviewList>
        <LoginPage v-if="!$root.store.username"></LoginPage>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LoginPage from "./LoginPage.vue";
export default {
  components: {
    //TODO: uncomment this
    RecipePreviewList,
    LoginPage,
  },
  mounted() {
    this.$refs.randomRecipe.updateRecipes();
  },
};
</script>

<style lang="scss" scoped>
// .RandomRecipes {
//   margin: 10px 0 10px;
// }

// .blur {
//   -webkit-filter: blur(5px);
//   /* Safari 6.0 - 9.0 */
//   filter: blur(2px);
// }

// ::v-deep .blur .recipe-preview {
//   pointer-events: none;
//   cursor: default;
// }
</style>
