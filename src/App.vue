<template>
  <NavbarPage/>
  <MainPage/>
</template>

<script>
import MainPage from "@/components/MainPage.vue";
import NavbarPage from "@/components/NavbarPage.vue";
export default {
  name: 'App',
  components: {
    NavbarPage,
    MainPage
  }
}
</script>
<style lang="scss">
@import "@/styles/app.scss";
</style>