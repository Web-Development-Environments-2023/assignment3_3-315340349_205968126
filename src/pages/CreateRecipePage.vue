<template>
    <div>
      <!-- <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button> -->
  
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Add your recipe"
        >
        <!-- @show="resetModal"
        @hidden="resetModal"
        @save="handleSave"
      > -->
        <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group label="image" label-for="image-input">
                <label for="image-input" class="custom-file-upload">
                    Choose Image: 
                </label>
                <input
                    type="file"
                    @change="handleImageUpload"
                    accept="image/*"
                    ref="imageInput"
                >
                <img v-if="imagePreview" :src="imagePreview" alt="Uploaded image">
            </b-form-group>

            <b-form-group label="Recipe title:" label-for="title-input">
                <b-form-input id="title-input" v-model="title" :state="title" required></b-form-input>
            </b-form-group>

            <b-form-group label="Minute to cook:" label-for="readyInMinutes-input">
                <b-form-input id="readyInMinutes-input" v-model="minutes" :state="minutes" required></b-form-input>
            </b-form-group>

            <b-form-group label="Does this recipe vegan?" label-for="vegan-input">
                <b-form-input id="vegan-input" v-model="vegan" type="checkbox"  required></b-form-input>
            </b-form-group>

            <b-form-group label="Does this recipe vegetarian?" label-for="vegetarian-input">
                <b-form-checkbox id="vegetarian-input" v-model="vegetarian" required></b-form-checkbox>
            </b-form-group>

            <b-form-group label="Does this recipe glutenFree?" label-for="glutenFree-input">
                <b-form-checkbox id="glutenFree-input" v-model="glutenFree" type="chekbox"  required></b-form-checkbox>
            </b-form-group>


            <b-form-group label="ingredients:" label-for="ingredients-input">
                <div v-for="(ingredient, index) in ingredients" :key="index">
                    <b-form-input
                        v-model="ingredient.name"
                        placeholder="Enter ingredient..."
                    ></b-form-input>
                    <b-form-input
                        v-model="ingredient.amount"
                        placeholder="Enter amount..."
                    ></b-form-input>
                </div>
                <b-button @click="addIngredient" variant="primary">Add Ingredient</b-button>
            </b-form-group>

            <b-form-group label="instructions:" label-for="instructions-input">
            <div v-for="(instruction, index) in instructions" :key="index">
                <b-form-input
                v-model="instruction.text"
                placeholder="Enter instruction..."
                ></b-form-input>
            </div>
            <b-button @click="addInstruction" variant="primary">Add Instruction</b-button>
            </b-form-group>

            <b-form-group label="number of dishes:" label-for="servings-input">
                <b-form-input id="servings-input" v-model="number" :state="number" required></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
        </form>
      </b-modal>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
            name: '',
            nameState: null,
            Image: '',
            imagePreview: '',
            title: '',
            minutes: '',
            vegan: '',
            vegetarian: '',
            glutenFree: '',
            ingredients: [''],
            instructions: [''],
        }
      },
      methods: {
        handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                // Process the uploaded image (e.g., display a preview)
                this.displayImagePreview(file);
            }
        },
        displayImagePreview(file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                this.imagePreview = event.target.result;
            };
            reader.readAsDataURL(file);
            },
        addIngredient() {
                this.ingredients.push(''); // Add an empty ingredient field to the list
        },
        addInstruction() {
            this.instructions.push(''); // Add an empty instruction field to the list
        },
        removeIngredient(index) {
            this.ingredients.splice(index, 1); // Remove the ingredient field at the specified index
        },
        submitForm() {
            // Handle form submission here, including ingredients list
            console.log('Ingredients:', this.ingredients);
            // ... Add your form submission logic here ...
        },
        checkFormValidity() {
          const valid = this.$refs.form.checkValidity()
          this.nameState = valid
          return valid
        },
        resetModal() {
          this.name = ''
          this.nameState = null
        },
        handleOk(bvModalEvent) {
          // Prevent modal from closing
          bvModalEvent.preventDefault()
          // Trigger submit handler
          this.handleSubmit()
        },
        handleSubmit() {
          // Exit when the form isn't valid
          if (!this.checkFormValidity()) {
            return
          }
          // Push the name to submitted names
          this.submittedNames.push(this.name)
          // Hide the modal manually
          this.$nextTick(() => {
            this.$bvModal.hide('modal-prevent-closing')
          })
        }
      }
    }
  </script>