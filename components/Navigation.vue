<template>
    <div class="b-navigation">
        <ul class="b-navigation__body">
            <template v-for="(n, i) in navigationItems" :key="`navItem-${i}`" class="b-navigation__list">
                <li class="b-navigation__item">
                    <NuxtLink class="b-navigation__link" :to="{hash: n.element }" :style="getStyle">
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
    },
    computed: {
        getStyle() {
            return this.stylings;
        }
    },
    setup() {
        const { t } = useI18n()
        const navigationItems = [
            {
                name: t('footer.blanball'),
                element: "#b-first__block-main-title"
            },
            {
                name: "Організація подій",
                element: "#b-first__section-main__title"
            },
            {
                name: "Оцінка заходів",
                element: "#b-second__section-main__title"
            },
        ]
        console.log(navigationItems)
        return {navigationItems}
    },
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
            line-height: 142%;
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