<template>
    <div class="addcard">
        <h3>Add a New Card!</h3>
        <form>
            <label for="question">Question</label>
            <br/>
            <textarea name="question" rows="10" cols="30" required v-model="question"></textarea>
            <br/>
            <label for="answer">Answer</label>
            <br/>
            <textarea name="answer" rows="10" cols="30" required v-model="answer"></textarea>
            <br />
            <button type="submit" v-on:click="submitCard">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
  name: "addcard",
  data: function() {
    return {
      question: "",
      answer: ""
    };
  },
  methods: {
    submitCard: function(e) {
      e.preventDefault(); //prevent page from reloadng
      this.$axios
        .post("/cards", {
          question: this.question,
          answer: this.answer
        })
        .then(response => {
          if (response.status == 201) {
            this.$store.dispatch("getCards");
          }
        })
        .catch(err => alert(err));
    }
  }
};
</script>

<style scoped>
.addcard {
  width: 80%;
  margin: auto;
}
button {
  border: none;
  background-color: #4caf50; /* Green */
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
