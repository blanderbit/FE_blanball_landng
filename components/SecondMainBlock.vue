<template>
    <main class="b-second-block">
        <section class="b-second-block-first__section">
            <div class="b-second-block-first__section__content _container">
                <div class="b-second-block-first__section__title b-title" id="b-second-block-first__section-main__title"
                    v-html="$t('secondBlock.firstSection.title')">
                </div>
                <div class="b-second-block-first__section-main__image">
                    <div class="b-second-block-first__section-main__image-desk">
                        <img 
                            src="../assets/images/second-block-first-section-main-image-desk.svg" 
                            alt="second-block-first-section-main-image-desk">
                    </div>
                    <div class="b-second-block-first__section-main__image-tablet">
                        <img src="../assets/images/second-block-first-section-tablet.svg"
                            alt="second-block-first-section-tablet">
                    </div>
                    <div class="b-second-block-first__section-main__image-mobile">
                        <img src="../assets/images/second-block-first-section-mobile.svg"
                            alt="second-block-first-section-mobile">
                    </div>
                    <div class="b-second-block-first__section-mobile__block">
                        <section class="b-second-block-first__section-mobile__block-first">
                            <div class="b-second-block-first__section-mobile__block__title">
                                Обирайте конкретні дати проведення заходів
                            </div>
                            <div class="b-second-block-first__section-mobile__block__image">
                                <img 
                                src="../assets/images/b-second-block-first-section-mobile-block-1.svg" 
                                alt="b-second-block-first-section-mobile-block-1">
                            </div>
                        </section>
                        <section class="b-second-block-first__section-mobile__block-second">
                            <div class="b-second-block-first__section-mobile__block__title">
                                Призначайте кольори форм гравцям обидвох команд
                            </div>
                            <div class="b-second-block-first__section-mobile__block__image">
                                <img 
                                src="../assets/images/b-second-block-first-section-mobile-block-2.svg" 
                                alt="b-second-block-first-section-mobile-block-2">
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
        <section class="b-second-block-second__section">
            <div class="b-second-block-second__section__content _container">
                <div class="b-second-block-second__section-main__title b-title" id="b-second__section-main__title"
                    v-html="$t('secondBlock.secondSection.title')">
                </div>
                <div class="b-second-block-second__section__image">
                    <div class="b-second-block-second__section__image-desk">
                        <img src="../assets/images/second-main-block-second-section-desk.svg"
                            alt="second-main-block-second-section-desk">
                    </div>
                    <div class="b-second-block-second__section__image-tablet">
                        <img src="../assets/images/second-main-block-second-section-tablet.svg"
                            alt="second-main-block-second-section-tablet">
                    </div>
                    <div class="b-second-block-second__section__image-mobile">
                        <img src="../assets/images/second-main-block-second-section-mob.svg"
                            alt="second-main-block-second-section-mobile">
                        <img src="../assets/images/create-review-second-block.svg"
                            alt="create-review-second-block">
                    </div>
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
    &-title {
        font-family: 'Exo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 56px;
        line-height: 128%;
        color: #FFFFFF;
        padding-top: 70px;

        @media(max-width: $md2) {
            font-size: 46px;
        }

        @media(max-width: $md3) {
            font-size: 32px;
        }

        @media(max-width: 850px) {
            padding-top: 50px;
        }

        @media(max-width: 600px) {
            padding-top: 40px;
            font-size: 28px;
        }

        @media(max-width: $md4) {
            font-weight: 800;
            font-size: 23px;
            padding-top: 30px;
            padding-right: 20px;
        }

        @media(max-width: 420px) {
            font-size: 20px;
        }

        @media(max-width: 320px) {
            padding-top: 20px;
            font-size: 18px;
        }

        @media(max-width: 290px) {
            font-size: 16px;
        }
    }

    &-second-block {
        &-first__section {
            width: 100%;
            background: radial-gradient(133.42% 69.74% at 36.01% -1.59%, #148581 0%, #148783 0.01%, #262642 100%);
            border-radius: 36px 36px 0px 0px;
            min-height: 700px;

            &__title {
                padding-top: 60px;
                padding-bottom: 30px;
                max-width: 850px;

                @media(max-width: $md2) {
                    padding-top: 40px;
                    max-width: 700px;
                }

                @media(max-width: $md3) {
                    padding-bottom: 10px;
                    max-width: 520px;
                    padding-top: 30px;
                }
                @media(max-width: $md4) {
                    padding-top: 20px;
                }
            }

            &-mobile__block {
                display: none;
                margin-left: -20px;

                @media(max-width: $md4) {
                    display: block;
                }
                &-first {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                &-second {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                &__title {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 150%;
                    text-align: center;
                    color: #FFFFFF;
                    max-width: 250px;
                    margin: 24px 0px 13px 0px;
                }
            }

            &-main__image {
                &-desk {
                    margin-right: 20px;

                    @media(max-width: $md3) {
                        display: none;
                    }
                }

                &-tablet {
                    display: none;

                    @media(max-width: $md3) and (min-width: $md4) {
                        display: block;
                        margin-left: -20px;

                        img {
                            width: 110%;
                        }
                    }
                }

                &-mobile {
                    display: none;

                    @media(max-width: $md4) {
                        display: block;
                        margin-left: -20px;

                        img {
                            width: 110%;
                        }
                    }
                }
            }

            @media(max-width: $md2) {
                min-height: 500px;
            }

            @media(max-width: $md3) {
                min-height: 300px;
            }
        }

        &-second__section {
            width: 100%;
            border-radius: 0px 0px 36px 36px;
            background-image: url('../assets/images/second-main-block-second-section-background.svg'), 
            linear-gradient(180deg, #262541 0%, #204557 24%, #1A666D 42.09%, #148783 100%, #148783 100%);
            background-repeat: no-repeat;
            background-position: bottom;
            padding-bottom: 70px;
            min-height: 700px;
            background-size: contain;

            &__image {
                margin-top: 30px;

                img {
                    width: 110%;
                }

                @media(max-width: $md3) {
                    margin-top: 10px;
                }

                &-desk {
                    @media(max-width: $md3) {
                        display: none;
                    }
                }

                &-tablet {
                    display: none;

                    @media(max-width: $md3) and (min-width: $md4) {
                        display: block;
                    }
                }

                &-mobile {
                    display: none;

                    @media(max-width: $md4) {
                        display: block;
                        padding-bottom: 0px;
                    }

                    &::before {
                        content: 'Оцінюйте та коментуйте гру кожного з  учасників матчу';
                        display: block;
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 142%;
                        color: #C5C5D3;
                        max-width: 320px;
                        margin-bottom: 20px;

                        @media(max-width: 320px) {
                            font-size: 13px;
                            max-width: 200px;
                        }
                    }
                }
            }

            @media(max-width: $md2) {
                padding-bottom: 50px;
                min-height: 500px;
            }

            @media(max-width: $md3) {
                min-height: 300px;
            }

            @media(max-width: $md3) {
                background-image: url('../assets/images/second-block-background-tablet.svg'), linear-gradient(180deg, #262541 0%, #204557 24%, #1A666D 42.09%, #148783 100%, #148783 100%);
                background-repeat: no-repeat;
                background-position: bottom center;
            }
        }
    }
}
</style>