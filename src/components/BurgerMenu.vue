<template>
    <div class="b-burger">
        <label @click="isMenuActive = !isMenuActive" class="b-burger-btn">
            <nuxt-img class="b-burger-btn-tablet" 
                src="/images/burger-tablet.svg" 
                alt="burger-tablet" />
            <nuxt-img v-if="$route.name === 'index'" 
                class="b-burger-btn-mobile" 
                src="/images/burger-moblo.svg" 
                alt="burger-mobile" />
            <nuxt-img v-else 
                class="b-burger-btn-mobile-news" 
                src="/images/burger-tablet.svg" 
                alt="burger-mobile-news" />
        </label>
        <transition name="fade">
            <ul v-show="isMenuActive" class="b-burger-body">
                <div class="b-burger-content">
                    <div class="b-burger-content-logo">
                        <nuxt-img src="/images/burger-active-logo.svg" 
                            alt="burger-active-logo" />
                    </div>
                    <div class="b-burger-content-menu">
                        <div class="b-burger-content-menu-title">{{ $t('navigation.menu') }}</div>
                        <nuxt-img class="b-burger-content-menu-сross" 
                            @click="isMenuActive = !isMenuActive"
                            src="/images/header-burger-active-cross.svg" 
                            alt="burger-active-cross" />
                    </div>
                    <div class="b-burger-content-navigation">
                        <Navigation style="margin-top: 10px; margin-left: -20px;" :stylings="navigationItemStyles"
                            :navigationBodyStyles="navigationBodyStyles" />
                    </div>
                    <div class="b-burger-content-page-route">
                        <HeaderMenuRoute style="margin-left: -10px;" />
                        <nuxt-img src="/images/news-arrow-right.svg" alt="news-arrow-right" />
                    </div>
                </div>
            </ul>
        </transition>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
    data() {
        const route = useRoute()
        return {
            navigationBodyStyles: {
                'flex-direction': 'column',
                'margin-right': '50px',
                'max-width': '150px',
            },
            navigationItemStyles: {
                'margin-left': '0px',
            },
            isMenuActive: false,
            route,
        }
    },
}
</script>

<style scoped lang="scss">
@import "assets/styles/base.scss";

.fade-enter-active,
.fade-leave-active {
    transform: translateX(-300px);
}

.fade-enter,
.fade-leave-to {
    transform: translateX(-300px) 2s;
}

.b {
    &-burger {
        margin-right: 20px;

        &-btn {
            z-index: 1;

            &-tablet {

                display: none;

                @media(max-width: $md3) and (min-width: $md4) {
                    display: block;
                }
            }

            &-mobile {
                display: none;

                @media(max-width: $md4) {
                    display: block;
                }
                &-news {
                    display: none;
                    width: 32px;
                    height: 32px;
                    @media(max-width: $md4) {
                        display: block;
                    }
                }
            }
        }

        &-body {
            display: block;
            position: fixed;
            width: 300px;
            left: 0;
            top: 0;
            height: 100%;
            margin: 0;
            padding: 80px 0;
            list-style: none;
            background-color: #fff;
            box-shadow: 2px 2px 10px rgba(56, 56, 251, 0.1);
            transition-duration: .25s;
            z-index: 100;
        }

        &-content {
            padding: 25px;

            &-page-route {
                margin-top: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                &-text {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 142%;
                    color: #575775;
                }
            }

            &-menu {
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;
                height: 32px;
                border-bottom: 1px solid #EFEFF6;

                &-title {
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 142%;
                    color: #8A8AA8;
                }
            }

            &-сross {
                width: 10px;
                height: 10px;
            }

            &-logo {
                margin-bottom: 30px;
            }

            &-navigation {
                height: 90px;
                border-bottom: 1px solid #EFEFF6;
            }
        }
    }
}
</style>