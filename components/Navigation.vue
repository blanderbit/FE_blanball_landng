<template>
  <div class="b-navigation">
    <ul :style="navigationBodyStyles" class="b-navigation__body">
      <template
        v-for="(n, i) in navigationItems"
        :key="`navItem-${i}`"
        class="b-navigation__list"
      >
        <li class="b-navigation__item">
          <NuxtLink
            class="b-navigation__link"
            :to="{ hash: n.element }"
            :style="getStyle"
          >
            {{ $t(n.name) }}
          </NuxtLink>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    stylings: Object,
    navigationBodyStyles: Object
  },
  computed: {
    getStyle() {
      return this.stylings;
    },
    navigationBodyStyles() {
      return this.navigationBodyStyles;
    }
  },
  setup() {
    let routes = null;
    const route = useRoute();
    const navigationItems = computed(() => {
      if (route.name === "index") {
        routes = [
          {
            name: "navigation.create_commands",
            element: "#b-first-block__title"
          },
          {
            name: "navigation.organization_teams",
            element: "#b-second-block-first__section__title"
          },
          {
            name: "navigation.evaluation_measures",
            element: "#b-second__section-main__title"
          }
        ];
      } else if (route.name === "news") {
        routes = [
          {
            name: "navigation.announcements",
            element: "#b-first__block-main-title"
          },
          {
            name: "navigation.articles",
            element: "#b-stories-title"
          },
          {
            name: "navigation.popular",
            element: "#b-versions-title"
          }
        ];
      }
      return routes;
    });
    return { navigationItems };
  }
};
</script>
<style lang="scss">
@import "assets/styles/variables.scss";

.b {
  &-navigation {
    &__body {
      align-items: left;
      display: flex;
    }

    &__link {
      font-weight: 400;
      font-size: 14px;
      line-height: 142%;
      color: $font-color;
      transition: color 0.3s ease 0s;

      @media (max-width: 430px) {
        font-size: 12px;
      }

      @media (max-width: 850px) {
        font-size: 13px;
      }

      @media (min-width: $md2) {
        &:hover {
          color: red;
        }
      }
    }

    &__item {
      margin-left: 20px;
    }
  }
}
</style>
