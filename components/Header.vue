<template>
    <div class="b-header-wrapper">
        <header class="b-header">
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
                            <RegisterButton text="Зареєструватися" />
                            <div data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-delay="1100"
                                data-aos-offset="0" class="b-header-title-second__line-first__word">{{ $t('header.rest') }}</div>
                        </div>
                    </section>
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
        background: url("../assets/images/Group_43.svg");
        width: 100%;
        border-radius: 0px 0px 36px 36px;
        padding-top: 35px;
        background-repeat: no-repeat;
        padding-bottom: 80px;

        @media(max-width: $md3) {
            background: none;
        }
        &-left__side {
            display: flex;
            flex-direction: column;
        }

        &-wrapper {
            background: url("../assets/images/header_background.svg"), radial-gradient(68.91% 140.71% at 51.6% 34.95%, #43A99A 0%, #148783 37.59%, #0B5147 100%);
            background-position: center top;
            background-repeat: no-repeat;
            // @media(max-width: $md3) {
            //     background: url("../assets/images/header-background-tablet.svg"), radial-gradient(68.91% 140.71% at 51.6% 34.95%, #43A99A 0%, #148783 37.59%, #0B5147 100%);
            //     background-position: bottom;
            //     background-repeat: no-repeat;
            // }

            @media(max-width: 1250px) {
                background-size: 100%;
                padding: 0px 20px;
            }
        }

        &-title {
            font-family: 'Exo 2';
            font-style: normal;
            font-weight: 700;
            font-size: 72px;
            line-height: 122.222222222%;
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
            }

            @media(max-width: $md3) {
                font-size: 68px;
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
                    }
                }

                &-ball__image {
                    align-self: flex-end;
                    margin-left: 5px;
                }
            }

            &-second__line {
                display: flex;
                align-items: center;
            }
        }
    }


}
</style>
