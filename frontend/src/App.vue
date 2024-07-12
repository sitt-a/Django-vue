<template>
  <div id="app">
    <nav class="navbar">
      <span class="nav-brand">Habuu</span>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/add" class="nav-link">Add Recipe</router-link>
      <router-link to="/login" class="nav-link">Login</router-link>
      <router-link to="/signup" class="nav-link">Signup</router-link>
      <button v-if="isLoggedIn" @click="logout" class="nav-link">Logout</button>
    </nav>
    <router-view/> <!-- This renders the matched component for the route -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: false  // Example: Assuming initially not logged in
    };
  },
  methods: {
    logout() {
      // Implement logout functionality here
      this.isLoggedIn = false;
      this.$router.push({ name: 'LoginPage' }); // Redirect to login page after logout
    }
  }
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: flex-end; /* Align links to the right */
  background-color: #586e05; /* Black background */
  padding: 1em; /* Add padding for spacing */
  align-items: center; /* Center items vertically */
}

.nav-link {
  color: #fff; /* White text color */
  text-decoration: none; /* Remove underline */
  margin-left: 1em; /* Add space between links */
}

.nav-link:hover {
  text-decoration: underline; /* Underline on hover */
}

button.nav-link {
  background: none; /* Transparent background */
  border: none; /* Remove border */
  cursor: pointer; /* Pointer cursor */
  color: #fff; /* White text color */
  margin-left: 1em; /* Add space between links */
}

button.nav-link:hover {
  text-decoration: underline; /* Underline on hover */
}

.nav-brand {
  color: #fff; /* White text color */
  font-size: 1.5em; /* Bigger size */
  font-weight: bold; /* Bold text */
  margin-right: auto; /* Push other items to the right */
}
</style>
