<template>
    <div class="b-header-wrapper">
        <header class="b-header">
            <div class="b-header-top__side">
                <BurgerMenu />
                <div class="b-header-top__side__logo">
                    <img src="../assets/images/header-tablet-logo.svg" alt="header-tablet-logo">
                </div>
                <input placeholder="Пошук" type="text" class="b-header-top__side__input">
                <RegisterButton class="b-header-top__side-register-button" :text="$t('buttons.register')" />
            </div>
            <div class="b-header-content _container">
                <section class="b-header-menu">
                    <HeaderMenu />
                </section>
                <div class="b-header-left__side">
                    <section class="b-header-title">
                        <div class="b-header-title-first__line">
                            <div data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-delay="500"
                                data-aos-offset="0" class="b-header-title-first__line-first__word">{{ $t('header.train')
                                }}</div>
                            <img data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-delay="650"
                                data-aos-offset="0" class="b-header-title-first__line-ball__image"
                                src="../assets/images/logo-ball.svg" alt="logo-ball">
                            <div data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-delay="800"
                                data-aos-offset="0" class="b-header-title-first__line-second__word"><span>{{
                                    $t('header.play')
                                }}</span></div>
                            <img data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-delay="950"
                                data-aos-offset="0" class="b-header-title-first__line-ball__image"
                                src="../assets/images/logo-ball.svg" alt="logo-ball">
                        </div>
                        <div class="b-header-title-second__line">
                            <RegisterButton class="b-header-title-second__line-button" :text="$t('buttons.register')" />
                            <div data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-delay="1100"
                                data-aos-offset="0" class="b-header-title-second__line-first__word">{{ $t('header.rest')
                                }}</div>
                        </div>
                    </section>
                    <div class="b-header-tablet-main__image">
                        <img src="../assets/images/user-raiting.svg" alt="header-main-image-tablet">
                    </div>
                    <div class="b-header-mobile-main__image">
                        <img src="../assets/images/header-main-image-mobile.svg" alt="header-main-image-mobile">
                    </div>
                </div>
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
        background: url("../assets/images/header-background-lines.svg");
        width: 100%;
        border-radius: 0px 0px 36px 36px;
        padding-top: 35px;
        background-repeat: no-repeat;
        padding-bottom: 80px;

        @media(max-width: $md3) {
            background: none;
            padding-bottom: 40px;
        }

        @media(max-width: $md4) {
            background: url("../assets/images/header-background-lines-mobile.svg");
            background-repeat: no-repeat;
            background-position: right;
            padding-top: 15px;
        }

        &-left__side {
            display: flex;
            flex-direction: column;
        }

        &-mobile {
            &-main__image {
                display: none;

                @media(max-width: $md4) {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 5px;
                }
            }
        }

        &-top__side {
            display: none;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 50px;
            padding-left: 20px;

            @media(max-width: $md3) {
                display: flex;
            }

            &-register-button {
                display: none;

                @media(max-width: $md4) {
                    display: block;
                }

                @media(max-width: 410px) {
                    display: none;
                }
            }

            &__input {
                align-items: center;
                background: url('../assets/images/header-tablet-input-seach.svg') #FFFFFF;
                background-repeat: no-repeat;
                background-position: right;
                padding: 10px 12px;
                width: 224px;
                height: 40px;
                border: 1px solid #DFDEED;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 166%;
                color: #575775;
                border-radius: 6px;

                @media(max-width: $md4) {
                    display: none;
                }

                &:focus {
                    background: #FFFFFF;
                }
            }

            &__logo {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        &-tablet {
            &-main__image {
                display: none;
                margin-top: 20px;

                @media(max-width: $md3) and (min-width: $md4) {
                    display: block;
                }
            }
        }

        &-wrapper {
            background: url("../assets/images/header_background.svg"), radial-gradient(68.91% 140.71% at 51.6% 34.95%, #43A99A 0%, #148783 37.59%, #0B5147 100%);
            background-position: center top;
            background-repeat: no-repeat;
            border-radius: 0px 0px 36px 36px;

            @media(max-width: 1250px) {
                background-size: 100%;
                padding: 0px 20px;
            }

            @media(max-width: $md3) {
                background: radial-gradient(68.91% 140.71% at 51.6% 34.95%, #43A99A 0%, #148783 37.59%, #0B5147 100%);
                background-position: bottom;
                background-repeat: no-repeat;
                border-radius: 0px 0px 18px 18px;
                padding: 0px 20px 0px 0px;
            }

            @media(max-width: $md4) {
                background: radial-gradient(160.46% 72.64% at 50% 31.94%, #40B5A3 0%, #0F4E44 100%);
            }
        }

        &-title {
            font-family: 'Exo 2';
            font-style: normal;
            font-weight: 700;
            font-size: 72px;
            line-height: 122%;
            text-transform: capitalize;
            color: $font-color;

            @media(max-width: $md1) {
                font-size: 64px;
            }

            @media(max-width: 1100px) {
                font-size: 60px;
            }

            @media(max-width: 1050px) {
                font-size: 56px;
                margin-top: -10px;
            }

            @media(max-width: $md2) {
                font-size: 48px;
            }

            @media(max-width: 870px) {
                font-size: 42px;
            }

            @media(max-width: 830px) {
                font-size: 40px;
                margin-top: -20px;
            }

            @media(max-width: $md3) {
                font-size: 68px;
                background: url("../assets/images/header-background-tablet.svg");
                background-position: center;
                background-repeat: no-repeat;
                padding: 10px 20px;
                border-radius: 12px;
            }

            @media(max-width: 630px) {
                font-size: 60px;
            }

            @media(max-width: 595px) {
                font-size: 54px;
            }

            @media(max-width: 560px) {
                font-size: 50px;
            }

            @media(max-width: 535px) {
                font-size: 46px;
                padding: 10px 15px;
            }

            @media(max-width: 505px) {
                font-size: 40px;
            }

            @media(max-width: 395px) {
                font-size: 36px;
            }

            @media(max-width: 370px) {
                font-size: 32px;
            }

            @media(max-width: 350px) {
                font-size: 28px;
            }

            &-first__line {
                display: flex;
                align-items: center;

                &-second__word {
                    background-image: url("../assets/images/green_elipse.svg");
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: left center;
                    padding-bottom: 10px;
                    margin-bottom: -10px;
                    padding-right: 10px;
                    margin-right: -10px;


                    @media(max-width: $md2) {
                        background: none;
                    }

                    span {
                        margin-left: 20px;

                        @media(max-width: $md4) {
                            margin-left: 10px;
                        }
                    }
                }

                &-ball__image {
                    align-self: flex-end;
                    margin-left: 5px;

                    @media(max-width: $md4) {
                        max-width: 20px;
                        max-height: 20px;
                    }
                }
            }

            &-second__line {
                display: flex;
                align-items: center;

                &-button {
                    width: 190px;
                    font-weight: 700;
                    height: 50px;

                    @media(max-width: $md2) {
                        width: 160px;
                        height: 40px;
                    }

                    @media(max-width: $md4) {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>
