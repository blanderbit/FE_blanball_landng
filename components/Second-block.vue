<template>
    <main class="b-second__block _container">
        <section class="b-second__block-titles">
            <div class="b-second__block-main-title">
                Об'єднуйтеся у команди
            </div>
            <div class="b-second__block-subtitle">
                Знаходьте товаришів у ваших містах, районах та вулицях
            </div>
        </section>
        <section class="b-second__block-image">
            <img src="../assets/images/Group 47.svg" alt="">
        </section>
    </main>
</template>

<style lang="scss">
@import "assets/styles/base.scss";

.b {
    &-second__block {
        margin-top: 70px;
        &-main-title {
            font-family: 'Exo 2';
            font-style: normal;
            font-weight: 700;
            font-size: 56px;
            line-height: 72px;
            color: $font-color;
            margin-bottom: 5px;
        }

        &-subtitle {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 28px;
            color: #575775;

        }
    }
}
</style>