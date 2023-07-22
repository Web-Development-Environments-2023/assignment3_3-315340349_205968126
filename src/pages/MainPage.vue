<template>
  <div class="container-fluid m-0 p-0" id="test" >
    <div id="main-page" class="full-height p-4">
      <b-row>
        <b-col class="leftCol p-0">
          <!-- 3 random recipes-->
          <RecipePreviewList
            ref="randomRecipe"
            title="Explore this recipes"
            class="RandomRecipes"
            routeName = "/recipes/getRandoms"
          />
          <button @click="$refs.randomRecipe.updateRecipes()">
            New Random Recipes
          </button>
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
body, html {
  margin: 0;
  padding: 0;
}

#test {
  background: rgb(92,195,133);
  background: linear-gradient(0deg, rgba(92,195,133,1) 0%, rgba(249,249,229,1) 100%);
  background-position: center;
  background-size: cover;
  min-width: 100vw;
  min-height: 100vh;
}

// .full-height {
//   min-height: 100vh;
//   min-width: 100vw;
// }
</style>
