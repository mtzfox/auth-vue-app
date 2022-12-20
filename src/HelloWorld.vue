<template class="container">

  <div v-if="isAuthenticated && !isLoading">
      <h2>Welcome {{user.nickname}}, you are logged in.</h2>
      <h4>{{user.email}}</h4> 
      <button id="logoutButton"
        class="btn btn-primary btn-margin toggle"
        :class="[isHidden ? '' : 'hidden' ]"
        @click="toggle" v-if="[isAuthenticated ?? !isHidden?.logout()]">Log out</button>
  </div>
    
  <div v-if="!isAuthenticated && !isLoading">
      <h2>Welcome, you are not logged in.</h2>
      <button id="loginButton"
      class="btn btn-primary btn-margin toggle"
      :class="[!isHidden ? '' : 'hidden']"
      @click="toggle" v-if="login()" >Log in</button>
  </div>
</template>

<script>
  import { useAuth0 } from '@auth0/auth0-vue';
  export default {
    setup() {
      const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
      return {
        data() {
          return {
            isHidden: false,
          }
        },
        name: 'loginData',
        isAuthenticated: isAuthenticated,
        isLoading: isLoading,
        user: user,
        toggle() {
          this.isHidden = !this.isHidden;
        },
        login: () => {
          loginWithRedirect();
        },
        logout: () => {
          logout({ 
            returnTo: window.location.origin,
          });
        }
      } 
    }
  };

  // export default {
  //   setup() {
      
  //     const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  //     return {
  //       name: 'loginData',
  //       isAuthenticated: isAuthenticated,
  //       isLoading: isLoading,
  //       user: user,
  //       login: () => {
  //         loginWithRedirect();
  //       },
  //       logout: () => {
  //         logout({ 
  //           returnTo: window.location.origin
  //         });
  //       }
  //     } 
  //   }
  // };
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