<template>
  <div class="navbar">
    <div class="navbar__items">
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
    <div>
      <div class="navbar__mobile">
        <div class="navbar__mobile__logo">
          ihor-stryzhnov
        </div>
        <div class="navbar__mobile__burger"  @click="openBar = !openBar">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
      <div class="navbar__mobile__list" v-if="openBar">
        <div class="navbar__mobile__item">
          <router-link to="/"> _hello</router-link>
        </div>
        <div class="navbar__mobile__item">
          <router-link to="/about"> _about-me</router-link>
        </div>
        <div class="navbar__mobile__item">
          <router-link to="/projects"> _projects</router-link>
        </div>
        <div class="navbar__mobile__item">
          <router-link to="/contact-me">  _contact-me</router-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeRoute: '', // Initialize active route
      openBar: false
    };
  },
  watch: {
    '$route'(to) {
      this.activeRoute = to.path;
      this.openBar = false;
    }
  }
}
</script>