<template>
    <div class="edit-recipe">
      <h2 class="edit-recipe__title">Edit Recipe</h2>
      <form class="edit-recipe__form" @submit.prevent="updateRecipe">
        <div class="edit-recipe__form-group">
          <label class="edit-recipe__label" for="title">Title</label>
          <input class="edit-recipe__input" type="text" id="title" v-model="recipe.title" required>
        </div>
        <div class="edit-recipe__form-group">
          <label class="edit-recipe__label" for="ingredients">Ingredients</label>
          <textarea class="edit-recipe__textarea" id="ingredients" v-model="recipe.ingredients" required></textarea>
        </div>
        <div class="edit-recipe__form-group">
          <label class="edit-recipe__label" for="instructions">Instructions</label>
          <textarea class="edit-recipe__textarea" id="instructions" v-model="recipe.instructions" required></textarea>
        </div>
        <div class="edit-recipe__form-group">
          <label class="edit-recipe__label" for="image">Image</label>
          <input class="edit-recipe__input-file" type="file" id="image" @change="handleFileUpload" accept="image/*">
        </div>
        <button class="edit-recipe__submit-btn" type="submit">Update Recipe</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from '../apiService';
  
  export default {
    data() {
      return {
        recipe: {
          title: '',
          ingredients: '',
          instructions: '',
          image: null
        }
      };
    },
    created() {
      this.fetchRecipe();
    },
    methods: {
      fetchRecipe() {
        const recipeId = this.$route.params.id;
        api.get(`recipes/${recipeId}/`)
          .then(response => {
            this.recipe = response.data;
          })
          .catch(error => {
            console.error('Error fetching recipe:', error);
          });
      },
      updateRecipe() {
        const recipeId = this.$route.params.id;
        let formData = new FormData();
        formData.append('title', this.recipe.title);
        formData.append('ingredients', this.recipe.ingredients);
        formData.append('instructions', this.recipe.instructions);
        formData.append('image', this.recipe.image);
  
        api.put(`recipes/${recipeId}/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(response => {
            console.log('Recipe updated successfully:', response);
            this.$router.push({ name: 'RecipeList' }); // Navigate to RecipeList view
          })
          .catch(error => {
            console.error('Error updating recipe:', error);
          });
      },
      handleFileUpload(event) {
        this.recipe.image = event.target.files[0];
      }
    }
  };
  </script>
  
  <style>
  .edit-recipe {
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .edit-recipe__title {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
  }
  
  .edit-recipe__form-group {
    margin-bottom: 1.5rem;
  }
  
  .edit-recipe__label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #555;
  }
  
  .edit-recipe__input,
  .edit-recipe__textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    color: #333;
  }
  
  .edit-recipe__input-file {
    display: block;
    margin-top: 0.5rem;
  }
  
  .edit-recipe__submit-btn {
    display: block;
    width: 100%;
    padding: 0.75rem 1.5rem;
    background-color: #2c2c1e;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .edit-recipe__submit-btn:hover {
    background-color: #474734;
  }
  
  .edit-recipe__submit-btn:active {
    background-color: #00408d;
  }
  </style>