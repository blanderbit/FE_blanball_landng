<template>
    <div class="b-news-main-story" :class="{'b-news-main-story-active': active}">
        <div class="b-news-main-story-content">
            <div class="b-news-main-story-content-left__side">
                <div class="b-news-main-story-content-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laboriosam quasi labore odit dicta asperiores dolorem repudiandae, minima suscipit nihil quo quaerat
                    amet, rerum, possimus non quisquam facilis quod eum sint?
                </div>
                <div class="b-news-main-story-content-subtitle" :class="{'b-news-main-story-content-subtitle-active': active}">
                    Тут ключові тези з майбутнього оновлення.
                    Що саме можна буде зробити, що покращиться,
                    що прибереться і так далі. fdfdfdfdfddffdfdfddf
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error impedit non unde eos tempora aliquid
                    sapiente dolorum sit culpa accusantium blanditiis eligendi expedita, eum voluptatum corrupti illo
                    doloremque hic ab.
                    Тут ключові тези з майбутнього оновлення.
                    Що саме можна буде зробити, що покращиться,
                    що прибереться і так далі. fdfdfdfdfddffdfdfddf
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error impedit non unde eos tempora aliquid
                    sapiente dolorum sit culpa accusantium blanditiis eligendi expedita, eum voluptatum corrupti illo
                    doloremque hic ab.
                    Тут ключові тези з майбутнього оновлення.
                    Що саме можна буде зробити, що покращиться,
                    що прибереться і так далі. fdfdfdfdfddffdfdfddf
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error impedit non unde eos tempora aliquid
                    sapiente dolorum sit culpa accusantium blanditiis eligendi expedita, eum voluptatum corrupti illo
                    doloremque hic ab.
                    Тут ключові тези з майбутнього оновлення.
                    Що саме можна буде зробити, що покращиться,
                    що прибереться і так далі. fdfdfdfdfddffdfdfddf
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error impedit non unde eos tempora aliquid
                    sapiente dolorum sit culpa accusantium blanditiis eligendi expedita, eum voluptatum corrupti illo
                    doloremque hic ab.
                    Тут ключові тези з майбутнього оновлення.
                    Що саме можна буде зробити, що покращиться,
                    що прибереться і так далі. fdfdfdfdfddffdfdfddf
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error impedit non unde eos tempora aliquid
                    sapiente dolorum sit culpa accusantium blanditiis eligendi expedita, eum voluptatum corrupti illo
                    doloremque hic ab.
                    Тут ключові тези з майбутнього оновлення.
                    Що саме можна буде зробити, що покращиться,
                    що прибереться і так далі. fdfdfdfdfddffdfdfddf
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error impedit non unde eos tempora aliquid
                    sapiente dolorum sit culpa accusantium blanditiis eligendi expedita, eum voluptatum corrupti illo
                    doloremque hic ab.
                </div>
                <div @click="active=!active" class="b-news-main-story-content-detail">
                    {{ active ? $t('story.сollapse')  : $t('story.detailed')}}
                </div>
            </div>
            <div class="b-news-main-story-content-right__side">
                <nuxt-img class="b-news-main-story-content-right__side-desk" 
                    src="/images/news-main.svg" 
                    alt="" />
                <nuxt-img class="b-news-main-story-content-right__side-mobile" 
                    src="/images/f22.svg" 
                    alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        active: {
            type: Boolean,
            default: false,
        }
    }
}
</script>
<style lang="scss" scoped>
@import "assets/styles/base.scss";
.b {
    &-news-main-story {
        max-width: 800px;
        min-width: 600px;
        width: 100%;
        background: url('/images/main-story-background.svg') #262541;
        max-height: 243px;
        border-radius: 8px;
        background-repeat: no-repeat;
        @media(max-width: $md2) {
            min-width: 400px;
        }
        @media(max-width: $md4) {
            background: url('/images/main-story-background-moblo.svg') #262541;
            background-repeat: no-repeat;
            max-height: 430px;
            min-width: 300px;
        }
        @media(max-width: 350px) {
            min-width: 200px;
        }
        &-active {
            background: url('/images/main-story-active-background.svg') #262541;
            background-repeat: no-repeat;
            background-size: cover;
            max-height: none;
        }
        &-content {
            display: flex;
            height: 100%;
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
                &-active {
                    -webkit-line-clamp: inherit;
                }
                @media(max-width: $md4) {
                    max-width: none;
                }
            }
            &-detail {
                font-size: 14px;
                text-decoration: underline;
                color: #E2E2E9;
                @media(min-width: $md2) {
                &:hover {
                    cursor: pointer;
                }
            }
            }
        }
    }
}
</style>