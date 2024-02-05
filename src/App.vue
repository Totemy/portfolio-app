<template>
  <div class="container">
    <NavbarPage/>
    <MainPage/>
    <FooterPage/>
  </div>

</template>

<script>
import MainPage from "@/components/MainPage.vue";
import NavbarPage from "@/components/NavbarPage.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  name: 'App',
  components: {
    NavbarPage,
    MainPage,
    FooterPage
  }
}
</script>
<style lang="scss">
@import "@/styles/app.scss";
</style>