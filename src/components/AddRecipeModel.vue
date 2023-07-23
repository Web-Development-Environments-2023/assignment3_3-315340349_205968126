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
                        <b-form-input type="text" class="form-control  m-1" placeholder="Title" v-model="recipeInfo.title" required></b-form-input>
                        <b-form-input type="text" class="form-control  m-1" placeholder="Minute to Cook" v-model="recipeInfo.readyInMinutes" required min="0"></b-form-input>
                        <b-form-input type="text" class="form-control  m-1" placeholder="Number of Dishes" v-model="recipeInfo.servings" required min="0"></b-form-input>
                    </b-col>
                    <b-col class="checkboxCol">
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
                <div>
                    <label for="image-input" class="custom-file-upload m-2">
                    Image URL:
                    </label>
                    <b-form-input 
                
                    type="url"
                    v-model="recipeInfo.imageUrl"
                    class="mr-auto m"
                    placeholder="Enter Image URL"
                    ></b-form-input>
                    <img
                    v-if="imagePreview"
                    :src="imagePreview"
                    alt="Uploaded image"
                    class="uploaded-image"
                    />
                </div>
              </div>
              <div class="form-input" id="items-steps-ingri">
                    <div>
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
                            <button type="button" class="close" @click="removeInstruction(index)" aria-label="Remove">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </li>
                        </ul>
                    </b-form-group>
                </div>
                </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="saveRecipe" data-dismiss="modal">Save changes</button>
            <button type="button" class="btn btn-secondary" @click="resetForm" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import unitOptionsData from "../assets/unitOptions.json";
  import axios from "axios";

  export default {
    data() {
      return {
        imagePreview: null,
        recipeInfo: {
            title: "",
            readyInMinutes: "",
            vegetarian: false,
            vegan: false,
            glutenFree: false,
            servings: "",
            popularity: "",
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
        // this.vegan = false;
        // this.vegetarian = false;
        // this.glutenFree = false;
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

        async saveRecipe(){
            try {
                const data = {
                // user_id: $root.store.user_id, // Replace this with the actual user ID
                recipeInfo: {
                    image: this.recipeInfo.image,
                    title: this.recipeInfo.title,
                    readyInMinutes: parseInt(this.recipeInfo.readyInMinutes),
                    vegetarian: this.recipeInfo.vegetarian ? 1 : 0,
                    vegan: this.recipeInfo.vegan ? 1 : 0,
                    glutenFree: this.recipeInfo.glutenFree ? 1 : 0,
                    instructions: this.recipeInfo.instructions,
                    servings: parseInt(this.recipeInfo.servings),
                    popularity: parseInt(this.recipeInfo.popularity),
                },
                ingredients: this.ingredients.map((ingredient) => ({
                    name: ingredient.name,
                    amount: {
                    metric: {
                        unit: ingredient.unit,
                        value: parseFloat(ingredient.value),
                    },
                    },
                })),
                steps: this.steps.map((step, index) => ({
                    stepNumber: index + 1,
                    instruction: step.text,
                })),
                };
                // Send the recipe data to the server
                const response = await axios.post(this.$root.store.server_domain + '/users/addRecipe', data);

                // Assuming the server responds with a success message
                // Reset the form data after successful save
                this.resetForm();
                // Close the modal
                $('#exampleModal').modal('hide');
                alert('Recipe saved successfully!');
            } catch (error) {
            // Handle any error that occurred during the HTTP request
            console.error('Error saving recipe:', error);
            }
        },
        // Method to reset the form data
        resetForm() {
            this.imagePreview = null;
            this.recipeInfo.title = "",
            this.recipeInfo.readyInMinutes = "",
            this.recipeInfo.vegetarian = false,
            this.recipeInfo.vegan = false,
            this.recipeInfo.glutenFree = false,
            this.recipeInfo.servings = "",
            this.recipeInfo.popularity = "",
            this.recipeInfo.image = "",
            this.ingredients = [];
            this.instructions = [];
            this.ingredientin = '';
            this.valuein = '';
            this.unitin = '';
            this.stepin = '';
            this.titlein = '';
            this.minutesin = '';
            this.servingsin = '';  
            this.recipeInfo.imageUrl = '';    
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
  
  
  <style scoped>
  .modal-container {
    max-width: 600px; /* Adjust this value based on your requirement */
    margin: 0 auto; /* Center the modal horizontally */
    padding: 20px;
  }
  
  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align inputs to the left */
  }

  .checkboxCol {
  display: flex;
  flex-direction: column;

  }

  .form-control {
    width: 100%;
    margin-bottom: 10px;
  }
.form-check {
  display: table; /* Use table layout to align items vertically */
  align-items: center; /* Align items (checkbox and label) vertically */
  margin-bottom: 10px; /* Adjust this value as needed */
}
  .form-check-label {
    margin-left:5px;
  }
  
  .uploaded-image {
    max-width: 350px;
    max-height: 350px;
    margin: 10px; /* Add margin here to create some space around the image */
  }
  
  /* Additional styles for the image URL input */
  .b-form-input {
    box-sizing: border-box; /* Ensure padding and border are included in the width */
    max-width: 100%; /* Limit the input width to stay within the modal */
    overflow: hidden; /* Hide any content that exceeds the width */
    text-overflow: ellipsis; /* Show ellipsis if the content exceeds the width */
  }
  /* Add any other custom styles you need for the modal here */
  </style>
  