<template>
    <div class="b-navigation">
        <ul :style="navigationBodyStyles" class="b-navigation__body">
            <template v-for="(n, i) in navigationItems" :key="`navItem-${i}`" class="b-navigation__list">
                <li class="b-navigation__item">
                    <NuxtLink class="b-navigation__link" :to="{ hash: n.element }" :style="getStyle">
                        {{ n.name }}
                    </NuxtLink>
                </li>
            </template>
        </ul>
    </div>
</template>


<script>
import { useI18n } from 'vue-i18n'

export default {
    props: {
        stylings: Object,
        navigationBodyStyles: Object,
    },
    computed: {
        getStyle() {
            return this.stylings;
        },
        navigationBodyStyles() {
            return this.navigationBodyStyles;
        },
    },
    setup() {
        const { t } = useI18n()
        let routes = null
        const route = useRoute()
        const navigationItems = computed(() => {
            if (route.name === 'index') {
                routes = [
                    {
                        name: t('navigation.create_commands'),
                        element: "#b-first__block-main-title"
                    },
                    {
                        name: t('navigation.organization_teams'),
                        element: "#b-first__section-main__title"
                    },
                    {
                        name: t('navigation.evaluation_measures'),
                        element: "#b-second__section-main__title"
                    },
                ]
            }
            else if (route.name === 'news') {
                routes = [
                    {
                        name: t('navigation.announcements'),
                        element: "#b-first__block-main-title"
                    },
                    {
                        name: t('navigation.articles'),
                        element: "#b-first__section-main__title"
                    },
                    {
                        name: t('navigation.popular'),
                        element: "#b-second__section-main__title"
                    },
                ]
            }
            return routes
        })
        return { navigationItems }
    },
}
</script>
<style lang="scss">
@import "assets/styles/base.scss";

.b {
    &-navigation {
        &__body {
            align-items: left;
            display: flex;
        }

        &__link {
            font-family: 'Inter';
            font-weight: 400;
            font-size: 14px;
            line-height: 142%;
            color: $font-color;
            transition: color 0.3s ease 0s;

            @media(max-width: 430px) {
                font-size: 12px;
            }

            @media(max-width: 850px) {
                font-size: 13px;
            }

            @media(min-width: $md2) {
                &:hover {
                    color: red;
                }
            }
        }

        &__item {
            margin-left: 20px;

            @media(max-width: 650px) {
                &:first-child {
                    margin-left: 0px;
                }
            }
        }
    }
}
</style>