<template>
    <div class="testcard" v-if="showCard">
      <div>

      
      <div class="container">
        <div>
            <button v-on:click="incorrect">Incorrect :(</button>
        </div>
        <div>
            <div class="flashcard" v-on:click="toggle">
              <div class="cardInfo">

                <p v-if="showQuestion">{{question}}</p>
                <p v-else>{{answer}}</p>
              </div>
            </div>
            <p>Level: {{level}}</p>
        </div>
         <div>
            <button v-on:click="correct">Correct!</button>
         </div>
      </div>
        <div class="small">
            <div>
                <div class="flashcard" v-on:click="toggle">
                  <div class="cardInfo">
    
                    <p v-if="showQuestion">{{question}}</p>
                    <p v-else>{{answer}}</p>
                  </div>
                </div>
                <p class="level">Level: {{level}}</p>
            </div><br/>
            <button v-on:click="correct">Correct!</button>
            <br/>
            <button v-on:click="incorrect">Incorrect :(</button>
            <br/>
        </div>
        
      </div>
    </div>
</template>

<script>
export default {
  name: "testCard",
  data: function() {
    return {
      showCard: true,
      showQuestion: true
    };
  },
  props: ["question", "answer", "level", "id"],
  methods: {
    toggle: function() {
      this.showQuestion = !this.showQuestion;
    },
    correct: function() {
      this.showCard = false;
      this.$axios
        .put("/test", {
          cardID: this.id,
          correct: 1
        })
        .then(response => {
          if (response.status == 204) {
            console.log("Good job!");
          }
        })
        .catch(err => alert(err));
    },
    incorrect: function() {
      this.showCard = false;
      this.$axios
        .put("/test", {
          cardID: this.id,
          correct: 0
        })
        .then(response => {
          if (response.status == 204) {
            console.log("Better luck next time!");
          }
        })
        .catch(err => alert(err));
    }
  }
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
}
.small {
  display: none;
}
.flashcard {
  width: 100%;
  height: 60%;
  margin: auto;
  background-color: #117;
}
.cardInfo {
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
button {
  margin: 10vh;
}

/*Small screens*/
@media (max-width: 560px) {
  .container {
    display: none;
  }
  .small {
    display: block;
  }
  .flashcard {
    width: 100%;
    height: 60vh;
    margin: auto;
    background-color: #117;
    text-align: center;
  }
  button {
    margin: 1rem;
  }
  .level {
    margin-left: 1rem;
  }
}
</style>
