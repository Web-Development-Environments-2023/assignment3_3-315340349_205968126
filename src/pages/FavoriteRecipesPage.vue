<template>
    <div class="FavoriteRecipesPage">
        <b-row>
            <b-col>
                <RecipePreviewList
                    ref="favoriteRecipes"
                    title="Favorite Recipes"
                    class="FavoriteRecipes"
                    routeName = "/users/favorites"
                />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
    components: {
        RecipePreviewList,
    },
};
</script>