<template>
    <main class="b-second__block">
        <section class="b-second__block-first__section">
            <div class="b-second__block-first__section__content _container">
                <div class="b-first__section-main__title b-title" id="b-first__section-main__title">
                    <p>Організовуйте події із</p>гнучкими налаштуваннями
                </div>
                <div class="b-first__section-main__image">
                    <img src="../assets/images/Group_63.svg" alt="Group_63">
                </div>
            </div>
        </section>
        <section class="b-second__block-second__section">
            <div class="b-second__block-second__section__content _container">
                <div class="b-second__section-main__title b-title" id="b-second__section-main__title">
                    <p>Давайте оцінку організації</p>заходів, які відвідали
                </div>
                <div class="b-second__section__image">
                    <img src="../assets/images/players-list.svg" alt="players-list">
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
            height: 1036px;
            width: 100%;
            background: radial-gradient(133.42% 69.74% at 36.01% -1.59%, #148581 0%, #148783 0.01%, #262642 100%);
            border-radius: 36px 36px 0px 0px;
            padding-bottom: 1000px;
        }

        &-second__section {
            height: 1393px;
            width: 100%;
            border-radius: 0px 0px 36px 36px;
            background-image: url('../assets/images/Group_61.svg'), linear-gradient(180deg, #262541 0%, #204557 24%, #1A666D 42.09%, #148783 100%, #148783 100%);
            background-repeat: no-repeat;
            background-position: bottom center;
            @media(max-width: $md2) {
                height: 1103px;
            }
        }
    }

    &-second__section__image {
        margin: 50px 0px 0px 0px;
    }

    &-title {
        font-family: 'Exo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 56px;
        line-height: 128%;
        color: #FFFFFF;
        padding-top: 250px;

        @media(max-width: $md2) {
            font-size: 46px;
        }

        @media(max-width: $md3) {
            font-size: 32px;
        }
    }

    &-first__section-main__title {
        padding-top: 60px;
        @media(max-width: $md2) {
            padding-top: 40px;
        }
    }
}
</style>