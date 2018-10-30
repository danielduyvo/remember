<template>
    <div class="login">
        <loginForm />
    </div>
</template>

<script>
import loginForm from "@/components/Login/loginForm.vue";
export default {
  name: "login",
  components: {
    loginForm
  }
};
</script>
