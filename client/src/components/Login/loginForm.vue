<template>
    <div class="loginform">
        <form>
            <label for="username">User Name</label>
            <br/>
            <input type="text" name="username" required v-model="username">
            <br/>
            <label for="password">Password</label>
            <br/>
            <input type="password" name="password" required v-model="password">
            <br />
            <button type="submit" v-on:click="submitLogin">Login</button>
        </form>
    </div>
</template>

<script>
export default {
  name: "loginForm",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submitLogin: function(e) {
      e.preventDefault(); //prevent page from reloadng
      this.$axios
        .post("/login", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          if (response.status == 200) {
            this.$store.dispatch("checkLogin");
            this.$router.push({ path: "/dashboard" });
          }
        })
        .catch(err => alert(err));
    }
  },
  computed: {}
};
</script>

<style>
.loginform {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 2rem;
}
input {
  width: 70%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
input:focus {
  border: 3px solid #777;
}
</style>
