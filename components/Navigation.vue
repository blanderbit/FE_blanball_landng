<template>
    <div class="b-navigation">
        <ul class="b-navigation__body">
            <template v-for="(n, i) in navigationItems" :key="`navItem-${i}`" class="b-navigation__list">
                <li class="b-navigation__item">
                    <NuxtLink class="b-navigation__link" :to="n.link" :style="getStyle">
                        {{ n.name }}
                    </NuxtLink>
                </li>
            </template>
        </ul>
    </div>
</template>


<script setup>
const navigationItems = [
    {
        name: "Створення команд",
        link: "/#"
    },
    {
        name: "Організація подій",
        link: "/#"
    },
    {
        name: "Оцінка заходів",
        link: "/#"
    },
    {
        name: "Особистий кабінет",
        link: "/#"
    },
]
</script>

<script>
export default {
    name: 'navbar',
    props: {
        stylings: Object,
    },
   computed: {
    getStyle() {
      return this.stylings;
    }
   }
}
</script>

<style lang="scss">
@import "assets/styles/base.scss";
.b {
    &-navigation {
        &__body {
            align-items: center;
            display: flex;
        }
        &__link {
            font-family: 'Inter';
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: $font-color;
            transition: color 0.3s ease 0s;
            margin-left: 20px;
            @media(min-width: $md2) {
                &:hover {
                    color: red;
                }
            }
        }
    }
}
</style>