<template>
  <div id="app">
    <div id="nav" class="topnav" v-bind:class="{ responsive: isResponsive}">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/login" v-show="!(loggedin)">Login</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/test">Test</router-link>
      <a class="logout" v-on:click="logout" v-show="loggedin">Logout</a>
      <a href="#" class="icon" v-on:click="toggle">
          <i class="fa fa-bars"></i>
        </a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data: function() {
    return { isResponsive: false };
  },
  computed: {
    loggedin: function() {
      return this.$store.state.loggedin;
    }
  },
  methods: {
    logout: function() {
      this.$axios
        .get("/logout")
        .then(response => {
          if (response.status == 200) {
            location.reload();
          }
        })
        .catch(err => alert(err));
    },
    toggle: function() {
      this.isResponsive = !this.isResponsive;
    }
  },
  mounted: function() {
    this.$store.dispatch("checkLogin");
  }
};
</script>
<style>
#nav {
  background-color: #333;
  overflow: hidden;
  z-index: 2;
}

#nav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

#nav a:hover {
  background-color: #ddd;
  color: black;
}

#nav a.router-link-exact-active {
  background-color: #4caf50;
  color: white;
}

#nav .icon {
  display: none;
}

.logout {
  background-color: #f44336;
  border: none;
  color: white;
  padding: 14px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

@media screen and (max-width: 600px) {
  #nav a:not(:first-child) {
    display: none;
  }
  #nav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  #nav.responsive {
    position: relative;
  }
  #nav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  #nav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
