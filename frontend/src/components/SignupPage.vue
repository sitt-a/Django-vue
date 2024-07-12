<template>
    <div class="container">
      <div class="card">
        <h2 class="card-title">Join Now</h2>
        <form @submit.prevent="register" class="card-form">
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" v-model="email" required class="form-input" />
          </div>
          <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <input type="password" id="password" v-model="password" required class="form-input" />
          </div>
          <button type="submit" class="btn btn-primary btn-block">Create Account</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import api from '../apiService';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      register() {
        api.post('register/', { email: this.email, password: this.password })
          .then(response => {
            console.log('Registration successful:', response);
            // Handle successful registration, e.g., show success message
            // Redirect to login page or home page
            this.$router.push({ name: 'LoginPage' }); // Assuming LoginPage is your login page
          })
          .catch(error => {
            console.error('Registration error:', error);
            // Handle registration error, e.g., show error message
          });
      }
    }
  };
  </script>
  
  <style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  .card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    width: 400px;
  }
  
  .card-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .card-form .form-group {
    margin-bottom: 1.5rem;
  }
  
  .form-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  .form-input {
    border: 1px solid #ddd;
    border-radius: 4px;
    display: block;
    font-size: 1rem;
    padding: 0.5rem;
    width: 100%;
  }
  
  .btn {
    background-color: #2c2c1e;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;
    width: 100%;
  }
  
  .btn:hover {
    background-color: #4b4b38;
  }
  
  .btn:active {
    background-color: #4b4b38;
  }
  
  .btn-block {
    display: block;
    width: 100%;
  }
  </style>