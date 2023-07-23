<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal Form Title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Add your form content here -->
            <form id="form-body">
              <!-- Form fields, inputs, etc. -->
              <div class="form-check" id="test1">
                <b-row>
                    <b-col>
                        <b-form-input type="text" class="form-control  m-1" placeholder="Title" v-model="recipeInfo.name" required></b-form-input>
                        <b-form-input type="text" class="form-control  m-1" placeholder="Minute to Cook" v-model="recipeInfo.cooking_time" required min="0"></b-form-input>
                        <b-form-input type="text" class="form-control  m-1" placeholder="Number of Dishes" v-model="recipeInfo.servings" required min="0"></b-form-input>
                    </b-col>
                    <b-col>
                        <li>
                            <input class="form-check-input" type="checkbox" value="" id="VeganCheck" v-model="recipeInfo.vegan">
                            <label class="form-check-label" for="VeganCheck">
                            Vegan
                            </label>
                        </li>
                        <li>
                            <input class="form-check-input" type="checkbox" value="" id="VegetarianCheck2" v-model="recipeInfo.vegetarian">
                            <label class="form-check-label" for="VegetarianCheck2">
                            Vegetarian
                            </label>
                          
                        </li>
                        <li>
                            <input class="form-check-input" type="checkbox" value="" id="GultenCheck" v-model="recipeInfo.glutenFree">
                            <label class="form-check-label" for="GultenCheck">
                            Gluten Free
                            </label>
                        </li>


                    </b-col>
                </b-row>
                <b-row>
                    <label for="image-input" class="custom-file-upload m-2">
                        Choose Image: 
                    </label>
                    <input
                        type="file"
                        @change="handleImageUpload"
                        accept="image/*"
                        ref="imageInput"
                        class="m-2"
                        :v-model="recipeInfo.image"
                    >
                    <img v-if="imagePreview" :src="imagePreview" alt="Uploaded image" class="uploaded-image">
                </b-row>
              </div>
              <div class="form-input" id="items-steps-ingri">
                    <b-row>
                    <!-- Ingredients input group -->
                    <b-form-group>
                        <div class="form-inline">
                            <b-form-input v-model="ingredientin" placeholder="Ingredient Name" class="m-1" required></b-form-input>
                            <b-form-input v-model="valuein" placeholder="Value" class="m-1" required @input="validateValueIn"></b-form-input>
                            <div v-if="valueInError" class="text-danger">Please enter a valid float value for Value.</div>
                            <b-form-select 
                                v-model="unitin" :options="unitOptions" class="m-1" required>
                                <template #first>
                                <option value="" disabled>Select Unit</option>
                                </template>
                            </b-form-select>
                            <!-- <b-form-input v-model="unitin" placeholder="Unit" class="m-1" required></b-form-input> -->
                            <button type="button" @click="addIngredient" class="btn btn-success m-1">Add Ingredient</button>
                        </div>
                        <ul>
                            <li v-for="(ingredient, index) in modifiedIngredients" :key="index">
                            {{ ingredient.index }}. {{ ingredient.name }}, {{ ingredient.value }}, {{ ingredient.unit }}
                            <button type="button" class="close" @click="removeIngredient(index)" aria-label="Remove">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </li>
                        </ul>
                    </b-form-group>
                    <!-- Instructions input group -->
                    <b-form-group label="Instructions:" label-for="instructions-input">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <button type="button" @click="addInstruction" class="btn btn-outline-secondary m-1">Add Step</button>
                                </div>
                                <textarea v-model="stepin" class="form-control" aria-label="With textarea" required></textarea>
                            </div>
                            <ul>
                            <li v-for="(steps, index) in modifiedinstruction" :key="index">
                            {{ steps.index }}. {{ steps.text }}
                            <button type="button" class="close" @click="removeIngredient(index)" aria-label="Remove">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </li>
                        </ul>
                    </b-form-group>
                    </b-row>
                </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="saveRecipe">Save changes</button>
            <button type="button" class="btn btn-secondary" @click="resetForm" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import unitOptionsData from "../assets/unitOptions.json";
  
  export default {
    data() {
      return {
        imagePreview: null,
        recipeInfo: {
            name: "",
            cooking_time: "",
            vegan: false,
            glutenFree: false,
            vegetarian: false,
            instructions: "",
            servings: "",
            likes: "",
            image: "",
        },
        ingredients: [],
        steps: [],
        ingredientin: '',
        valuein: '',
        unitin: '',
        stepin: '',
        valueInError: false,
        unitOptions: unitOptionsData.units,
      };
    },
    methods: {
        handleImageUpload(event) {
        const file = event.target.files[0];
        // Perform image validation and processing if needed
        // For now, just set the imagePreview data to the image URL
        this.imagePreview = URL.createObjectURL(file);
        },
        // Add ingredient to the ingredients list
        addIngredient() {
        this.ingredients.push({ name: this.ingredientin, value: this.valuein, unit: this.unitin });
        this.ingredientin = '';
        this.valuein = '';
        this.unitin = '';
        this.vegan = false;
        this.vegetarian = false;
        this.glutenFree = false;
        },

        // Remove ingredient at the specified index
        removeIngredient(index) {
        this.ingredients.splice(index, 1);
        },

        // Add instruction to the instructions list
        addInstruction() {
        this.steps.push({ text: this.stepin });
        this.stepin = '';
        },

        // Remove instruction at the specified index
        removeInstruction(index) {
        this.steps.splice(index, 1);
        },
        saveRecipe(){
            console.log('this is the recipeinfo:', this.recipeInfo);
            console.log('this is the ingredients:', this.ingredients);
            console.log('this is the steps:', this.steps);
        },
        // Method to reset the form data
        resetForm() {
            this.imagePreview = null;
            this.ingredients = [];
            this.instructions = [];
            this.ingredientin = '';
            this.valuein = '';
            this.unitin = '';
            this.stepin = '';
            this.titlein = '';
            this.minutesin = '';
            this.servingsin = '';
        },
        validateValueIn(){
            const inputValue = this.valuein.trim();
            if (inputValue !== '') {
            const floatValue = parseFloat(inputValue);
            if (isNaN(floatValue)) {
                this.valueInError = true;
                console.log('error')
            } else {
                this.valueInError = false;
            }
        }
        }
        
    },
    computed: {
        modifiedIngredients() {
        // If the ingredients array is empty, return an empty array
        if (this.ingredients.length === 0) {
            return [];
        }

        // Otherwise, create a modified array with the ingredients and their respective index starting from 1
        return this.ingredients.map((ingredient, index) => ({
            index: index + 1,
            name: ingredient.name,
            value: ingredient.value,
            unit: ingredient.unit,
        }));
        },
        modifiedinstruction() {
        // If the instructions array is empty, return an empty array
        if (this.steps.length === 0) {
            return [];
        }

        // Otherwise, create a modified array with the instructions and their respective index starting from 1
        return this.steps.map((steps, index) => ({
            index: index + 1,
            text: steps.text,
        }));
        },
    },
  };
  </script>
  
  
  <style>
  /* Add any custom styles for the modal if needed */
    .uploaded-image {
        max-width: 350px;
        max-height: 350px;
        margin: 10px; /* Add margin here to create some space around the image */
        
    }

  </style>
  