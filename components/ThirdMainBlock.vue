<template>
    <main class="b-third__block" id="b-third__block">
        <section class="b-third__block-main-section">
            <div class="b-main-section__content _container">
                <div class="b-main-section-title" v-html="$t('thirdBlock.mainSection.title')">
                </div>
                <div class="b-main-section-subtitle" v-html="$t('thirdBlock.mainSection.subtitle')">
                </div>
                <div class="b-main-section-images">
                    <div class="b-main-section-images-iphone">
                        <img data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"
                            class="b-main-section-images-iphone__1" src="../assets/images/iphone2.svg" alt="">
                        <img data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"
                            class="b-main-section-images-iphone__2" src="../assets/images/Iphone.svg" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section class="b-third__block-before-footer-section">
            <div class="b-before-footer-section__content _container">
                <div class="b-before-footer-section__left-side">
                    <div class="b-before-footer-section__title" v-html="$t('thirdBlock.beforeFooterSection.title')">
                    </div>
                    <div class="b-before-footer-section__email-input">
                        <label class="b-before-footer-section__input-label" for="name">{{
                                $t('thirdBlock.beforeFooterSection.inputLabel')
                        }}</label>
                        <div class="b-before-footer-section__input-create-account__section">
                            <input class="b-before-footer-section__input" placeholder="E-mail" type="text" id="name"
                                name="name">
                            <RegisterButton text="Створити акаунт" />
                        </div>
                    </div>
                </div>
                <div class="b-before-footer-section__right-side">
                    <img class="b-right-side__image-desk"
                        src="../assets/images/third-main-block-before-footer-section-iphone-desk.svg"
                        alt="third-main-block-before-footer-section-iphone-desk" />
                    <img class="b-right-side__image-tablet"
                        src="../assets/images/third-main-block-before-footer-section-iphone-tab.svg"
                        alt="third-main-block-before-footer-section-iphone-tablet" />
                </div>
            </div>
        </section>
    </main>
</template>

<script>

</script>

<style lang="scss">
@import "assets/styles/base.scss";

.b {
    &-third__block {
        margin-bottom: 160px;
    }

    &-right-side__image {
        &-desk {
            @media(max-width: $md3) {
                display: none;
            }
        }

        &-tablet {
            display: none;

            @media(max-width: $md3) {
                display: block;
            }
        }
    }

    &-main-section {
        &__content {
            background: url("../assets/images/Group_65.svg");
            background-position: center bottom;
            background-repeat: no-repeat;
            display: block;

            @media(max-width: $md3) {
                background: url("../assets/images/Ellipse_38.svg");
                background-repeat: no-repeat;
                background-position: center bottom;
                background-size: contain;
            }
        }

        &-images {
            margin-bottom: 150px;

            @media(max-width: $md3) {
                margin-bottom: 100px;
            }

            &-iphone {
                display: flex;
                justify-content: center;
                align-items: center;

                &__1 {
                    margin-bottom: 50px;
                    margin-right: 10px;

                    @media(max-width: $md3) {
                        max-width: 300px;
                        margin-right: 0px;
                    }
                }

                &__2 {
                    margin-top: 150px;
                    margin-left: 40px;

                    @media(max-width: $md3) {
                        max-width: 300px;
                        margin-left: 0px;
                        margin-top: 100px;
                    }
                }
            }
        }

        &-title {
            font-family: 'Exo 2';
            font-style: normal;
            font-weight: 700;
            font-size: 56px;
            line-height: 137%;
            text-align: center;
            color: &font-color;
            margin: 70px 0px 25px 0px;

            @media(max-width: $md2) {
                font-weight: 800;
                font-size: 42px;
                margin: 50px 0px 10px 0px;
            }

            @media(max-width: $md3) {
                font-weight: 800;
                font-size: 32px;
                margin: 50px 0px 10px 0px;
            }

            @media(max-width: 600px) {
                font-size: 26px;
            }

            @media(max-width: $md4) {
                font-size: 20px;
                text-align: left;
            }
        }

        &-subtitle {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            text-align: center;
            color: #575775;

            @media(max-width: $md4) {
                font-size: 14px;
                text-align: left;
            }
        }
    }

    &-before-footer-section {
        &__content {
            padding: 40px 60px 52px 20px;
            border-radius: 24px;
            max-height: 316px;
            display: flex;
            justify-content: space-between;
            background: url("../assets/images/Group_69.svg"), #262541;

            @media(max-width: $md2) {
                padding-right: 0px;
            }

            @media(max-width: $md3) {
                max-height: 245px;
                padding: 15px 0px 40px;
                padding: 15px 0px 40px 20px;
                background-repeat: no-repeat;
                background: url("../assets/images/Froup_71.svg"), #262541;
            }
        }

        &__right-side {
            align-self: center;
            margin-bottom: 40px;
        }

        &__title {
            font-family: 'Exo 2';
            font-style: normal;
            font-weight: 700;
            font-size: 44px;
            line-height: 133%;
            color: #FFFFFF;
            margin-bottom: 25px;

            @media(max-width: $md2) {
                font-size: 38px;
            }

            @media(max-width: 850px) {
                font-size: 32px;
                margin-bottom: 10px;
            }

            @media(max-width: $md3) {
                max-width: 390px;
            }
        }

        &__email-input {
            display: inline-flex;
            flex-direction: column;
        }

        &__input {
            padding: 12px 8px;
            border: 1px solid #C5C5D3;
            border-radius: 8px;
            background-color: transparent;
            width: 300px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 140%;
            color: #C5C5D3;
            margin-right: 15px;
            margin-bottom: 10px;

            &-create-account__section {
                @media(max-width: 850px) {
                    display: flex;
                    flex-direction: column;
                }
            }

            @media(max-width: $md2) {
                width: 250px;
            }

            &-label {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                line-height: 20px;
                color: #FFFFFF;
                margin-bottom: 10px;
                max-width: 200px;

                @media(max-width: $md2) {
                    font-size: 14px;
                }
            }
        }
    }
}
</style>