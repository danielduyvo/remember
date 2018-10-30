<template>
    <div class="testapp">
      <div v-if="this.$store.state.loggedin">

        <testCard v-for="card in testCards" v-bind:key="card.id" v-bind:id="card.id" v-bind:question="card.question" v-bind:answer="card.answer" v-bind:level="card.level"></testCard>
      </div>
      <div v-if="!(this.$store.state.loggedin)">
        <h3>Sorry, please login to access!</h3>
      </div>
    </div>
</template>

<script>
import testCard from "@/components/Test/testCard.vue";
export default {
  name: "testApp",
  components: {
    testCard
  },
  computed: {
    testCards() {
      return this.$store.state.testCards;
    }
  },
  mounted() {
    this.$store.dispatch("getTestCards");
  }
};
</script>
<style scoped>
h3 {
  width: 80%;
  margin: auto;
}
</style>
