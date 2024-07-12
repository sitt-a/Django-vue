<template>
  <div>
    <h2>Recipe List</h2>
    <ul v-if="recipes.length" class="recipe-list">
      <li v-for="recipe in recipes" :key="recipe.id" class="recipe-item">
        <router-link :to="{ name: 'RecipeDetail', params: { id: recipe.id } }" class="recipe-link">
          <div class="recipe-header">
            <img :src="recipe.image" alt="Recipe Image" class="recipe-image" v-if="recipe.image">
            <div class="recipe-details">
              <h3>{{ recipe.title }}</h3>
              <p><strong>Ingredients:</strong> {{ recipe.ingredients }}</p>
             
            </div>
          </div>
        </router-link>
        <div class="buttons">
          <button @click="editRecipe(recipe.id)">
            <i class="fas fa-edit"></i> <!-- Edit icon -->
          </button>
          <button @click="deleteRecipe(recipe.id)">
            <i class="fas fa-trash-alt"></i> <!-- Delete icon -->
          </button>
        </div>
      </li>
    </ul>
    <p v-else>No recipes available.</p>
  </div>
</template>

<script>
import api from '../apiService';  // adjust the path as per your file structure

export default {
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    this.fetchRecipes();
  },
  methods: {
    fetchRecipes() {
      api.get('recipes/')
        .then(response => {
          console.log('API Response:', response.data);
          this.recipes = response.data;
        })
        .catch(error => {
          console.error('Error fetching recipes:', error);
        });
    },
    editRecipe(recipeId) {
      // Handle the edit action (e.g., navigate to an edit page)
      this.$router.push({ name: 'EditRecipe', params: { id: recipeId } });
    },
    deleteRecipe(recipeId) {
      if (confirm('Are you sure you want to delete this recipe?')) {
        api.delete(`recipes/${recipeId}/`)
          .then(response => {
            console.log('Recipe deleted:', response);
            this.fetchRecipes(); // Refresh the list after deletion
          })
          .catch(error => {
            console.error('Error deleting recipe:', error);
          });
      }
    }
  }
}
</script>

<style>
.recipe-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Display recipes in two columns */
  gap: 1em; /* Adjust gap between items */
}

.recipe-item {
  border-bottom: 1px solid #ccc;
  padding: 1em;
  display: flex;
  flex-direction: column;
}

.recipe-header {
  display: flex;
  align-items: center;
}

.recipe-image {
  width: 200px; /* Set width to 150px */
  height: 150px; /* Set height to 100px */
  object-fit: cover; /* Ensure the image covers the specified dimensions */
  margin-right: 1em; /* Add spacing between image and details */
  border-radius: 5px; /* Optional: Add border radius for a rounded image */
}

.recipe-details {
  flex: 1; /* Expand to take remaining space */
}

.recipe-details h3 {
  margin: 0;
  font-size: 1.2em; /* Adjust the font size of the title */
  color: #333;
}

.recipe-details p {
  margin: 0.5em 0;
  font-size: 1em;
  color: #666;
}

.buttons {
  margin-top: 1em;
  display: flex;
}

button {
  margin-right: 0.5em;
  padding: 0.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

button i {
  font-size: 1.2em; /* Adjust icon size */
  color: #2c2c1e; /* Icon color */
}

button:hover i {
  color: #879166; /* Hover color */
}

.recipe-link {
  text-decoration: none;
  color: inherit;
}

.recipe-link:hover {
  background-color: #f5f5f5;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
</style>
