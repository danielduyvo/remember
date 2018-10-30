<template>
    <div v-show="notDeleted"  class="card">
            <form>
                <label for="question">Question</label>
                <br/>
                <textarea name="question" rows="10" cols="30" required v-model="Question"></textarea>
                <br/>
                <label for="answer">Answer</label>
                <br/>
                <textarea name="answer" rows="10" cols="30" required v-model="Answer"></textarea>
                <br/>
                <label for="level">Level ==> will see this card in 2^(level) days</label>
                <br/>
                <input type="text" name="level" required v-model="Level">
                <br />
                <button type="submit" v-on:click="submitCard" class="green">Submit</button>
                <button v-on:click="deleteCard" class="red">Delete</button>
            </form>
            <hr/>
    </div>
</template>

<script>
export default {
  name: "card",
  props: ["id", "question", "answer", "level"],
  data: function() {
    return {
      Question: this.question,
      Answer: this.answer,
      Level: this.level,
      notDeleted: true
    };
  },
  methods: {
    submitCard: function(e) {
      e.preventDefault(); //prevent page from reloadng
      this.$axios
        .put(`/cards/${this.id}`, {
          question: this.Question,
          answer: this.Answer,
          level: this.Level
        })
        .then(response => {
          if (response.status == 201) {
            this.$router.push({ path: "/dashboard" });
          }
        })
        .catch(err => alert(err));
    },
    deleteCard: function(e) {
      e.preventDefault();
      this.$axios
        .delete(`/cards/${this.id}`, {})
        .then(response => {
          if (response.status == 204) {
            this.notDeleted = false;
          }
        })
        .catch(err => alert(err));
    }
  }
};
</script>
<style scoped>
.card {
  width: 80%;
  margin: auto;
}
input {
  width: 10rem;
}
button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.green {
  background-color: #4caf50; /* Green */
}
.red {
  background-color: #f44336; /* Red */
}
</style>
