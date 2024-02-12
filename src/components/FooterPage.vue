<template>
  <div class="footer">
    <div class="footer__item">
      find me in
    </div>
    <div class="footer__item" @click="openTelegram">
        <img src="../assets/img/telegram.svg" class="footer__img" alt="logo"/>
    </div>
    <div class="footer__item" @click="openlinkedIn">
      <img src="../assets/img/linkedin-fill_white.svg" class="footer__img" alt="logo"/>
    </div>
    <div class="footer__item__mob" @click="openGit">
      <img src="../assets/img/github.svg" class="footer__img" alt="logo"/>
    </div>
    <div class="footer__item footer__item-github" >
      <a class="footer__item__href_mob" href="https://github.com/Totemy" target="_blank">@totemy</a>
    </div>

  </div>
</template>
<script>
export default {
  methods: {
    openGit() {
      const url = 'https://github.com/Totemy';
      window.open(url, '_blank');
    },
    openlinkedIn() {
      const url = 'https://www.linkedin.com/in/ihor-stryzhnov-2697321ab/';
      window.open(url, '_blank');
    },
    openTelegram() {
      const url = 'https://t.me/is_totem';
      window.open(url, '_blank');
    }
  }
}
</script>