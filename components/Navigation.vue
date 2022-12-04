<template>
    <template class="b-navigation__list" :key="`navItem-${i}`" v-for="(n, i) in navigationItems">
        <li class="b-navigation__item">
            <NuxtLink class="b-navigation__link" :to="n.link">
                {{ n.name }}
            </NuxtLink>
        </li>
    </template>
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

<style lang="scss">
@import "assets/styles/base.scss";

.b {
    &-navigation {

        &__link {
            font-family: 'Inter';
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: $font-color;
            transition: color 0.3s ease 0s;

            @media(min-width: $md2) {
                &:hover {
                    color: red;
                }
            }
        }

    }
}
</style>