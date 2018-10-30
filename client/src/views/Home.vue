<template>
  <div class="home">
    <homePage/>
  </div>
</template>

<script>
// @ is an alias to /src
import homePage from "@/components/Home/homePage.vue";

export default {
  name: "home",
  components: {
    homePage
  }
};
</script>
