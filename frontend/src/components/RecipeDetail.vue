<template>
  <div class="detail-container">
    <button @click="goBack" class="back-button">
      <i class="fas fa-arrow-left"></i> Back
    </button>
    <div class="detail-content">
      <h2>{{ recipe.title }}</h2>
      <img :src="recipe.image" alt="Recipe Image" v-if="recipe.image" class="detail-image">
      <div class="recipe-info">
        <p><strong>Ingredients:</strong> {{ recipe.ingredients }}</p>
        <p><strong>Instructions:</strong> {{ recipe.instructions }}</p>
      </div>
      <div class="buttons">
        <button @click="editRecipe">
          <i class="fas fa-edit"></i> Edit
        </button>
        <button @click="deleteRecipe">
          <i class="fas fa-trash-alt"></i> Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../apiService';  // adjust the path as per your file structure

export default {
  data() {
    return {
      recipe: {}
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
    editRecipe() {
      this.$router.push({ name: 'EditRecipe', params: { id: this.recipe.id } });
    },
    deleteRecipe() {
      if (confirm('Are you sure you want to delete this recipe?')) {
        api.delete(`recipes/${this.recipe.id}/`)
          .then(response => {
            console.log('Recipe deleted:', response);
            this.$router.push('/'); // Redirect to recipe list after deletion
          })
          .catch(error => {
            console.error('Error deleting recipe:', error);
          });
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style>
.detail-container {
  padding: 1em;
}

.back-button {
  margin-bottom: 1em;
  padding: 0.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.2em; /* Adjust button font size */
  color: #2c2c1e; /* Button text color */
}

.back-button i {
  margin-right: 0.5em;
}

.back-button:hover {
  color: #879166; /* Hover color */
}

.detail-content {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content */
}

.detail-image {
  width: 100%;
  max-width: 600px; /* Set a max-width for the image */
  height: auto;
  object-fit: cover;
  margin-bottom: 1em;
}

.recipe-info {
  width: 60%; /* Set the width to 60% */
  text-align: left; /* Align text to the left */
}

.buttons {
  margin-top: 1em;
  display: flex;
  gap: 0.5em; /* Adjust gap between buttons */
}

button {
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
</style>
