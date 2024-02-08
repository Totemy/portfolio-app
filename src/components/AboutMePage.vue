<template>
  <div class="about">
    <div class="about__sidebar">
      <div @click="toggleItems(1)" class="sidebar__header">personal-info</div>
      <div v-show="showItems[1]"  class="sidebar__items">
        <div class="sidebar__item">bio</div>
        <div class="sidebar__item">interests</div>
        <div class="sidebar__item">education</div>
      </div>
      <div @click="toggleItems(2)"  class="sidebar__header">contacts</div>
      <div class="sidebar__contacts">
        <div v-show="showItems[2]" class="sidebar__items">
          ihor.stryzhov@gmail.com
          +380 98 202 44 17
        </div>
     </div>
    </div>
    <div class="tab">
      <div class="tab__items">
        <div class="tab__item">
          bio
          <button>x</button>
        </div>
        <div class="tab__item">
          education
          <button>x</button>
        </div>
      </div>
      <div class="tab__objects">
        <div class="tab__object">
          <p>
            /** <br/>
            * About me <br/>
            * I have 5 years of еxperience in web <br/>
            * development lorem ipsum dolor sit amet, <br/>
            * consectetur adipiscing elit, sed do eiusmod <br/>
            * tempor incididunt ut labore et dolore <br/>
            * magna aliqua. Ut enim ad minim veniam, <br/>
            * quis nostrud exercitation ullamco laboris <br/>
            * nisi ut aliquip ex ea commodo consequat. <br/>
            * Duis aute irure dolor in reprehenderit in <br/>
            * <br/>
            * Duis aute irure dolor in reprehenderit in <br/>
            * voluptate velit esse cillum dolore eu fugiat <br/>
            * nulla pariatur. Excepteur sint occaecat <br/>
            * officia deserunt mollit anim id est laborum. <br/>
            */
          </p>
        </div>
        <div class="tab__object">
          <p>
            /** <br/>
            * About me <br/>
            * I have 5 years of еxperience in web <br/>
            * development lorem ipsum dolor sit amet, <br/>
            * consectetur adipiscing elit, sed do eiusmod <br/>
            * tempor incididunt ut labore et dolore <br/>
            * magna aliqua. Ut enim ad minim veniam, <br/>
            * quis nostrud exercitation ullamco laboris <br/>
            * nisi ut aliquip ex ea commodo consequat. <br/>
            * Duis aute irure dolor in reprehenderit in <br/>
            * <br/>
            * Duis aute irure dolor in reprehenderit in <br/>
            * voluptate velit esse cillum dolore eu fugiat <br/>
            * nulla pariatur. Excepteur sint occaecat <br/>
            * officia deserunt mollit anim id est laborum. <br/>
            */
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
      showItems: {
        1: true,
        2: false
      }
    };
  },
  methods: {
    toggleItems(headerNumber) {
      this.showItems[headerNumber] = !this.showItems[headerNumber];
    }
  }
};
</script>