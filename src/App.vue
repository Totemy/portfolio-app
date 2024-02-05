<template>
  <div class="container">
    <NavbarPage/>
    <div class="content">
      <router-view/>
    </div>
    <FooterPage/>
  </div>

</template>

<script>
import NavbarPage from "@/components/NavbarPage.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  name: 'App',
  components: {
    NavbarPage,
    FooterPage
  }
}
</script>
<style lang="scss">
@import "@/styles/app.scss";
</style>