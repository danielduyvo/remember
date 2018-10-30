<template>
    <div class="dashboard">
        <cards />
    </div>
</template>

<script>
import cards from "@/components/Cards/cards.vue";
export default {
  name: "dashboard",
  components: {
    cards
  }
};
</script>
