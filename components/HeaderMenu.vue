<template>
    <div class="b-menu">
        <ul class="b-menu__body">
            <img class="b-menu__logo" src="../assets/images/logo.svg" />
            <template class="b-menu__list" :key="`navItem-${i}`" v-for="(n, i) in navigationItems">
                <li class="b-menu__item">
                    <NuxtLink class="b-menu__link" :to="n.link">
                        {{ n.name }}
                    </NuxtLink>
                </li>
            </template>
            <RegisterButton />
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

<style lang="scss">
@import "assets/styles/base.scss";

.b {
    &-menu {
        &__body {
            padding: 10px 0;
            align-items: center;
            display: flex;
            justify-content: space-between;
        }

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

        &__logo {
            padding-right: 100px;
            margin-left: 10px;
        }
    }
}
</style>