<template>
    <main class="b-second__block _container">
        <section class="b-first__block-titles">
            <div data-aos="fade-up-right" data-aos-delay="300" class="b-first__block-main-title" id="b-first__block-main-title">
                {{ $t('firstBlock.title')}}
            </div>
            <div data-aos="fade-up-left" data-aos-delay="400" class="b-first__block-subtitle">
                {{ $t('firstBlock.subtitle')}}
            </div>
        </section>
        <section data-aos="zoom-out-right" data-aos-easing="ease-in-quart" data-aos-delay="700" data-aos-offset="0"
            class="b-first__block-image">
            <img class="b-first__block-image-desk" src="../assets/images/Group_47.svg" alt="Group_47">
            <img class="b-first__block-image-tablet" src="../assets/images/Group_70.svg" alt="Group_70">
        </section>
    </main>
</template>

<style lang="scss" scoped>
@import "assets/styles/base.scss";

.b {
    &-first__block {
        &-main-title {
            font-family: 'Exo 2';
            font-style: normal;
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
        }

        &-image {
            min-height: 600px;
            @media(max-width: $md2) {
                min-height: 400px;
            }
            @media(max-width: $md3) {
                min-height: 200px;
            }
            &-desk {
                @media(max-width: $md3) {
                    display: none;
                }
            }

            &-tablet {
                display: none;

                @media(max-width: $md3) {
                    display: block;
                    margin-top: 30px;
                }
            }
        }

        &-subtitle {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 175%;
            color: #575775;

            @media(max-width: $md3) {
                font-weight: 400;
                font-size: 14px;
            }
        }
    }
}
</style>