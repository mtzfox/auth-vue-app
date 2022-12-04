<template class="container">

  <section>
    <div v-if="isAuthenticated && !isLoading">
        <h2>Welcome {{user.nickname}}, you are logged in.</h2>
        <h4>{{user.email}}</h4>
    <button 
        class="btn btn-primary btn-margin"
        @click="logout">Log out</button>
  </div>
    <div v-if="!isAuthenticated && !isLoading">
      <button 
          class="btn btn-primary btn-margin" 
          @click.prevent="login">Login</button>
    </div>
</section>
    
  
</template>

<script>
  import { useAuth0 } from '@auth0/auth0-vue';
    

  export default {
    setup() {
      
      const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

      return {
        name: 'loginData',
        isAuthenticated: isAuthenticated,
        isLoading: isLoading,
        user: user,
        login: () => {
          loginWithRedirect();
        },
        logout: () => {
          logout({ 
            returnTo: window.location.origin
          });
        }
      } 
    }
  };
</script>

<style>
#app {
    background-color: slateblue;
    border-radius: 5px;
}
#mobileAuthNavBar {
  min-height: 125px;
  justify-content: space-between;
}

</style>