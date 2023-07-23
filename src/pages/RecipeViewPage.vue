<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="row">
          <div class="col-md-6">
            <b-card>
              <template #header>
                <h4>Ingredients</h4>
              </template>
              <ul class="list-unstyled">
                <li v-for="(i) in recipe.ingredients" :key="i.ingredient" class="text-left">
                  {{ i.amount.metric.value }} {{ i.amount.metric.unit }} {{ i.ingredient }}
                </li>
              </ul>
              <div>
                <i v-if="!recipe.vegan" class="fas fa-seedling"></i>
                <li>{{ recipe.vegan ? "Vegan" : "Non-Vegan" }}</li>
                <i v-if="!recipe.vegetarian" class="fas fa-carrot"></i>
                <li>{{ recipe.vegetarian ? "Vegetarian" : "Not-Vegetarian" }}</li>
                <i v-if="!recipe.glutenFree" class="fas fa-bread-slice"></i>
                <li>{{ recipe.glutenFree ? "Gluten Free" : "Not-Gluten Free" }}</li>
              </div>
            </b-card>
          </div>
          <div class="col-md-6">
            <b-card>
              <template #header>
                <h4>Instructions</h4> 
              </template>
              <ol class="list-unstyled">
                <li v-for="step in recipe.steps" :key="step.stepNumber" class="text-left">
                  <b>{{ step.stepNumber }}.</b> {{ step.instruction }}
                </li>
              </ol>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      recipe: null,
    };
  },
  async created() {
    console.log("this.$route.params", this.$route.params);
    try {
      let response;
      let path;
      // response = this.$route.params.response;
      try {
        if (this.$route.params.mineRecipe){
          path = "/users/getMyRecipe/"
          console.log("mineRecipe")
        }
        else{
          path = "/recipes/getRecipeFullData/"
          console.log("not mineRecipe")
        }
        response = await this.axios.get(
          // "https://test-for-3-2.herokuapp.com/recipes/info",
          this.$root.store.server_domain +
            path +
            this.$route.params.recipeId,
          {
            params: { recipeId: this.$route.params.recipeId },
          }
        );
        console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.status", error.status);
        this.$router.replace("/NotFound");
        return;
      }

      console.log("response.data", response.data);

      let {
        title,
        readyInMinutes,
        image,
        popularity,
        vegan,
        vegetarian,
        glutenFree,
        servings,
      } = response.data.recipeInfo;

      let { ingredients, steps } = response.data;

      let _recipe = {
        title,
        readyInMinutes,
        image,
        popularity,
        vegan,
        vegetarian,
        glutenFree,
        servings,
        ingredients,
        steps,
      };
      // _recipe.image = this.$route.params.image;

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
}

.recipe-header {
  text-align: center;
}

.center {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}

.recipe-body {
  margin-top: 20px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
}

.wrapped {
  width: 48%;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

h4 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

ul {
  padding-left: 20px;
}

ol {
  padding-left: 20px;
}

li {
  margin-bottom: 5px;
}

li.text-left{
  text-align: left;
}
</style>
