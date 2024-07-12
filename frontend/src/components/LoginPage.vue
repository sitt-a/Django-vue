<template>
    <div class="login-container">
      <div class="login-card">
        <h2 class="login-title">Login</h2>
        <form @submit.prevent="login" class="login-form">
          <div class="form-group">
            <label for="username" class="form-label">Username</label>
            <input type="text" id="username" v-model="username" required class="form-input" />
          </div>
          <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <input type="password" id="password" v-model="password" required class="form-input" />
          </div>
          <button type="submit" class="login-button">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import api from '../apiService';
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        api.post('login/', { username: this.username, password: this.password })
          .then(response => {
            console.log('Login successful:', response);
            // Handle successful login, e.g., store token in local storage
            // Redirect to home page
            this.$router.push({ name: 'RecipeList' }); // Assuming RecipeList is your home page
          })
          .catch(error => {
            console.error('Login error:', error);
            // Handle login error, e.g., show error message
          });
      }
    }
  };
  </script>
  
  <style>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  .login-card {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
  }
  
  .login-title {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .form-label {
    font-weight: bold;
    color: #555;
    margin-bottom: 0.5rem;
  }
  
  .form-input {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }
  
  .form-input:focus {
    outline: none;
    border-color: #2c2c1e;
  }
  
  .login-button {
    background-color: #2c2c1e;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .login-button:hover {
    background-color: #4b4b38
  }
  
  .login-button:active {
    background-color: #3f3f3f;
  }
  </style>