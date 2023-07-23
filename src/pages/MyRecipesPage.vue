<template>
    <div class="MyRecipesPage">
        <b-row>
            <b-col>
                <RecipePreviewList
                    ref="myRecipes"
                    title="My Recipes"
                    class="MyRecipes"
                    routeName = "/users/myRecipes"
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