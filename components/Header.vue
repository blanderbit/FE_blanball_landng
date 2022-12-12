<template>
    <div class="b-header__wrapper">
        <header class="b-header">
            <div class="b-header__content _container">
                <section class="b-header__menu">
                    <HeaderMenu />
                </section>
                <section class="b-header__main-title">
                    <div class="b-first__line">
                        <div data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-delay="500" data-aos-offset="0"
                            class="b-title__first_word">{{ $t('header.train')}}</div>
                        <img data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-delay="650" data-aos-offset="0"
                            class="b-title__image" src="../assets/images/ball.svg" alt="ball">
                        <div data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-delay="800" data-aos-offset="0"
                            class="b-title__second_word"><span>{{ $t('header.play')}}</span></div>
                        <img data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-delay="950" data-aos-offset="0"
                            class="b-title__image" src="../assets/images/ball.svg" alt="ball">
                    </div>
                    <div class="b-second__line">
                        <RegisterButton text="Зареєструватися" class="b-title__register-button" />
                        <div data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-delay="1100" data-aos-offset="0"
                            class="b-title__third_word">{{ $t('header.rest')}}</div>
                    </div>
                </section>
                <section class="b__main-images">
                    <div data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-delay="330" data-aos-offset="0"
                        class="b-user-raiting-image">
                        <img src="../assets/images/user-raiting.svg" alt="user-raiting">
                    </div>
                    <div data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-delay="1400" data-aos-offset="0"
                        class="b-iphone-image">
                        <img src="../assets/images/Iphone1.svg" alt="Iphone1">
                    </div>
                </section>
            </div>
        </header>
    </div>
</template>

<script>
</script>

<style lang="scss">
@import "assets/styles/base.scss";


.b {
    &-header {
        background: url("../assets/images/Group_43.svg");
        width: 100%;
        border-radius: 0px 0px 36px 36px;
        padding-top: 35px;
        background-repeat: no-repeat;
        padding-bottom: 80px;

        &__wrapper {
            background: url("../assets/images/header_background.svg"), radial-gradient(68.91% 140.71% at 51.6% 34.95%, #43A99A 0%, #148783 37.59%, #0B5147 100%);
            background-position: center top;
            background-repeat: no-repeat;
            @media(max-width: 1250px) {
                background-size: 100%;
                padding: 0px 20px;
            }
        }

        &__main-title {
            max-width: 200px;
            max-height: 88px;
            font-family: 'Exo 2';
            font-style: normal;
            font-weight: 700;
            font-size: 4vw;
            line-height: 122.222222222%;
            text-transform: capitalize;
            color: $font-color;
        }
    }

    &-first__block {
        border-radius: 0px 0px 32px 32px;
        max-height: 200px;
        background-color: #fff;
    }

    &-first__line {
        display: flex;
        align-items: center;
    }

    &-second__line {
        display: flex;
        align-items: center;
    }

    &-title__register-button {
        padding: 12px 16px;
        width: 200px;
        height: 48px;
        border-radius: 12px;
        margin-top: 15px;
    }

    &__main-images {
        display: flex;
        justify-content: space-between;
    }

    &-user-raiting-image {
        margin-top: 130px;
        margin-left: -20px;
    }

    &-title {
        &__second_word {
            background-image: url("../assets/images/green_elipse.svg");
            background-repeat: no-repeat;
            background-position: center;
            span {
                margin-left: 20px;
            }
        }

        &__third_word {
            margin-left: 10px;
        }

        &__image {
            align-self: flex-end;
            margin-left: 5px;
        }
    }

    &-iphone-image {
        margin-left: 20px;
        height: 100%;
        padding: 0px 45px 53px 30px;
        margin-top: -70px;
    }
}
</style>