<template>
  <div id="app">
    <flexi-header
      :inputData="inputData.navigationPages"
      :isNavOpen="isNavOpen"
      @toggle-burger="toggleBurger"
      data-aos="fade-down"
      data-aos-offset="-50"
      data-aos-delay="50"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-left"
    >
    </flexi-header>
      <router-view />
    <flexi-footer :inputData="inputData.footer" />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  updated() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  computed: {
    ...mapGetters(["inputData", "isNavOpen"])
  },
  methods: {
    ...mapActions(["setBurger"]),
    toggleBurger() {
      this.setBurger();
    }
  }
};
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
