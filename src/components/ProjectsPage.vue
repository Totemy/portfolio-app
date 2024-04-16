<template>
  <div class="projects">
    <h3 class="projects__header">// projects</h3>
    <div class="projects__sidebar">
      <div>

      </div>
    </div>
    <div>
      <div class="projects__items">

        <div class="projects__item">
          <div class="projects__header">
            <h3>E-commerce</h3>
          </div>
          <div class="projects__card-body">
            <img class="projects__item-img" src="/projects/e-commerce.jpg">
            <div class="projects__item-body">
              <p>This commercial website, designed for clothing sales. Leveraging Vue.js and Firebase for database management. </p>
              <button class="btn btn-primary" @click="openEcomerce">
                view-project
              </button>
            </div>
          </div>
        </div>
        <div class="projects__item">
          <div class="projects__header">
            <h3>dashboard</h3>
          </div>
          <div class="projects__card-body">
            <div>
              <img class="projects__item-img" src="/projects/dashboard.jpg">
            </div>

            <div class="projects__item-body">
              <p>This is one of the pages that is designed specifically for pixel perfect display, it also has a mobile version of itself</p>
              <button class="btn btn-primary" @click="openDash">
                view-project
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    openEcomerce() {
      const url = 'https://krossu-kedu.netlify.app/';
      window.open(url, '_blank');
    },
    openDash() {
      const url = 'https://github.com/Totemy/dashboard-app';
      window.open(url, '_blank');
    },
    openMarket() {
      const url = 'https://twitch-prime-wot.netlify.app/';
      window.open(url, '_blank');
    }
  }
}
</script>