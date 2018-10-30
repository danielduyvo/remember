<template>
    <div class="test">
      <h3 v-if="!(this.$store.state.loggedin)">Please login to access!</h3>
        <testApp v-if="this.$store.state.loggedin"/>
    </div>
</template>

<script>
import testApp from "@/components/Test/testApp.vue";
export default {
  name: "test",
  components: {
    testApp
  }
};
</script>
<style scoped>
h3 {
  width: 80%;
  margin: auto;
}
</style>
