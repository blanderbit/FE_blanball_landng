<template>
    <header class="b-header">
        <div class="b-header__content">
            <div class="b-header__menu">
                <ul class="b-menu__body">
                    <img class="b-menu__logo" src="../assets/images/logo.svg" />
                    <template class="b-menu__list" :key="`navItem-${i}`" v-for="(n, i) in navigationItems">
                        <li class="b-menu__item">
                            <NuxtLink class="b-menu__link" :to="n.link">
                                {{ n.name }}
                            </NuxtLink>
                        </li>
                    </template>
                    <RegisterButton class="b-menu__button" />
                </ul>
            </div>
        </div>
    </header>
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
.b-header {

    &__content {
        height: 90px;
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 27px;
        box-shadow: 4px 4px 0px rgba(122, 173, 170, 0.2);
        border-radius: 32px 32px 0px 0px;
        padding-top: 20px;
        padding-left: 20px;
        background-color: #fff;
    }
}

.b-menu {
    &__body {
        padding: 10px 0;
        align-items: center;
        display: flex;
        justify-content: flex-end;
    }

    &__button {
        margin-left: 150px;
    }

    &__item {
        margin-left: 30px;
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
        margin-right: 120px;
    }
}
</style>