<template>
  <div class="container">
    <b-row>
      <b-col class="leftCol">
        <!--3 random recipes-->
        <h1 class="title">Explore these recipes</h1>
        <RecipePreviewList title="" class="RandomRecipes center" />
        <button class="btn btn-primary" @click="updateRecipes">
          New Random Recipes
        </button>
      </b-col>
      <b-col class="rightCol">
        <!--for logged in user, last watched recipes. else, login and sign-in option-->
        <div v-show="$root.store.username">
          <RecipePreviewList
            title="Last Viewed Recipes"
            class="RandomRecipes center"
            :disabled="!$root.store.username"
          ></RecipePreviewList>
        </div>
        <div v-show="!$root.store.username">
          <LoginPage></LoginPage>
        </div>
      </b-col>
    </b-row>
  </div>
</template>


<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LoginPage from './LoginPage.vue';
export default {
  components: {
    RecipePreviewList,
    LoginPage,
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
