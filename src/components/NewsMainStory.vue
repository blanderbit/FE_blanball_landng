<template>
    <div class="b-news-main-story">
        <div class="b-news-main-story-content">
            <div class="b-news-main-story-content-left__side">
                <div class="b-news-main-story-content-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laboriosam quasi labore odit dicta asperiores dolorem repudiandae, minima suscipit nihil quo quaerat
                    amet, rerum, possimus non quisquam facilis quod eum sint?
                </div>
                <div class="b-news-main-story-content-subtitle">
                    Тут ключові тези з майбутнього оновлення.
                    Що саме можна буде зробити, що покращиться,
                    що прибереться і так далі. fdfdfdfdfddffdfdfddf
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error impedit non unde eos tempora aliquid
                    sapiente dolorum sit culpa accusantium blanditiis eligendi expedita, eum voluptatum corrupti illo
                    doloremque hic ab.
                </div>
                <div class="b-news-main-story-content-detail">Детальніше</div>
            </div>
            <div class="b-news-main-story-content-right__side">
                <img class="b-news-main-story-content-right__side-desk" src="../assets/images/news-main.svg" alt="">
                <img class="b-news-main-story-content-right__side-mobile" src="../assets/images/f22.svg" alt="">
            </div>
        </div>
    </div>
</template>
   
<style lang="scss" scoped>
@import "assets/styles/base.scss";
.b {
    &-news-main-story {
        max-width: 800px;
        min-width: 600px;
        width: 100%;
        background: url('../assets/images/main-story-background.svg') #262541;
        height: 240px;
        border-radius: 8px;
        background-position: left;
        background-repeat: no-repeat;
        @media(max-width: $md2) {
            min-width: 400px;
        }
        @media(max-width: $md4) {
            background: url('../assets/images/main-story-background-moblo.svg') #262541;
            background-repeat: no-repeat;
            height: 430px;
            min-width: 300px;
        }
        @media(max-width: 350px) {
            min-width: 200px;
        }

        &-content {
            display: flex;
            justify-content: space-between;

            @media(max-width: $md4) {
                flex-direction: column;
            }

            &-left__side {
                padding: 24px 0px 24px 24px;
                display: flex;
                flex-direction: column;
                @media(max-width: $md4) {
                    padding: 24px
                }
            }
            &-right__side {
                display: flex;
                @media(max-width: $md4) {
                    justify-content: right;
                }
                &-desk {
                    margin-bottom: -5px;
                    @media(max-width: $md4) {
                        display: none;
                    }
                }
                &-mobile {
                    display: none;
                    @media(max-width: $md4) {
                        margin-top: -23px;
                        display: flex;
                    }
                }
                img {
                    border-radius: 8px;
                }
            }

            &-title {
                font-family: 'Exo 2';
                font-weight: 700;
                font-size: 24px;
                line-height: 133%;
                max-width: 300px;
                margin-bottom: 10px;
                color: #FFFFFF;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                @media(max-width: $md4) {
                    max-width: none;
                }
            }

            &-subtitle {
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                max-width: 320px;
                color: #E2E2E9;
                margin-bottom: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                @media(max-width: $md4) {
                    max-width: none;
                }
            }

            &-detail {
                font-size: 14px;
                text-decoration: underline;
                color: #E2E2E9;
            }
        }
    }
}
</style>