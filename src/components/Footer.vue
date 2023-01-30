<template>
    <footer class="b-footer-desk">
        <ul class="b-footer-desk-body">
            <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="400" data-aos-offset="0"
                class="b-footer-desk__logo">
                <img
                    class="b-footer-desk__logo-desk" 
                    src="/images/footer-logo.svg" 
                    alt="footer-logo" />
                <img 
                    class="b-footer-desk__logo-small" 
                    src="/images/logo-ball.png" 
                    alt="footer-logo-small" />
            </div>
            <Navigation data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="600" data-aos-offset="0"
                :stylings="navigationItemStyles" />
            <div class="b-footer-desk__arrow">
                <span data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="800" data-aos-offset="0">{{
                        $t('footer.blanball')
                }}</span>
                <NuxtLink :to="{ hash: '#b-menu' }" :style="getStyle">
                    <img
                        data-aos="fade-zoom-in" 
                        data-aos-easing="ease-in-back" 
                        data-aos-delay="1000"
                        data-aos-offset="0" 
                        src="/images/footer-arrow.svg" 
                        alt="footer-arrow" />
                </NuxtLink>
            </div>
        </ul>
    </footer>
    <footer class="b-footer-tablet">
        <div class="b-footer-tablet-body">
            <div class="b-footer-tablet-top__side">
                <img 
                    class="b-footer-tablet-top__side-logo"
                    src="/images/footer-logo.svg" 
                    alt="footer-logo" />
                <NuxtLink :to="{ hash: '#b-menu' }" :style="getStyle">
                    <img 
                        data-aos="fade-zoom-in" 
                        data-aos-easing="ease-in-back" 
                        data-aos-delay="1000"
                        data-aos-offset="0" 
                        class="b-footer-tablet-top__side-arrow"
                        src="/images/footer-arrow.svg" 
                        alt="footer-arrow" />
                </NuxtLink>
            </div>
            <div class="b-footer-tablet-main__side">
                <div class="b-footer-tablet-main__side-content">
                    <div class="b-footer-tablet-main__side-input-block">
                        <label class="b-footer-tablet-main__side-input-label" for="name">{{
                                $t('footer.subscribe_newsletter')
                        }}</label>
                        <input class="b-footer-tablet-main__side-input" placeholder="E-mail" type="email" id="email"
                            name="name">
                    </div>
                    <a class="b-footer-tablet-main__side-subscribe-button">{{ $t('buttons.subscribe') }}</a>
                    <div class="b-footer-tablet-navigation">
                        <Navigation style="margin-top: 30px;" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                            data-aos-delay="600" data-aos-offset="0" :stylings="navigationItemStyles"
                            :navigationBodyStyles="navigationBodyStyles" />
                    </div>
                </div>
            </div>
            <div class="b-footer-mobile-navigation">
                <Navigation style="margin-left: -20px" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                    data-aos-delay="600" data-aos-offset="0" :stylings="navigationItemStylesMobile" />
            </div>
            <div class="b-footer-tablet-bottom__side">
                <div class="b-footer-tablet-bottom__side-title">
                    {{ $t('footer.blanball') }}
                </div>
            </div>
        </div>
    </footer>
</template>

 
<script>
export default {
    data() {
        return {
            navigationItemStyles: {
                'color': '#fff',
                'font-size': '14px',
                'line-height': '250%',
            },
            navigationItemStylesMobile: {
                'color': '#fff',
                'font-size': '12px',
                'line-height': '130%',
            },
            navigationBodyStyles: {
                'flex-direction': 'column',
                'margin-right': '50px',
                'max-width': '150px',
            },
        }
    }
}

</script>

<style lang="scss">
@import "assets/styles/base.scss";

.b {
    &-footer {

        &-desk {
            @media(max-width: $md3) {
                display: none;
            }

            &-body {
                padding: 10px 0;
                align-items: center;
                display: flex;
                justify-content: space-between;
                height: 100px;
                background-color: $font-color;
            }

            &__logo {
                margin-left: 90px;

                @media(max-width: $md2) {
                    margin-left: 40px;
                }

                &-desk {
                    @media(max-width: 850px) {
                        display: none;
                    }
                }

                &-small {
                    display: none;

                    @media(max-width: 850px) {
                        display: block;
                    }
                }
            }

            &__arrow {
                display: flex;
                align-items: center;
                padding-right: 30px;

                @media(max-width: $md2) {
                    padding-right: 15px;
                }

                span {
                    font-size: 16px;
                    margin-right: 30px;
                    color: #fff;

                    @media(max-width: $md2) {
                        margin-left: 15px;
                    }

                }
            }
        }

        &-mobile {
            &-navigation {
                display: none;

                @media(max-width: 650px) {
                    display: block;
                }
            }
        }

        &-tablet {
            display: none;

            @media(max-width: $md3) {
                display: block;
            }

            &-navigation {
                @media(max-width: 650px) {
                    display: none;
                }
            }

            &-body {
                padding: 15px 20px 25px 20px;
                background-color: $font-color;

                @media(max-width: $md3) and (min-width: $md4) {
                    border-radius: 0px 0px 20px 20px;
                }

                @media(max-width: $md4) {
                    padding: 15px 20px 10px 20px;
                }
            }

            &-top__side {
                display: flex;
                justify-content: space-between;
                position: relative;

                @media(max-width: $md4) {
                    position: relative;
                }
                &-logo {
                    max-height: 30px;
                }

                &-arrow {
                    @media(max-width: $md4) {
                        position: absolute;
                        right: 5px;
                        top: -30px;
                    }
                }
            }

            &-bottom__side {
                &-title {
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 120%;
                    color: #FFFFFF;
                    margin-top: 30px;

                    @media(max-width: $md4) {
                        display: flex;
                        justify-content: center;

                    }
                }
            }

            &-main__side {
                &-content {
                    display: flex;
                    align-items: center;
                    height: 100px;

                    @media(max-width: 325px) {
                        height: 30px;
                    }
                }

                &-subscribe-button {
                    padding: 4px 16px 4px 16px;
                    width: 112px;
                    display: flex;
                    height: 40px;
                    align-items: center;
                    justify-content: center;
                    background: #575775;
                    border-radius: 6px;
                    margin-left: 5px;
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 187%;
                    color: #FFFFFF;
                    margin-bottom: -30px;

                    @media(max-width: 325px) {
                        display: none;
                    }
                }

                &-input {
                    padding: 4px 12px;
                    background: transparent;
                    height: 40px;
                    background: $font-color;
                    border: 1px solid #C5C5D3;
                    border-radius: 6px;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 140%;
                    color: #C5C5D3;
                    margin-top: 5px;

                    @media(max-width: 410px) {
                        max-width: 200px;
                    }

                    @media(max-width: 350px) {
                        max-width: 170px;
                    }

        
                    &-block {
                        max-width: 250px;

                        @media(max-width: 410px) {
                            max-width: 200px;
                        }

                        @media(max-width: 350px) {
                            max-width: 170px;
                        }

                        @media(max-width: 325px) {
                            display: none;
                        }
                    }

                    &-label {
                        font-weight: 500;
                        font-size: 15px;
                        line-height: 133%;
                        color: #C5C5D3;

                        @media(max-width: 350px) {
                            font-size: 13px;
                        }
                    }
                }
            }
        }
    }
}
</style>