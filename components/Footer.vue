<template>
    <footer class="b-footer">
        <ul class="b-footer__body">
            <img class="b-footer__logo" src="../assets/images/footer_logo.svg" alt="footer_logo"/>
            <Navigation :stylings="customStyle" />
            <div class="b-footer__arrow">
                <span>Blanball — 2022</span>
                <a href="#"><img src="../assets/images/arrow.svg" alt="arrow"/></a>
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
                'color': '#fff'
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
        margin-top: 160px;

        &__body {
            padding: 10px 0;
            align-items: center;
            display: flex;
            justify-content: space-between;
            height: 100px;
            background-color: #262541;
        }

        &__logo {
            margin-left: 120px;
        }

        &__arrow {
            display: flex;
            align-items: center;
            padding-right: 30px;

            span {
                margin-right: 40px;
                color: #fff;
            }
        }
    }
}
</style>