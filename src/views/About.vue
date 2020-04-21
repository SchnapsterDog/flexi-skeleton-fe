<template>
  <div class="flexi-container generic-page">
    <flexi-section :inputData="inputData.aboutPage" class="about">
      <template v-slot:content>
        <div class="section__content--wrapper">
          <h1 class="section__content--title"> {{ inputData.aboutPage.contentTitle }}</h1>
          <h2 class="section__content--subtitle">
            {{ inputData.aboutPage.content }}
          </h2>
        </div>
      </template>
      <template v-slot:button>
        <flexi-button :text="inputData.aboutPage.buttonText" />
      </template>
    </flexi-section>
    
    <flexi-lastcard :inputData="inputData.lastCard" v-if="inputData.lastCard" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "about",
  data() {
    return {
      loading: false
    };
  },
  mounted() {
    this.fetchItems();
  },
  computed: {
    ...mapGetters(["inputData"])
  },
  methods: {
    fetchItems() {
      this.$store.dispatch("fetchData").then(response => {
        this.loading = response;
      });
    }
  }
};
</script>

<style lang="scss">
</style>
