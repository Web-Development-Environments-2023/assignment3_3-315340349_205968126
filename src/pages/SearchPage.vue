<template>
  <div class="container-fluid m-0 p-0" id="test">
    <div id='search-page' class="full-height p-4">
      <div class="card" id="main-card">
        <h1>Search Page</h1>
        <div class="row">
          <div class="input-group mb-3">
            <input v-model="querytosearch" type="text" class="form-control" aria-label="Search Query" aria-describedby="basic-addon2">

            <div class="btn-group">
              <button class="btn btn-primary" @click="search">Search</button>
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Recipes to return: {{ selectedReturnOption }}
              </button>
              <ul class="dropdown-menu">
                <li v-for="item in returnOptions" :key="item">
                  <a class="dropdown-item" type='button' @click="recipesToReturn(item)">{{ item }}</a>
                </li>
              </ul>
            </div>
        </div>

        <a data-toggle="collapse" href="#AdvanceFilter" role="button" aria-expanded="false" aria-controls="AdvanceFilter" class="advanced">
          Advance Search With Filters <i class="fa fa-angle-down"></i>
          </a>
          <!-- <div class="collapse" id="AdvanceFilter">
            <div class="card card-body">
              <div class="row">
                <div class="col" v-for="category in categories" :key="category.name">
                  <h3>{{ category.name }}</h3>
                  <div class="form-check" v-for="item in category.items" :key="item">
                    <input class="form-check-input" v-model="checkedItems[category.name][item]" value=item.value id=item>
                    <label class="form-check-label" for="item">
                      {{item}}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <div class="collapse" id="AdvanceFilter">
            <div class="card card-body">
              <div class="row">
                <div class="col" v-for="category in categories" :key="category.name">
                  <h3>{{ category.name }}</h3>
                  <div class="form-check" v-for="item in category.items" :key="item">
                    <input
                      class="form-check-input custom-checkbox" 
                      type="checkbox"
                      v-model="checkedItems[category.name][item]"
                      :value="item.value"
                      :id="item" 
                    >
                    <label class="form-check-label" :for="item"> <!-- Use the "for" attribute to associate the label with the checkbox -->
                      {{ item }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecipePreviewList
            ref="SearchResults"
            title="Search Results"
            class="SearchResults"
            routeName = "/recipes/searchForRecepie"
            :useLocalStorage="true"
            :filters = "filters"

          />
    </div>
  </div>
</template>

<script>

import RecipePreviewList from '../components/RecipePreviewList.vue';
import categories from '../assets/categories.js'


export default {
  components: {
    RecipePreviewList,
  },
  data() {

    // initialize checkedItems so it could handle all our categories and items
    const checkedItems = {};
    categories.forEach((category) => {
      checkedItems[category.name] = {};
      category.items.forEach((item) => {
        checkedItems[category.name][item] = false;
      });
    });

    return {
      // returning all the data we need
      categories: categories,
      returnOptions: [5, 10, 15],
      selectedReturnOption: 5,
      checkedItems: checkedItems,
      searchflag: false,
      searchResults: [],
      querytosearch: '',
      filters: {
        query: '',
        intolerances: checkedItems.Intolerances,
        diet: checkedItems.Diet,
        cuisine: checkedItems.Cuisine,
        number: this.selectedReturnOption,
      }
    };
  },
  methods: {
    search() {
      // going through all the categories and items and printing the checked ones
      const checkedBoxes = {};
      for (const category in this.checkedItems) {
        checkedBoxes[category] = Object.keys(this.checkedItems[category]).filter((item) => {
          return this.checkedItems[category][item];
        });
      }
      
      console.log(checkedBoxes.Diet);
      this.filters.query = this.querytosearch;
      this.filters.intolerances = checkedBoxes.Intolerances;
      this.filters.diet = checkedBoxes.Diet;
      this.filters.cuisine = checkedBoxes.Cuisine;
      this.filters.number = this.selectedReturnOption;
      this.searchflag = true;
      console.log(this.filters);
    },
    localStoragehandler(){
      this.searchflag = true;
    },
    recipesToReturn(amount) {
      this.selectedReturnOption = amount;
    },
  }

};
  

</script>

<style lang="scss" scoped>
.card {
  margin-top: 20px;
  padding: 20px;
  width: 100%;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.form-check-inline {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.form-check-inline .form-check-input {
  margin-right: 5px;
}

#main-card{
  background-image: linear-gradient(to top, #e6b980 0%, #eacda3 100%);
}

.advanced {
  color: white
}

h1{
  color: white;
  font-weight: bold;
}

</style>
