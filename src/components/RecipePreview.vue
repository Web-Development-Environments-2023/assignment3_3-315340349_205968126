<template>
  <b-card>
    <router-link
  :to="{
    name: 'recipe',
    params: { recipeId: recipe.id ? recipe.id : recipe.recipe_id, route_name: this.route_name },
  }"
  class="recipe-preview"
></router-link>

    <b-card-img
      :src="recipe.image"
      class="mask"
      href="#"
      style="background-color: hsla(0, 0%, 98%, 0.35);"
      @click="openRecipe(recipe.id ? recipe.id : recipe.recipe_id)"
    />
    <!-- <b-card-title class="recipe-title">{{ title }}</b-card-title> -->
    <b-card-title id="title" :title="recipe.title"></b-card-title>
    <b-card-text>
      <b-list-group flush>
        <dt>{{ recipe.readyInMinutes }} minutes</dt>
        <dt>{{ recipe.popularity }} likes</dt>
        <dt>{{ recipe.vegetarian ? "Vegetarian" : "" }}</dt>
        <dt>{{ recipe.vegan ? "Vegan" : "Non-Vegan" }}</dt>
        <dt>{{ recipe.isWatched ? "watched" : "" }}</dt>
        <!-- <dt>{{ recipe.isFavorited ? "favorited" : "" }}</dt> -->
        <!-- TODO: addFavorite -->
        <dt
          v-if="
            !recipe.isFavorited &&
              $root.store.username &&
              this.route_name != '/users/myRecipes' &&
              this.route_name != '/users/familyRecipes'"
        >
          <b-button ref="favoriteButton" @click="addToFavorites(recipe.id ? recipe.id : recipe.recipe_id)"
            >favorite</b-button
          >
        </dt>
        <dt v-if="recipe.isFavorited &&
              $root.store.username &&
              this.route_name != '/users/myRecipes' &&
              this.route_name != '/users/familyRecipes'">
          favorite
        </dt>
      </b-list-group>
    </b-card-text>
  </b-card>
</template>

<script>
import { BListGroup } from "bootstrap-vue";

export default {
  components: {
    BListGroup,
  },
  mounted() {
    this.axios.get(this.recipe.image).then((i) => {
      this.image_load = true;
    });
    if (this.$root.store.username){}
  },
  data() {
    return {
      image_load: false,
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
    route_name: {
      type: String,
      required: false,
    },
    my_recipe: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    async addToFavorites(recipeId) {
      try {
        const response = await this.axios.post(
          this.$root.store.server_domain + "/users/favorites",
          {
            recipe_id: recipeId,
          }
        );
        console.log(response);
        this.recipe.isFavorited = true;
        this.$forceUpdate();
      } catch (error) {
        console.log(error);
      }
    },
    async updateLastWatchedRecipes(recipeId) {
      try {
        const response = await this.axios.post(
          this.$root.store.server_domain + "/users/updateLastWatched",
          {
            recipe_id: recipeId,
          }
        );
        console.log("updateLastWatchedRecipes", this.recipe.isWatched, response);
        this.recipe.isWatched = true;
        this.$forceUpdate();
      } catch (error) {
        console.log(error);
      }
    },
    async openRecipe(recipeId) {
      try {
        // TODO: updateLastWatchedRecipes
        // if (!this.recipe.isWatched){
        //   this.updateLastWatchedRecipes(recipeId);
        // }
        // Use router.push to navigate to the RecipeViewPage
        console.log('Recipe ID:', recipeId);
        this.$router.push({ name: 'recipe', params: { recipeId : recipeId, mineRecipe : this.my_recipe } });
        this.$forceUpdate();
      } catch (error) {
        console.log(error);
      }
    },
  },
  // watch: {
  //   "recipe.isFavorited": function(newVal) {
  //     this.recipe.isFavorited = newVal;
  //   },
  // },
};
</script>

<style scoped>
.recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}

.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 98%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}
</style>
