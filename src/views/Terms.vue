<template>
  <div class="flexi-container generic-page">
    <flexi-section :inputData="inputData.termsPage" class="terms">
      <template v-slot:content>
        <div class="section__content--wrapper">
          <h1 class="section__content--title"> {{ inputData.termsPage.contentTitle }}</h1>
          <h2 class="section__content--subtitle">
            {{ inputData.termsPage.content }}
          </h2>
        </div>
      </template>
    </flexi-section>
    
    <flexi-lastcard :inputData="inputData.lastCard" v-if="inputData.lastCard" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "terms",
  mounted() {
    this.fetchItems();
  },
  computed: {
    ...mapGetters(["inputData"])
  },
  methods: {
    fetchItems() {
       this.$store.dispatch("fetchData");
    }
  }
};
</script>

<style lang="scss">
</style>
