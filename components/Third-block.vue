<template>
    <main class="b-third__block">
        <section class="b-third__block-first__section">
            <div class="b-third__block-first__section__content _container">
                <div class="b-first__section-main__title b-title">
                    <p>Організовуйте події із</p>гнучкими налаштуваннями
                </div>
                <div class="b-first__section-main__image">
                    <img src="../assets/images/events.svg" alt="events">
                </div>
            </div>
        </section>
        <section class="b-third__block-second__section">
            <div class="b-third__block-second__section__content _container">
                <div class="b-second__section-main__title b-title">
                    Давайте оцінку організації заходів, які відвідали
                </div>
                <!-- <div class="b-second__section__image">
                    <img src="../assets/images/events.svg" alt="events">
                </div> -->
            </div>
        </section>
    </main>
</template>

<style lang="scss">
@import "assets/styles/base.scss";

.b {
    &-third__block {
        margin-top: 100px;
        &-first__section {
            height: 1036px;
            width: 100%;
            background: radial-gradient(133.42% 69.74% at 36.01% -1.59%, #148581 0%, #148783 0.01%, #262642 100%);
            border-radius: 36px 36px 0px 0px;
        }

        &-second__section {
            height: 1393px;
            width: 100%;
            border-radius: 0px 0px 36px 36px;
            background-image: url('../assets/images/Ellipse\ 48.svg'), linear-gradient(180deg, #262541 0%, #204557 24%, #1A666D 42.09%, #148783 100%, #148783 100%);
            background-repeat: no-repeat;
            background-position: center сenter;
        }

    }
    &-first__section-main__image {
        margin-bottom: 300px;
    }

    &-title {
        font-family: 'Exo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 56px;
        line-height: 72px;
        color: #FFFFFF;
    }

    &-first__section-main__title {
        padding-top: 70px;
    }
}
</style>