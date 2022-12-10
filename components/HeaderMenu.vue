<template>
    <div class="b-menu">
        <ul class="b-menu__body">
            <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" class="b-menu__logo">
                <img class="b-menu__logo-desk" src="../assets/images/logo.svg" alt="desk-logo" />
                <img class="b-menu__logo-small" src="../assets/images/ball.svg" alt="small-logo" />
            </div>
            <Navigation data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" />
            <div class="b-menu__right-side">
                <HeaderMenuRoute/>
                <RegisterButton text="Зареєструватися" />
            </div>
        </ul>
    </div>
</template>


<style lang="scss">
@import "assets/styles/base.scss";

.b {
    &-menu {
        margin-bottom: 20px;

        &__right-side {
            display: flex;
            align-items: center;
        }
        &__body {
            padding: 10px 0;
            align-items: center;
            display: flex;
            justify-content: space-between;

            @media(max-width: 800px) {
                display: none;
            }
        }

        &__logo {
            margin-left: 10px;

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