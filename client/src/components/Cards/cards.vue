<template>
    <div class="cards">
      <div v-if="this.$store.state.loggedin">
        <h3 v-if="cards.length == 0">Sorry, you don't have any cards yet :(</h3>
        <card v-for="card in cards" v-bind:key="card.id" v-bind:id="card.id" v-bind:question="card.question" v-bind:answer="card.answer" v-bind:level="card.level"></card>
        <addcard/>
      </div>
      <h3 v-if="!(this.$store.state.loggedin)" class="pleaseLogin">Please login to access!</h3>
    </div>
</template>

<script>
import card from "@/components/Cards/card.vue";
import addcard from "@/components/Cards/addcard.vue";
export default {
  name: "cards",
  components: {
    addcard,
    card
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    }
  },
  mounted() {
    this.$store.dispatch("getCards");
  }
};
</script>
<style scoped>
.pleaseLogin {
  width: 80%;
  margin: auto;
}
</style>
