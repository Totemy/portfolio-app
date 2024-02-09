<template>
  <div class="navbar">
    <div class="navbar__item" >
      <router-link to="/"> ihor-stryzhnov</router-link></div>
    <div  class="navbar__item" :class="{ 'active': activeRoute === '/' }">
      <router-link to="/"> _hello</router-link>
    </div>
    <div class="navbar__item" :class="{ 'active': activeRoute === '/about' }">
      <router-link to="/about"> _about-me</router-link>
    </div>
    <div  class="navbar__item" :class="{ 'active': activeRoute === '/projects' }">
      <router-link to="/projects"> _projects</router-link>
    </div>
    <div  class="navbar__item" :class="{ 'active': activeRoute === '/contact-me' }">
      <router-link to="/contact-me">  _contact-me</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeRoute: '' // Initialize active route
    };
  },
  watch: {
    '$route'(to) {
      this.activeRoute = to.path;
    }
  }
}
</script>