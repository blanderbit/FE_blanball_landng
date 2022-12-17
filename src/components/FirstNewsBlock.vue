<template>
    <main class="b-first__news-block _container">
        <div class="b-first__news-block-left__side">
            <section class="b-first__news-block-left__side-texts">
                <div class="b-first__news-block-left__side-title">
                    Тут анонс нової статті чи оновлення
                </div>
                <div class="b-first__news-block-left__side-subtitle">
                    Тут ключові тези з майбутнього оновлення. Що
                    саме можна буде зробити, що покращиться,
                    що прибереться і так далі.
                </div>
                <div class="b-first__news-block-left__side-details">
                    Детальніше
                </div>
            </section>
            <section class="b-first__news-block-left__side">
                <img src="../assets/images/news-main.svg" alt="news-main">
            </section>
        </div>
        <div class="b-first__news-block-right__side">
            <section class="b-first__news-block-right__side-texts">
                <div class="b-first__news-block-right__side-title">
                    Бажаєте слідкувати за <br> оновленнями?
                </div>
                <div class="b-first__news-block-right__side-input-label">
                    Підпишіться на нашу розсилку
                </div>
                <input class="b-first__news-block-right__side-input" placeholder="E-mail" type="text" id="name"
                    name="name">
            </section>
            <img src="../assets/images/news-first-block-left.svg" alt="news-first-block-left">
        </div>
    </main>
</template>

<style lang="scss" scoped>
@import "assets/styles/base.scss";

.b {
    &-first__news-block {
        display: flex;
        margin-top: 25px;

        &-right__side {
            align-items: center;
            padding: 16px 12px;
            max-height: 155px;
            background: #EBEBFA;
            max-width: 400px;
            width: 100%;
            border-radius: 8px;
            margin-left: 40px;
            display: flex;
            padding: 20px;
            justify-content: space-between;

            &-title {
                font-family: 'Exo 2';
                font-weight: 700;
                font-size: 16px;
                line-height: 150%;
                color: $font-color;
            }

            &-input {
                padding: 6px 12px;
                width: 208px;
                height: 36px;
                background: #FFFFFF;
                border-radius: 6px;
                font-weight: 400;
                font-size: 13px;
                line-height: 184%;
                color: #8A8AA8;

                &-label {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 184%;
                    margin-bottom: 12px;
                    margin-top: 5px;
                    color: #575775;
                }

            }
        }

        &-left__side {
            background: $font-color;
            border-radius: 8px;
            max-width: 770px;
            height: 240px;
            width: 100%;
            display: flex;
            background-image: url("../assets/images/news-first-block-background.svg");
            justify-content: space-between;

            &-texts {
                padding: 25px 0px 0px 25px;
            }

            &-title {
                font-family: 'Exo 2';
                font-weight: 700;
                font-size: 24px;
                line-height: 133%;
                color: #FFFFFF;
                max-width: 350px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;

            }

            &-subtitle {
                font-weight: 400;
                font-size: 14px;
                line-height: 142%;
                color: #E2E2E9;
                margin: 12px 0px;
                max-width: 330px;
                display: block;
                text-overflow: ellipsis;
                word-wrap: break-word;
                overflow: hidden;
                max-height: 5.6em;
            }

            &-details {
                font-weight: 400;
                font-size: 14px;
                line-height: 142%;
                text-decoration-line: underline;
                color: #E2E2E9;
            }
        }
    }
}
</style>