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
          ihor.stryzhov@gmail.com <br/>
          +380 98 202 44 17
        </div>
     </div>
    </div>
    <div class="tab">
      <div class="tab__items">
        <div class="tab__item" v-show="showItems[3]" @click="toggleItems(3)">
          bio
        </div>
        <div class="tab__item"  v-show="showItems[4]" @click="toggleItems(4)">
          interests
        </div>
        <div class="tab__item"  v-show="showItems[5]" @click="toggleItems(5)">
          education
        </div>
      </div>
      <div class="tab__objects">
        <div class="tab__object" v-show="showItems[3]">
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
        <div class="tab__object"  v-show="showItems[4]">
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
        <div class="tab__object"  v-show="showItems[5]">
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