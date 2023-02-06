<template>
    <main class="b-first-block _container">
        <div class="b-first-block__content">
            <section class="b-first-block-titles">
                <div data-aos="fade-up-right" data-aos-delay="300" class="b-first-block__title"
                    id="b-first-block__title">
                    {{ $t('firstBlock.title') }}
                </div>
                <div data-aos="fade-up-left" data-aos-delay="400" class="b-first-block__subtitle">
                    {{ $t('firstBlock.subtitle') }}
                </div>
            </section>
            <section data-aos="zoom-out-right" data-aos-easing="ease-in-quart" data-aos-delay="700" data-aos-offset="0"
                class="b-first-block__image">
                <img
                    class="b-first-block__image-desk" 
                    src="/images/first-main-block-desk.png"
                    alt="first-main-block-desk" />
                <img 
                    preset="blanball"
                    class="b-first-block__image-tablet" 
                    src="/images/first-main-block-tablet.png"
                    alt="first-main-block-tablet" />
                <div class="b-first-block__image-mobile">
                    <img 
                    preset="blanball"
                    src="/images/first-main-block-mobile.png" 
                    alt="first-main-block-mobile" />
                </div>
            </section>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@import "assets/styles/variables.scss";

.b {
    &-first-block {
        padding-left: 20px;
        &__title {
            font-family: 'Exo 2';
            font-weight: 700;
            font-size: 56px;
            line-height: 122%;
            color: $font-color;
            margin-bottom: 5px;
            margin-top: 70px;

            @media(max-width: $md2) {
                margin-top: 40px;
            }

            @media(max-width: $md2) {
                font-weight: 800;
                font-size: 48px;
            }

            @media(max-width: $md3) {
                font-weight: 800;
                font-size: 32px;
            }

            @media(max-width: $md4) {
                font-size: 27px;
            }

            @media(max-width: 380px) {
                font-size: 24px;
            }

            @media(max-width: 340px) {
                font-size: 20px;
            }
        }

        &__image {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 600px;
            margin-left: -20px;
            margin-bottom: 50px;

            @media(max-width: $md2) and (min-width: $md4) {
                min-height: 400px;
            }

            @media(max-width: $md4) {
                min-height: 200px;
            }

            &-desk {
                align-self: flex-start;

                @media(max-width: $md3) {
                    display: none;
                }
            }

            &-tablet {
                display: none;

                @media(max-width: $md3) and (min-width: $md4) {
                    display: block;
                    margin-top: 30px;
                    width: 100%;
                }
            }

            &-mobile {
                display: none;
                margin-top: 20px;

                @media(max-width: $md4) {
                    display: block;
                }
            }
        }

        &__subtitle {
            font-weight: 500;
            font-size: 16px;
            line-height: 175%;
            color: #575775;
            margin-top: 5px;
            max-width: 500px;

            @media(max-width: $md3) {
                font-weight: 400;
                max-width: 400px;
                font-size: 14px;
            }

            @media(max-width: $md4) {
                font-size: 14px;
                max-width: 270px;
            }
        }
    }
}
</style>