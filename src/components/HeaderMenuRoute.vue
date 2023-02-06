<template>
    <div class="b-header-menu__route">
        <div  class="b-header-menu__route__arrow-image">
            <img v-if="$route.name === 'index'" 
                src="/images/news-arrow-left.png" 
                alt="news-arrow" />
        </div>
        <div class="b-header-menu__route-text">
            <NuxtLink :to="{ path: comp.path }">
                {{ comp.text }}
            </NuxtLink>
        </div>

        <div class="b-header-menu__route__arrow-image">
            <img v-if="$route.name === 'news'"
            style="margin-left: 10px;"
            src="/images/news-arrow-right.svg" 
                alt="news-arrow" />
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
export default {
    setup() {
        let routes = null
        const route = useRoute()
        const { t } = useI18n()
        const comp = computed(() => {
            if (route.name === 'index') {
                routes = {
                    text: t('navigation.news'),
                    path: '/news'
                }
            }
            else if (route.name === 'news') {
                routes = {
                    text: t('navigation.main'),
                    path: '/'
                }
            }
            return routes
        })
        return { comp, route }
    }
};
</script>

<style lang="scss">
@import "assets/styles/variables.scss";


.b {
    &-header-menu {
        &__route {
            margin-right: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            @media(max-width: $md2) {
                margin-right: 15px;
            }

            @media(max-width: 800px) {
                padding-left: 0px;
            }

            &__arrow-image {
                @media(max-width: 800px) {
                    display: none;
                }
            }

            &-text {
                font-weight: 500;
                font-size: 13px;
                color: #575775;
                margin-left: 10px;
                transition: color 0.3s ease 0s;
                display: flex;

                @media(min-width: $md2) {
                    &:hover {
                        color: red;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>