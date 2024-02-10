<template>
  <div class="about">
    <div class="about__sidebar">
      <div @click="toggleItems(1)" class="sidebar__header">personal-info</div>
      <div v-show="showItems[1]"  class="sidebar__items">
        <div @click="toggleItems(3)" class="sidebar__item">bio</div>
        <div  @click="toggleItems(4)" class="sidebar__item">interests</div>
        <div  @click="toggleItems(5)" class="sidebar__item">education</div>
      </div>
      <div @click="toggleItems(2)"  class="sidebar__header">contacts</div>
      <div class="sidebar__contacts">
        <div v-show="showItems[2]" class="sidebar__items">
          <div class="sidebar__mail">
            ihor.stryzhov@gmail.com
          </div>
          <div class="sidebar__phone">
            +380 98 202 44 17
          </div>

        </div>
     </div>
    </div>
    <div class="tab">
      <div class="tab__items">
        <div class="tab__item" v-show="showItems[3]" @click="toggleItems(3)">
          bio
        </div>
        <div class="tab__item"  v-show="showItems[4]" @click="toggleItems(4)">
          my skills
        </div>
        <div class="tab__item"  v-show="showItems[5]" @click="toggleItems(5)">
          education
        </div>
      </div>
      <div class="tab__objects">
        <div class="tab__item__mob" v-show="showItems[3]" @click="toggleItems(3)">
          bio
        </div>
        <div class="tab__object" v-show="showItems[3]">
          <p>
            As a front-end developer with one year of experience in outsourcing, <br>
            I specialize in delivering high-quality web solutions. <br>
            In my recent role, I focused on supporting CRUD operations and database services, <br>
            and I gained proficiency in using Cypress for testing purposes.  <br>
            One of my notable projects involved creating an e-commerce <br>
            platform using Vue.js integrated with Firebase, demonstrating my ability to build robust <br>
            and scalable web applications.<br>
            <br>
            I have a strong foundation in front-end development, <br>
            with expertise in crafting pixel-perfect HTML and SCSS c<br>
            ode for mobile and desktop platforms. My experience extends <br>
            to working with both custom SCSS styles and Bootstrap framework,<br>
            allowing me to adapt to various project requirements efficiently.<br>
          </p>
        </div>
        <div class="tab__item__mob"  v-show="showItems[4]" @click="toggleItems(4)">
          my skills
        </div>
        <div class="tab__object"  v-show="showItems[4]">
          <p>
            <br> /**
            <br> *   //hard skills
            <br> *   Vue.js
            <br> *   JavaScript
            <br> *   Firebase
            <br> *   HTML
            <br> *   CSS
            <br> *   Bootstrap
            <br> *
            <br> *   //have experiance with graphic tools:
            <br> *   Figma
            <br> *   Adobe Illustrator
          </p>
        </div>
        <div class="tab__item__mob"  v-show="showItems[5]" @click="toggleItems(5)">
          education
        </div>
        <div class="tab__object"  v-show="showItems[5]">
          <p>
            Academic History <br>
            <br>
            JUNIOR SPECIALIST`S DIPLOMA – Drogobych Mechanical
            technological college
            <br>
            01/09/2014 – 30/05/2018 – Drogobych, Ukraine
            <br>
            <br>
            BACHELOR`S DIPLOMA – Drohobych Ivan Franko State Pedagogical
            University<br>
            <br>
            01/09/2018 – 30/06/2020 – Drogobych, Ukraine
          </p>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showItems: Object.fromEntries(Array.from({ length: 5 }, (_, i) => [i + 1, false]))
    };
  },
  methods: {
    toggleItems(headerNumber) {
      this.showItems[headerNumber] = !this.showItems[headerNumber];
    },
  }
};
</script>