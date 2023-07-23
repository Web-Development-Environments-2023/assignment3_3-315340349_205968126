<template>
    <div class="FamilyRecipesPage">
        <b-row>
            <b-col>
                <RecipePreviewList
                    ref="familyRecipes"
                    title="Family Recipes"
                    class="FamilyRecipes"
                    routeName = "/users/myFamilyRecipes"
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

<style scoped>
.FamilyRecipesPage {
    margin-top: 80px;
}
</style>