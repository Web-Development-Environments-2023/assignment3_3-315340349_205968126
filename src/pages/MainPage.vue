<template>
  <div class="container">
    <b-row>
      <b-col class="leftCol">
        <!--3 random recipes-->
        <h1 class="title">Explore these recipes</h1>
        <RecipePreviewList title="Randome Recipes" class="RandomRecipes center" />
        <button class="btn btn-primary" @click="updateRecipes">
          New Random Recipes
        </button>
      </b-col>
      <b-col class="rightCol">
        <!--for logged in user, last watched recepies. else, login and signin option-->
        <template v-if="$root.store.username">
        {{ !$root.store.username }}
        <RecipePreviewList title="Last Viewed Recipes" :class="{
          RandomRecipes: true,
          blur: !$root.store.username,
          center: true,
        }" disabled></RecipePreviewList>
        </template>
        <template v-else>
          <LoginPage></LoginPage>
          </template>
      </b-col>
      <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
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
