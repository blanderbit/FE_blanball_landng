<template>
    <div class="b-header-menu__route">
        <div class="b-header-menu__route__arrow-image">
            <img src="../assets/images/news-arrow-left.svg" alt="news-arrow">
        </div>
        <div class="b-header-menu__route-text">
            <NuxtLink :to="{ path: comp.path }">
                {{ comp.text }}
            </NuxtLink>
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
        return { comp }
    }
};
</script>

<style lang="scss">
@import "assets/styles/base.scss";


.b {
    &-header-menu {
        &__route {
            margin-right: 30px;
            display: flex;
            align-items: center;
            @media(max-width: $md2) {
                margin-right: 15px;
            }

            &-text {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 13px;
                color: #575775;
                margin-left: 10px;

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