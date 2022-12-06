<template>
    <footer data-aos="fade-up" data-aos-delay="300" class="b-footer">
        <ul class="b-footer__body">
            <img class="b-footer__logo" src="../assets/images/footer_logo.svg" alt="footer_logo" />
            <Navigation :stylings="customStyle" />
            <div class="b-footer__arrow">
                <span>Blanball — 2022</span>
                <NuxtLink class="b-navigation__link" :to="{ path: '/' }" :style="getStyle">
                    <img src="../assets/images/arrow.svg" alt="arrow" />
                </NuxtLink>
            </div>
        </ul>
    </footer>
</template>

 
<script>
export default {
    name: 'subtitle',
    data() {
        return {
            customStyle: {
                'color': '#fff',
                'font-size': '13px',
            }
        }
    }
}

</script>

<style lang="scss" scoped>
.b-navigation__link {
    color: #fff;
}
</style>

<style lang="scss">
@import "assets/styles/base.scss";

.b {
    &-footer {

        @media(max-width: $md2) {
            display: none;
        }

        &__body {
            padding: 10px 0;
            align-items: center;
            display: flex;
            justify-content: space-between;
            height: 100px;
            background-color: #262541;
        }

        &__logo {
            margin-left: 90px;
        }

        &__arrow {
            display: flex;
            align-items: center;
            padding-right: 30px;

            span {
                font-size: 16px;
                margin-right: 30px;
                color: #fff;
            }
        }
    }
}
</style>