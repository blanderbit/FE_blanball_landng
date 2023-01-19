<template>
    <div class="b-header-wrapper">
        <header class="b-header" id="b-header">
            <div class="b-header-content _container">
                <section class="b-header-content-top-side">
                    <section class="b-header-menu">
                        <HeaderMenu />
                    </section>
                    <section class="b-header-title">
                        <div class="b-header-title-first__line">
                            <div data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-delay="500"
                                data-aos-offset="0" class="b-header-title-first__line-first__word">{{ $t('header.train')
                                }}</div>
                            <img
                                data-aos="fade-zoom-in" 
                                data-aos-easing="linear" 
                                data-aos-delay="650"
                                data-aos-offset="0" 
                                class="b-header-title-first__line-ball__image"
                                src="/images/logo-ball.png" 
                                alt="logo-ball" />
                            <div data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-delay="800"
                                data-aos-offset="0" class="b-header-title-first__line-second__word"><span>{{
                                        $t('header.play')
                                }}</span></div>
                            <img
                                data-aos="fade-zoom-in" 
                                data-aos-easing="linear" 
                                data-aos-delay="950"
                                data-aos-offset="0" 
                                class="b-header-title-first__line-ball__image"
                                src="/images/logo-ball.png" 
                                alt="logo-ball"/>
                        </div>
                        <div class="b-header-title-second__line">
                            <RegisterButton class="b-header-title-second__line-button" :text="$t('buttons.register')" />
                            <div data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-delay="1100"
                                data-aos-offset="0" class="b-header-title-second__line-first__word">{{ $t('header.rest')
                                }}</div>
                        </div>
                    </section>
                </section>
                <section class="b-header-content-bottom-side">
                    <div class="b-header-content-bottom-side-user-raiting">
                        <img
                            src="/images/users-raiting.png" 
                            alt="user-raiting"/>
                    </div>
                    <div class="b-header-content-bottom-side-iphone">
                        <img
                            class="b-header-content-bottom-side-iphone" 
                            src="/images/Iphone1.png" 
                            alt="header-main-image-tablet"/>
                    </div>
                </section>
                <div class="b-header-tablet-main__image">
                    <img
                        src="/images/users-raiting.png" 
                        alt="header-main-image-tablet"/>
                </div>
                <div class="b-header-mobile-main__image">
                    <img
                        src="/images/header-main-image-mobile.png" 
                        alt="header-main-image-mobile" 
                        preset="blanball" />
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
        background: url("/images/header-background-lines.svg");
        width: 100%;
        border-radius: 0px 0px 36px 36px;
        padding-top: 20px;
        background-repeat: no-repeat;
        padding-bottom: 80px;

        @media(max-width: $md2) {
            padding-bottom: 50px;
        }

        @media(max-width: $md3) {
            background: none;
            padding-left: 20px;
            padding-bottom: 40px;
        }

        &-content {
            &-bottom-side {
                display: grid;
                grid-template-columns: 2fr 1fr;
                @media(max-width: $md3) {
                        display: none;
                    }
                &-user-raiting {
                    margin-top: 17px;
                    margin-right: 15px;
                }
                &-iphone {
                    margin-top: -80px;

                    @media(max-width: 1150px) {
                        margin-top: -70px;
                    }
                    @media(max-width: 1060px) {
                        margin-top: -55px;
                    }
                    @media(max-width: $md2) {
                        margin-top: -40px;
                    }
                    @media(max-width: 900px) {
                        margin-top: -40px;
                    }
                    @media(max-width: 850px) {
                        margin-top: -30px;
                    }
                    @media(max-width: 800px) {
                        margin-top: -25px;
                    }
                    
                    img {
                        background: #fff;
                        border-radius: 30px;
                        padding: 0px 40px 30px 40px;
                    }
                }
            }
            &-top-side {
                @media(min-width: $md3) {
                    border-radius: 30px;
                    background: #fff;
                    padding: 20px;
                }
            }
        }

        @media(max-width: $md4) {
            background: url("images/header-background-lines-mobile.svg");
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
            background: radial-gradient(68.91% 140.71% at 51.6% 34.95%, #43A99A 0%, #148783 37.59%, #0B5147 100%);
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
                background: url("/images/header-background-tablet.svg");
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
                    background-image: url("/images/green_elipse.svg");
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

                &-first__word {
                    margin-left: 20px;
                }

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
