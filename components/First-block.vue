<template>
    <div class="b-wrapper">
        <Header />
        <main class="b-first__page">
            <div class="b-firt__page__content">
                <div class="b__main-content">
                    <section class="b__main-title">
                        <div class="b-first__line">
                            <div class="b-title__first_word">Тренуйся</div>
                            <img class="b-title__image" src="../assets/images/ball.svg" alt="">
                            <div class="b-title__second_word"><span>грай</span></div>
                            <img class="b-title__image" src="../assets/images/ball.svg" alt="">
                        </div>
                        <div class="b-second__line">
                            <RegisterButton class="b-title__register-button" />
                            <div class="b-title__third_word">Відпочивай</div>
                        </div>
                    </section>
                    <section class="b__main-images">
                        <div class="b-user-raiting-image">
                            <img src="../assets/images/user-raiting.svg" alt="">
                        </div>
                        <div class="b-iphone-image">
                            <img src="../assets/images/Iphone1.svg" alt="">
                        </div>
                    </section>
                </div>
            </div> 
        </main> 
    </div>
</template>

<style lang="scss">
@import "assets/styles/base.scss";

.b {
    &-wrapper {
        background: $fone-color;
        border-radius: 0px 0px 36px 36px;
        width: 1440px;
        height: 940px;
        width: 100%;
        position: absolute;
        width: 100%;
        padding-left: 30px;
    }

    &-first__page {
        max-width: 1200px;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 0px 0px 32px 32px;
        max-height: 200px;
        height: 100%;
    }

    &__main-title {
        width: 329px;
        height: 88px;
        font-family: 'Exo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 72px;
        line-height: 88px;
        text-transform: capitalize;
        color: $font-color;
        margin-left: 30px;
    }

    &-first__line {
        display: flex;
        align-items: center;
    }

    &-second__line {
        display: flex;
        align-items: center;
    }

    &-title__register-button {
        padding: 12px 16px;
        width: 200px;
        height: 48px;
        border-radius: 12px;
        margin-top: 15px;
    }

    &-title {
        &__second_word {
            background-image: url("../assets/images/green-elipse.svg");
            background-repeat: no-repeat ;
            background-position: center;
            margin-left: 25px;
            height: 100px;
            min-width: 192px;
            span {
                margin-left: 20px;
            }
        }

        &__third_word {
            margin-left: 10px;
        }

        &__image {
            align-self: flex-end;
            margin-left: 5px;
        }
    }
    &__main-images {
        display: flex;
    }
    &-user-raiting-image {
        margin-top: 130px ;
    }
    &-iphone-image {
        margin-left: 20px;
        height: 100%;
        padding: 0px 45px 53px 30px;
        background-color: #fff;
        border-radius: 28px;
    }

}
</style>