<template>
    <footer class="b-footer">
        <div class="b-footer__content _container">
            <Navigation/>
        </div>
    </footer>
</template>


<script>
</script>

<style lang="scss">
@import "assets/styles/base.scss";

.b {
    &-menu {
        margin-bottom: 20px;
        &__body {
            padding: 10px 0;
            align-items: center;
            display: flex;
            justify-content: space-between;
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
            padding-right: 100px;
            margin-left: 10px;
            @media(max-width: $md2) {
                padding-right: 30px;
            }
        }
    }
}
</style>