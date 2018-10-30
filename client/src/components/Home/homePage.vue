<template>
  <div class="homePage">
    <!--First Section-->
    <div class="showcase">
      <div class="content">
        <i class="fas fa-comments fa-5x"></i>
        <div class="title">
          Welcome to Remember
        </div>
        <div class="text">
          A small app for smart flashcards.
        </div>
      </div>
    </div>
    <!--Blurb on remembering-->
    <section class="blurb bg-dark">
      <div class="container grid-3 center">
        <div>
          <i class="fas fa-lightbulb fa-3x"></i>
          <h3>Inefficient Memorization</h3>
          <p>Rereading, cramming and listening to lectures are all techniques that are poor for retaining information.</p>
        </div>
        <div>
            <i class="fas fa-lightbulb fa-3x"></i>
          <h3>The Forgetting Curve</h3>
          <p>Memory exponentially decays if not actively accessed or practiced. Retrieving memories reinforces the pathways they live in.</p>
        </div>
        <div>
          <i class="fas fa-lightbulb fa-3x"></i>
          <h3>Spaced Repetition</h3>
          <p>The best way to remember something is to space out practice for it at increasing intervals.</p>
        </div>
      </div>
    </section>
    <!--Source Code-->
    <section class="code bg-light">
      <div class="container grid-2">
        <div class="center">
          <i class="fas fa-laptop-code fa-10x"></i>
        </div>
        <div>
          <h3>Source Code</h3>
          <p>Check out the code for this application <a href="https://github.com/danielduyvo/remember">here</a>! Created by Daniel Vo, based on the Leitner System. Idea inspired by Nicky Case's <a href="https://ncase.me/remember">comic</a> on memory.</p>
        </div>
      </div>
    </section>
    <section class="signup">
      <h4>Interested? Create an account here!</h4>
      <form>
          <label for="username">User Name</label>
          <br/>
          <input type="text" name="username" required v-model="username">
          <br/>
          <label for="password">Password</label>
          <br/>
          <input type="password" name="password" required v-model="password">
          <br/>
          <label for="email">Email</label>
          <br/>
          <input type="email" name="email" required v-model="email">
          <br />
          <button type="submit" v-on:click="submitLogin">Make Account!</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "homePage",
  data: function() {
    return {
      username: "",
      password: "",
      email: ""
    };
  },
  methods: {
    submitLogin: function(e) {
      e.preventDefault(); //prevent page from reloadng
      this.$axios
        .post("/create", {
          username: this.username,
          password: this.password,
          email: this.email
        })
        .then(response => {
          if (response.status == 201) {
            this.$router.push({ path: "/login" });
          }
        })
        .catch(err => alert(err));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.showcase::after {
  content: "";
  height: 100vh;
  width: 100%;
  background-image: url(../../assets/idea.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  filter: blur(10px);
  -webkit-filter: blur(10px);
  transition: all 1000ms;
}
.showcase:hover::after {
  filter: blur(0px);
  -webkit-filter: blur(0px);
}
.content {
  position: absolute;
  color: #444;
  z-index: 1;
  margin: auto;
  width: 300px;
  height: 350px;
  top: 20vh;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  transition: all 1000ms;
}
.content .title {
  font-size: 2.2rem;
  margin-top: 1rem;
}
.showcase:hover .content {
  filter: blur(6px);
  -webkit-filter: blur(6px);
}
.container {
  max-width: 960px;
  margin: auto;
  overflow: hidden;
  padding: 4rem 1rem;
  display: grid;
}
.fa-lightbulb {
  filter: blur(10px);
  -webkit-filter: blur(10px);
  transition: all 1000ms;
}
.fa-lightbulb:hover {
  filter: blur(0px);
  -webkit-filter: blur(0px);
}
.grid-3 {
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}
.grid-2 {
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
.center {
  text-align: center;
  margin: auto;
}
.bg-light {
  background: #f4f4f4;
  color: #111;
}
.bg-dark {
  background: #111;
  color: #f4f4f4;
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
img {
  max-width: 100%;
}
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.signup {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 2rem;
}
/*Small screens*/
@media (max-width: 560px) {
  .showcase::after {
    height: 70vh;
  }
  .content .text {
    display: none;
  }
  .grid-2 {
    grid-template-columns: 1fr;
  }
  .grid-3 {
    grid-template-columns: 1fr;
  }
  .blurb div {
    border-bottom: #333 dashed 1px;
    padding: 1.2rem 1rem;
  }
}

/*Landscape*/
@media (max-height: 500px) {
  .content .text {
    display: none;
  }
}
</style>
