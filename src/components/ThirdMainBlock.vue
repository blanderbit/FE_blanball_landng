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
                        <img class="b-main-section-images-iphone__1" src="../assets/images/iphone2.svg"
                            alt="b-main-section-images-iphone-1">
                        <img data-aos-offset="300" data-aos-easing="ease-in-sine"
                            class="b-main-section-images-iphone__2" src="../assets/images/Iphone.svg"
                            alt="b-main-section-images-iphone-2">
                    </div>
                </div>
            </div>
        </section>
        <section class="b-third__block-before-footer-section">
            <div class="b-third__block-before-footer-section__content _container">
                <div class="b-third__block-before-footer-section__left-side">
                    <div class="b-third__block-before-footer-section__title"
                        v-html="$t('thirdBlock.beforeFooterSection.title')">
                    </div>
                    <div class="b-third__block-before-footer-section__email-input">
                        <label class="b-third__block-before-footer-section__input-label" for="name">{{
                                $t('thirdBlock.beforeFooterSection.inputLabel')
                        }}</label>
                        <div class="b-third__block-before-footer-section__input-create-account__section">
                            <input class="b-third__block-before-footer-section__input" placeholder="E-mail" type="text"
                                id="name" name="name">
                            <RegisterButton style="height: 45px; margin-right: 0px;"
                                :text="$t('buttons.create_account')" />
                        </div>
                    </div>
                </div>
                <div class="b-third__block-before-footer-section__right-side">
                    <img class="b-third__block-before-footer-section__right-side__image-desk"
                        src="../assets/images/third-main-block-before-footer-section-iphone-desk.svg"
                        alt="third-main-block-before-footer-section-iphone-desk" />
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

        &-before-footer-section {
            @media(max-width: $md4) {
                padding: 0px 15px;
            }

            &__content {
                padding: 40px 60px 52px 20px;
                border-radius: 24px;
                max-height: 315px;
                display: flex;
                justify-content: space-between;
                background-size: cover;
                background: url("../assets/images/third-main-block-second-section-background-desk.svg"), $font-color;

                @media(max-width: $md2) {
                    padding-right: 0px;
                }

                @media(max-width: $md3) {
                    max-height: 245px;
                    padding: 15px 20px 26px 20px;
                    background-repeat: no-repeat;
                    background: url("../assets/images/third-main-block-second-section-background-tablet.svg"), $font-color;
                    background-position: center;
                }
            }

            &__left-side {
                @media(max-width: $md4) {
                    width: 100%;
                }
            }

            &__right-side {
                align-self: center;
                margin-bottom: 40px;

                &__image-desk {
                    @media(max-width: $md3) {
                        display: none;
                    }
                }
            }

            &__title {
                font-family: 'Exo 2';
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

                @media(max-width: 550px) {
                    font-size: 28px;
                }

                @media(max-width: 500px) {
                    font-size: 26px;
                }

                @media(max-width: $md4) {
                    font-size: 23px;
                }

                @media(max-width: 330px) {
                    font-size: 21px;
                }

                @media(max-width: 300px) {
                    font-size: 18px;
                }
            }

            &__email-input {
                display: inline-flex;
                flex-direction: column;

                @media(max-width: $md4) {
                    width: 100%;
                }
            }

            &__input {
                padding: 12px 8px;
                border: 1px solid #C5C5D3;
                border-radius: 8px;
                background-color: transparent;
                font-weight: 400;
                font-size: 14px;
                line-height: 140%;
                color: #C5C5D3;
                margin-right: 15px;
                margin-bottom: 10px;

                @media(max-width: 850px) and (min-width: $md3) {
                    margin-right: 0px;
                }

                @media(max-width: $md4) {
                    margin-right: 0px;
                }

                &-create-account__section {
                    @media(max-width: 850px) {
                        display: flex;
                        flex-direction: column;
                    }

                    @media(max-width: $md3) {
                        flex-direction: row;
                    }

                    @media(max-width: $md4) {
                        width: 100%;
                        flex-direction: column;
                    }
                }

                &-label {
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


    &-main-section {
        &__content {
            background-position: center bottom;
            background-repeat: no-repeat;
            display: block;
            padding-left: 20px;
        }

        &-images {
            margin-bottom: 150px;
            background: url("../assets/images/third-main-block-main-section-background-desk.svg");
            background-position: center bottom;
            background-repeat: no-repeat;
            margin-right: 20px;

            @media(max-width: 900px) {
                background-size: contain;
            }

            @media(max-width: $md3) {
                background: url("../assets/images/third-main-block-main-section-background-tablet.svg");
                background-position: center bottom;
                background-repeat: no-repeat;
                background-size: contain;
                margin-bottom: 100px;
            }

            &-iphone {
                display: flex;
                justify-content: center;
                align-items: center;

                &__1 {
                    margin-bottom: 50px;
                    margin-right: 10px;
                    object-fit: contain;

                    @media(max-width: $md3) {
                        max-width: 300px;
                        margin-right: 0px;
                    }

                    @media(max-width: 700px) {
                        max-width: 280px;

                    }

                    @media(max-width: 650px) {
                        max-width: 250px;
                    }

                    @media(max-width: 600px) {
                        max-width: 230px;
                    }

                    @media(max-width: 550px) {
                        max-width: 210px;
                    }

                    @media(max-width: 520px) {
                        max-width: 200px;
                    }

                    @media(max-width: 500px) {
                        max-width: 190px;
                    }

                    @media(max-width: $md4) {
                        max-width: 180px;
                    }

                    @media(max-width: 450px) {
                        max-width: 170px;
                    }

                    @media(max-width: 410px) {
                        max-width: 160px;
                    }

                    @media(max-width: 390px) {
                        max-width: 140px;
                    }

                    @media(max-width: 350px) {
                        max-width: 125px;
                    }
                }

                &__2 {
                    margin-top: 150px;
                    margin-left: 40px;
                    object-fit: contain;

                    @media(max-width: $md3) {
                        max-width: 300px;
                        margin-left: 0px;
                        margin-top: 60px;
                    }

                    @media(max-width: 700px) {
                        max-width: 280px;
                    }

                    @media(max-width: 650px) {
                        max-width: 250px;
                    }

                    @media(max-width: 600px) {
                        max-width: 230px;
                    }

                    @media(max-width: 550px) {
                        max-width: 210px;
                    }

                    @media(max-width: 520px) {
                        max-width: 200px;
                    }

                    @media(max-width: 500px) {
                        max-width: 190px;
                    }

                    @media(max-width: $md4) {
                        max-width: 180px;
                    }

                    @media(max-width: 450px) {
                        max-width: 170px;
                    }

                    @media(max-width: 410px) {
                        max-width: 160px;
                    }

                    @media(max-width: 390px) {
                        max-width: 140px;
                        margin-top: 20px;
                    }

                    @media(max-width: 350px) {
                        max-width: 125px;
                    }
                }
            }
        }

        &-title {
            font-family: 'Exo 2';
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

            @media(max-width: 400px) {
                font-size: 18px;
                text-align: left;
            }

            @media(max-width: 350px) {
                font-size: 16px;
                margin-top: 30px;
            }
        }

        &-subtitle {
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            text-align: center;
            color: #575775;
            margin-bottom: 20px;

            @media(max-width: $md4) {
                font-size: 14px;
                text-align: left;
            }

            @media(max-width: $md4) {
                margin-bottom: 20px;
            }

            @media(max-width: 400px) {
                font-size: 12px;
            }

            @media(max-width: 350px) {
                font-size: 11px;
            }
        }
    }
}
</style>