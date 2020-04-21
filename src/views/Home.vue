<template>
  <div class="flexi-container">
    <flexi-topcard :inputData="inputData.topCard" v-if="inputData.topCard" />

    <flexi-visible when-hidden="#top-card">
      <a @click.prevent="scroll('#top-card')">
        <div class="arrow-down">
          <span class="text">Go to top</span>
          <div class="svg"></div>
        </div>
      </a>
    </flexi-visible>

    <flexi-nav :inputData="inputData.navigationSections" v-show="!isNavOpen" />

    <flexi-section :inputData="inputData.about">
      <template v-slot:section-title>
        <br />
      </template>
      <template v-slot:content>
        <div class="section__content--wrapper">
          <h1 class="section__content--title" v-text="inputData.about.contentTitle"></h1>
          <h2 class="section__content--subtitle" v-text="inputData.about.content"></h2>
          <p class="section__content--paragraph">
            Lorem Ipsum is simply dummy
            <a href>Some Link</a>
          </p>
          <p class="section__content--paragraph">
            Lorem Ipsum is simply dummy
            <a href>Some Link</a>
          </p>
          <p class="section__content--paragraph">
            Lorem Ipsum is simply dummy
            <a href>Some Link</a>
          </p>
          <p class="section__content--paragraph">
            Lorem Ipsum is simply dummy
            <a href>Some Link</a>
          </p>
        </div>
      </template>
      <template v-slot:button>
        <flexi-button :text="inputData.about.buttonText" />
      </template>
    </flexi-section>

    <flexi-section :inputData="inputData.writing">
      <template v-slot:content>
        <div class="section__content--wrapper">
          <h1 class="section__content--title">{{ inputData.writing.contentTitle }}</h1>
          <h2 class="section__content--subtitle">{{ inputData.writing.content}}</h2>
        </div>
      </template>
      <template v-slot:button>
        <flexi-button :text="inputData.about.buttonText" />
      </template>
    </flexi-section>

    <flexi-section :inputData="inputData.services" v-show="inputData.services.cards">
      <template v-slot:content>
        <flexi-card v-for="(value, key) in inputData.services.cards" :key="key" :inputData="value" />
      </template>
      <template v-slot:button>
        <flexi-button
          @button-clicked="sendEmail(inputData.services.buttonLink)"
          :text="inputData.services.buttonText"
        />
      </template>
    </flexi-section>

    <flexi-section :inputData="inputData.faq">
      <template v-slot:content>
        <div class="section__content--wrapper">
          <h1 class="section__content--title">Frequently Aksed Questions</h1>
          <h2 class="section__content--subtitle">
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            <span>
              <i class="ion-ios-information-circle-outline"></i>
            </span>
          </h2>
          <h2 class="section__content--subtitle">
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            <span>
              <i class="ion-ios-information-circle-outline"></i>
            </span>
          </h2>
          <h2 class="section__content--subtitle">
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            <span>
              <i class="ion-ios-information-circle-outline"></i>
            </span>
          </h2>
          <h2 class="section__content--subtitle">
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            <span>
              <i class="ion-ios-information-circle-outline"></i>
            </span>
          </h2>
        </div>
      </template>
      <template v-slot:button>
        <flexi-button :text="inputData.about.buttonText" />
      </template>
    </flexi-section>

    <flexi-section :inputData="inputData.contact">
      <template v-slot:content>
        <flexi-card v-for="(value, key) in inputData.contact.cards" :key="key" :inputData="value" />
      </template>
      <template v-slot:button>
        <flexi-button
          @button-clicked="sendEmail(inputData.contact.buttonLink)"
          :text="inputData.contact.buttonText"
        />
      </template>
    </flexi-section>

    <flexi-lastcard :inputData="inputData.lastCard" v-if="inputData.lastCard" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";


export default {
  name: "home",
  components: {
  },
  data() {
    return {
      content: null
    };
  },
  mounted() {
    this.fetchItems();
  },
  computed: {
    ...mapGetters(["inputData", "isNavOpen"])
  },
  methods: {
    fetchItems() {
      this.$store.dispatch("fetchData");
    },
    scroll(href) {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss">

#writing {
  .section {
    &__title {
      background: url("https://via.placeholder.com/1300x700");
    }
  }
}

#services {
  .section {
    &__title {
      //background: url("~@/assets/img/content-tool.jpg");
      background: url("https://via.placeholder.com/1300x700");
    }

    &__content {
      &--item {
        height: 220px;
        margin-top: -130px;
        padding: 50px 30px 80px;
        background: #15194ae6;
        color: white;
        align-items: flex-start;
        justify-content: unset;

        @media only screen and (max-width: 600px) {
          margin-top: 0;
        }

        i {
          color: #d0d0d0;
        }

        .title {
          color: white;
        }

        .subtitle {
          color: #d0d0d0;
        }

        &:hover {
          opacity: 0.4;
          cursor: pointer;
        }
      }

      @media only screen and (max-width: 600px) {
        margin: 0;
        margin-top: 100px;
        margin-bottom: 200px;
      }
    }
  }
  .section__bottom {
    margin-top: -217px !important;
  }
}

#faq {
  .section {
    &__title {
      background: url("https://via.placeholder.com/1300x700");
    }

    &__content {
      &--subtitle {
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          opacity: 0.4;
          cursor: pointer;
        }

        i {
          font-size: 30px;
          position: relative;
          top: 5px;
          color: #15194a;
          left: 11px;
          top: 2px;

          &:hover {
            opacity: 0.4;
            cursor: pointer;
          }
        }
      }
    }
  }
}

#contact {
  .section {
    &__title {
      background: url("https://via.placeholder.com/1300x700");
    }

    &__content {
      &--item {
        background: #15194ae6;
        color: white;
        height: 220px;
        margin-top: -130px;
        padding: 50px 30px 80px;

        @media only screen and (max-width: 600px) {
          margin-top: 0;
        }

        .title {
          color: white;
        }

        .subtitle {
          color: #d0d0d0;
        }
      }

      @media only screen and (max-width: 600px) {
        margin: 0;
        margin-top: 100px;
        margin-bottom: 200px;
      }
    }
  }

  .section__bottom {
    margin-top: -217px !important;
  }
}
</style>
