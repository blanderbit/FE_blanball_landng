<template>
    <div class="b-menu">
        <div class="b-menu-top__side">
            <BurgerMenu />
            <div class="b-menu-top__side__logo">
                <img v-if="$route.name === 'index'" src="../assets/images/header-tablet-logo.svg" alt="menu-tablet-logo">
                <img v-else src="../assets/images/header-menu-top-side-logo-black.svg" 
                alt="menu-tablet-logo-black">
            </div>
            <input placeholder="Пошук" type="text" class="b-menu-top__side__input">
            <RegisterButton style="margin-right: 0px;" class="b-menu-top__side-register-button" :text="$t('buttons.register')" />
        </div>
        <ul class="b-menu__body">
            <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" class="logo">
                <img class="b-menu__logo-desk" src="../assets/images/logo.svg" alt="desk-logo" />
                <img class="b-menu__logo-small" src="../assets/images/logo-ball.svg" alt="small-logo" />
            </div>
            <Navigation data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" />
            <div class="b-menu__right-side">
                <HeaderMenuRoute />
                <RegisterButton :text="$t('buttons.register')" />
            </div>
        </ul>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
    data() {
        const route = useRoute()
        return route
    },
}
</script>

<style lang="scss">
@import "assets/styles/base.scss";

.b {
    &-menu {
        margin-bottom: 20px;
        padding: 0px 10px;

        &-top__side {
            display: none;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 50px;

            @media(max-width: $md3) {
                display: flex;
            }

            &-register-button {
                display: none;
                height: 38px;
                font-size: 12px;

                @media(max-width: $md4) and (min-width: 420px) {
                    display: block;
                }
            }

            &__input {
                align-items: center;
                background: url('../assets/images/header-tablet-input-seach.svg') #FFFFFF;
                background-repeat: no-repeat;
                background-position: right;
                padding: 10px 12px;
                width: 224px;
                height: 40px;
                border: 1px solid #DFDEED;
                font-weight: 400;
                font-size: 12px;
                line-height: 166%;
                color: #575775;
                border-radius: 6px;
                @media(max-width: 550px) {
                    width: 200px;
                }

                @media(max-width: $md4) {
                    display: none;
                }

                &:focus {
                    background: #FFFFFF;
                }
            }

            &__logo {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        &__right-side {
            display: flex;
            align-items: center;
        }

        &__body {
            padding: 10px 0;
            align-items: center;
            display: flex;
            justify-content: space-between;

            @media(max-width: $md3) {
                display: none;
            }
        }

        &__logo {

            &-desk {
                @media(max-width: $md2) {
                    display: none;
                }
            }

            &-small {
                display: none;

                @media(max-width: $md2) {
                    display: block;
                }
            }
        }
    }
}
</style>