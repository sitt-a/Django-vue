import { createRouter, createWebHistory } from 'vue-router';
import RecipeList from '../components/RecipeList.vue';
import AddRecipe from '../components/AddRecipe.vue';
import EditRecipe from '../components/EditRecipe.vue';
import LoginPage from '../components/LoginPage.vue'; // Example login page
import SignupPage from '../components/SignupPage.vue'; // Example signup page
import RecipeDetail from '../components/RecipeDetail.vue'; 
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'RecipeList',
      component: RecipeList
    },
    {
      path: '/add',
      name: 'AddRecipe',
      component: AddRecipe
    },
    {
      path: '/edit/:id',
      name: 'EditRecipe',
      component: EditRecipe
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'SignupPage',
      component: SignupPage
    },
    {
      path: '/recipe/:id',
      name: 'RecipeDetail',
      component: RecipeDetail,
      props: true
    }

  ]
});

export default router;
