<template>
    <main class="b-third__block" id="b-third__block">
        <section class="b-third__block-main-section">
            <div class="b-main-section__content _container">
                <div class="b-main-section-title" v-html="$t('thirdBlock.mainSection.title')">
                </div>
                <div class="b-main-section-subtitle" v-html="$t('thirdBlock.mainSection.subtitle')">
                </div>
                <div class="b-main-section-images">
                    <div class="b-main-section__iphone-images">
                        <img src="../assets/images/iphones.svg" alt="iphone-image" />
                    </div>
                </div>
            </div>
        </section>
        <section
            class="b-third__block-before-footer-section">
            <div class="b-before-footer-section__content _container">
                <div class="b-before-footer-section__left-side">
                    <div class="b-before-footer-section__title" v-html="$t('thirdBlock.beforeFooterSection.title')">
                    </div>
                    <div class="b-before-footer-section__email-input">
                        <label class="b-before-footer-section__input-label" for="name">{{ $t('thirdBlock.beforeFooterSection.inputLabel')}}</label>
                        <div class="input__create-account__section">
                            <input class="b-before-footer-section__input" placeholder="E-mail"
                                type="text" id="name" name="name">
                            <RegisterButton text="Створити акаунт"/>
                        </div>
                    </div>
                </div>
                <div 
                    class="b-before-footer-section__right-side wow slideInLeft">
                    <img class="b-right-side__image-desk" src="../assets/images/Frame_1472.svg" alt="Frame_1472" />
                    <img class="b-right-side__image-tablet" src="../assets/images/Frame_1473.svg" alt="Frame_1473" />
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
            @media(max-width: $md2) {
                display: none;
            }
        }

        &-tablet {
            display: none;

            @media(max-width: $md2) {
                display: block;
            }
        }
    }

    &-main-section {
        &__content {
            background: url("../assets/images/Group_65.svg");
            background-position: center center;
            background-repeat: no-repeat;
            height: 1400px;
            display: block;

            @media(max-width: $md3) {
                background: url("../assets/images/Ellipse_38.svg");
                background-position: center center;
                background-repeat: no-repeat;
                height: 1200px;
            }
        }

        &-images {
            display: flex;
            justify-content: space-around;
            align-items: center;
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
        }

        &-subtitle {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color: #575775;
            margin-bottom: 15px;
        }
    }

    &-before-footer-section {
        &__content {
            padding: 40px 60px 52px;
            border-radius: 24px;
            max-height: 316px;
            display: flex;
            justify-content: space-between;
            background: url("../assets/images/Group_69.svg"), #262541;

            @media(max-width: $md2) {
                max-height: 245px;
                padding: 15px 0px 40px;
                background-repeat: no-repeat;
                background: url("../assets/images/Froup_71.svg"), #262541;
            }
        }

        &__right-side {
            align-self: center;
            margin-bottom: 40px;
        }
        &__left-side {
            margin-left: 10px;
        }

        &__title {
            font-family: 'Exo 2';
            font-style: normal;
            font-weight: 700;
            font-size: 48px;
            line-height: 133%;
            color: #FFFFFF;
            margin-bottom: 25px;

            @media(max-width: $md2) {
                font-size: 34px;
                margin-bottom: 20px;
            }

            @media(max-width: $md3) {
                font-size: 32px;
                margin-bottom: 20px;
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

                @media(max-width: $md2) {
                    font-size: 14px;
                }
            }
        }
    }
}
</style>