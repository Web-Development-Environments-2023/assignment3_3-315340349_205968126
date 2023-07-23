<template>
  <div class="card-container">
    <router-link
      :to="{
        name: 'recipe',
        params: { recipeId:  recipe.id ? recipe.id : recipe.recipe_id, route_name: this.route_name },
      }"
      class="recipe-preview"
    >
      <div class="card-image" :style="{ backgroundImage: `url(${recipe.image})` }">
        <div class="card-overlay"></div>
        <div class="card-title">{{ recipe.title }}</div>
      </div>
    </router-link>
    <div class="card-info">
      <div class="card-details">
        <div class="card-detail">
          <i class="far fa-clock"></i>
          <span>{{ recipe.readyInMinutes }} minutes</span>
        </div>
        <div class="card-detail">
          <i class="far fa-heart"></i>
          <span>{{ recipe.popularity }} likes</span>
        </div>
        <div class="card-detail">
          <i class="fas fa-seedling"></i>

          <span>{{ recipe.vegetarian ? "Vegetarian" : "Non-Vegetarian" }}</span>
        </div>
        <div class="card-detail">
          <i class="fas fa-seedling"></i>

          <span>{{ recipe.vegan ? "Vegan" : "Non-Vegan" }}</span>
        </div>
        <div class="card-detail">
          <i v-if="recipe.isWatched" class="far fa-eye"></i>
          <i v-else class="far fa-eye-slash"></i>
          <span v-if="recipe.isWatched">watched</span>
        </div>
      </div>

      <div class="card-actions" v-if="$root.store.username && this.route_name !== '/users/myRecipes' && this.route_name !== '/users/myFamilyRecipes'">
        <b-button class="favorite-button" @click="addToFavorites( recipe.id ? recipe.id : recipe.recipe_id)">

      <div class="card-actions" v-if="$root.store.username && this.route_name !== '/users/myRecipes' && this.route_name !== '/users/myFamilyRecipes'">
        <b-button class="favorite-button" @click="addToFavorites(recipe.id)">

          <i v-if="recipe.isFavorited" class="fas fa-heart" style="color: red;"></i>
          <i v-else class="far fa-heart" style="color: black;"></i>
        </b-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
  },
};
</script>
<style scoped>
.card-container {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
  margin-bottom: 15px;
}

.recipe-preview {
  display: block;
  text-decoration: none;
  
}

.card-image {
  position: relative;
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
}

.card-title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
}

.card-info {
  padding: 10px;
}

.card-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.card-detail {
  display: flex;
  align-items: center;
}

.card-detail i {
  margin-right: 5px;
}

.card-actions {
  text-align: right;

}

.card-actions b-button {
  margin-right: 10px;
}

.favorite-button {
  background: transparent;
  border: none;
  padding: 0;
}
</style>