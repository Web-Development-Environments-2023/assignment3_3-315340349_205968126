<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
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
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    routeName: {
      type: String,
      required: true
    },
    filters: {
      type: Object,
      default: () => ({}),
      required: false
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + this.routeName,
          {
            params: this.filters
          }
          // "https://test-for-3-2.herokuapp.com/recipes/random"
        );
        console.log('this is the response')
        console.log(response.data);
        const recipes = response.data;//.recipes;
        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error, this.routeName);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
