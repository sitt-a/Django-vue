<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow-sm">
          <div class="card-header bg-primary text-white">
            <h1 class="text-center m-0">Add Recipe</h1>
          </div>
          <div class="card-body">
            <form @submit.prevent="addRecipe">
              <div class="mb-4">
                <label for="title" class="form-label">Title:</label>
                <input type="text" class="form-control form-control-lg" id="title" v-model="title" required />
              </div>
              <div class="mb-4">
                <label for="ingredients" class="form-label">Ingredients:</label>
                <textarea class="form-control form-control-lg" id="ingredients" v-model="ingredients" rows="6" required></textarea>
              </div>
              <div class="mb-4">
                <label for="instructions" class="form-label">Instructions:</label>
                <textarea class="form-control form-control-lg" id="instructions" v-model="instructions" rows="10" required></textarea>
              </div>
              <div class="mb-">
                <label for="image" class="form-label">Image:</label>
                <input type="file" class="form-control form-control-lg" id="image" @change="onFileChange" />
              </div>
              <div class="d-grid mt-10">
                <button type="submit" class="btn btn-primary btn-lg btn-block">Add Recipe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      ingredients: '',
      instructions: '',
      image: null
    };
  },
  methods: {
    onFileChange(e) {
      this.image = e.target.files[0];
    },
    addRecipe() {
      let formData = new FormData();
      formData.append('title', this.title);
      formData.append('ingredients', this.ingredients);
      formData.append('instructions', this.instructions);
      if (this.image) {
        formData.append('image', this.image);
      }

      axios.post('http://localhost:8000/api/recipes/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log(response.data);
        this.$router.push('/');
      })
      .catch(error => {
        console.error('Error adding recipe:', error);
      });
    }
  }
};
</script>

<style scoped>
.card {
  border: none;
  border-radius: 12px;
}

.card-header {
  border-radius: 12px 12px 0 0;
}

.card-body {
  padding: 20px;
}

.form-label {
  font-weight: bold;
}

.form-control {
  width: 100%;
  font-size: 1.1rem;
}

textarea.form-control {
  resize: vertical;
}

.btn-primary {
  background-color: #2c2c1e;
  border-color: #2c2c1e;
}

.btn-primary:hover {
  background-color: #4b4b38;
  border-color: #4b4b38;
}


</style>