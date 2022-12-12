<template>
    <main class="b-second__block">
        <section class="b-second__block-first__section">
            <div class="b-second__block-first__section__content _container">
                <div class="b-first__section-main__title b-title" id="b-first__section-main__title"
                    v-html="$t('secondBlock.firstSection.title')">
                </div>
                <div class="b-first__section-main__image">
                    <div class="b-first__section-main__image-desk">
                        <img src="../assets/images/Group_63.svg" alt="Group_63">
                    </div>
                    <div class="b-first__section-main__image-tablet">
                        <img src="../assets/images/Group_66.svg" alt="Group_66">
                    </div>
                </div>
            </div>
        </section>
        <section class="b-second__block-second__section">
            <div class="b-second__block-second__section__content _container">
                <div class="b-second__section-main__title b-title" id="b-second__section-main__title"
                    v-html="$t('secondBlock.secondSection.title')">
                </div>
                <div class="b-second__section__image">
                    <div class="b-second__section__image-desk">
                        <img src="../assets/images/players-list.svg" alt="players-list">
                    </div>
                    <div class="b-second__section__image-tablet">
                        <img src="../assets/images/players-list-tablet.svg" alt="players-list-tablet">
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
    &-second__block {
        &-first__section {
            width: 100%;
            background: radial-gradient(133.42% 69.74% at 36.01% -1.59%, #148581 0%, #148783 0.01%, #262642 100%);
            border-radius: 36px 36px 0px 0px;
            min-height: 700px;

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
            background-image: url('../assets/images/Group_61.svg'), linear-gradient(180deg, #262541 0%, #204557 24%, #1A666D 42.09%, #148783 100%, #148783 100%);
            background-repeat: no-repeat;
            background-position: bottom center;
            padding-bottom: 70px;
            min-height: 700px;

            @media(max-width: $md2) {
                padding-bottom: 50px;
                min-height: 500px;
            }

            @media(max-width: $md3) {
                min-height: 300px;
            }


            @media(max-width: $md2) {
                background-size: cover;
            }

            @media(max-width: $md3) {
                background-image: url('../assets/images/second-block-background-tablet.svg'), linear-gradient(180deg, #262541 0%, #204557 24%, #1A666D 42.09%, #148783 100%, #148783 100%);
                background-repeat: no-repeat;
                background-position: bottom center;
            }
        }
    }

    &-first__section-main__image {
        &-desk {
            @media(max-width: $md3) {
                display: none;
            }
        }

        &-tablet {
            display: none;

            @media(max-width: $md3) {
                display: block;
                margin-left: -20px;
            }
        }
    }

    &-second__section__image {
        margin: 50px 0px 0px 0px;

        &-desk {
            @media(max-width: $md3) {
                display: none;
            }
        }

        &-tablet {
            display: none;

            @media(max-width: $md3) {
                display: block;
                margin-left: 15px;
            }
        }
    }

    &-title {
        font-family: 'Exo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 56px;
        line-height: 128%;
        color: #FFFFFF;
        padding-top: 100px;

        @media(max-width: $md2) {
            font-size: 46px;
        }

        @media(max-width: $md3) {
            font-size: 32px;
            padding-top: 50px;
        }
    }

    &-first__section-main__title {
        padding-top: 60px;
        padding-bottom: 30px;

        @media(max-width: $md2) {
            padding-top: 40px;
        }

        @media(max-width: $md3) {
            padding-bottom: 10px;
        }
    }
}
</style>