<template>
  <div class="flexi-container generic-page">
    <flexi-section class="privacy">
      <template v-slot:content>
        <div class="section__content--wrapper">
          <h1 class="section__content--title">Page Not Found</h1>
          <h2 class="section__content--action">
            <a class="action" href="/">Go Back</a>
          </h2>
        </div>
      </template>
    </flexi-section>
  </div>
</template>

<script>
export default {
  name: "page-not-found",
  mounted() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      this.$store.dispatch("fetchData");
    }
  }
};
</script>

<style lang="scss" scoped>
.generic-page {
  .section {
    &__content {
      &--title {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 100px;
        font-weight: 400;
        align-items: center;
        margin-top: 200px;
      }

      &--action {
        width: 100%;
        display: flex;
        justify-content: center;

        .action {
          color: #15194a;

          &:hover {
            color: #2f2f44;
          }
        }
      }
    }
  }
}
</style>
