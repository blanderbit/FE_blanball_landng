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
                    <button class="b-menu__button"><span>Зареєструватися</span></button>
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

<style lang="scss" scoped>
@import "assets/styles/base.scss";
.b-header {
    height: 68px;
    max-width: 1200px;
    margin: 27px auto;
    box-shadow: 4px 4px 20px rgba(122, 173, 170, 0.2);
    border-radius: 32px;
    padding-top: 13px;
}
.b-menu {
    &__body {
        padding: 10px 0;
        align-items: center;
        display: flex;
        justify-content: flex-end;
    }
    &__item {
        margin-left: 30px;
    }
    &__link {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #262541;
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
    &__button {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 16px;
        margin-right: 20px;
        gap: 6px;
        width: 163px;
        height: 40px;
        background: #148783;
        border-radius: 8px;
        margin-left: 150px;
        transition: background-color 0.4s ease 0s;
        @media(min-width: $md2) {
            &:hover {
                background-color: #1da19d;
            }
        }
        span {
            width: 131px;
            height: 24px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            line-height: 24px;
            text-align: center;
            color: #FFFFFF;
        }
    }
}
</style>