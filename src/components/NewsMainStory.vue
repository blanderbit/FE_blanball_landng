<template>
    <div class="b-news-main-story" :class="{'b-news-main-story-active': active}">
        <Loading :isLoading="loading"/>
        <div v-if="!loading" class="b-news-main-story-content">
            <div class="b-news-main-story-content-left__side">
                <div class="b-news-main-story-content-title">
                    {{ lastNews.title }}
                </div>
                <div
                    v-html="lastNews.description" 
                    class="b-news-main-story-content-subtitle" 
                    :class="{'b-news-main-story-content-subtitle-active': active}">
                </div>
                <div @click="active=!active" class="b-news-main-story-content-detail">
                    {{ active ? $t('story.сollapse')  : $t('story.detailed')}}
                </div>
            </div>
            <div class="b-news-main-story-content-right__side">
                <img class="b-news-main-image" 
                    :class="{'b-news-main-image-active': active}"
                    :src="lastNews.image" 
                    alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import { HTTP } from "../main";
import Loading from '../packages/blanball-loading-worker/Loading.vue'

export default {
    components: {
        Loading
    },
    props: {
        active: {
            type: Boolean,
            default: false,
        }
    },
    setup() {
        const lastNews = ref([])
        const loading = ref(false)

    
        function getLastNews() {
            loading.value = true
            HTTP.get('news/client/news/list')
                .then((response) => {
                    lastNews.value = response.data.results[0]
                }).finally(() => {loading.value = false})
        }
        getLastNews()
        return { 
            lastNews,
            loading,
        }
    }
}
</script>
<style lang="scss">
@import "assets/styles/variables.scss";
.b {
    &-news-main-image {
        object-fit: cover;
        object-position: top;
        border-left: 4px solid #FFFFFF;
        border-top: 4px solid #FFFFFF;
        border-radius: 156px 8px 8px 0px;

        &-active {
            border-radius: 0px 0px 0px 156px;
            border-top: none;
            border-bottom: 4px solid #FFFFFF;
        }

        @media(max-width: $md4) {
            display: none;
        }
    }
    &-news-main-story {
        max-width: 800px;
        min-width: 600px;
        position: relative;
        width: 100%;
        background: url('/images/main-story-background.svg') #262541;
        max-height: 238px;
        min-height: 238px;
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
            max-height:  none;
            height: inherit;
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

                width: 350px;
                max-height: 350px;

                @media(max-width: 850px) and (min-width: $md3) {
                    display: none;
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
                word-break: break-word;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;

                &-active {
                    -webkit-line-clamp: inherit;
                }
                @media(max-width: $md4) {
                    max-width: none;
                }
            }
            &-subtitle {
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                max-width: 320px;
                margin-bottom: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-word;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;

                p {
                    span {
                        color: #E2E2E9 !important;
                    }
                }

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