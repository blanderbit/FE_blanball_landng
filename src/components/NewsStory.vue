<template>
    <div class="b-news-story" :class="{ 'b-news-story-active': active }">
        <div class="b-news-story-content">
            <section class="b-news-story-top-side">
                <div v-if="!active" class="b-news-story-top-side-title" :class="{ 'b-news-story-top-side-title-active': active }">
                    {{ data.title }}
                </div>
                <div v-if="!active" class="b-news-story-top-side-date">
                    {{ formatedDate }}
                </div>
            </section>
            <section class="b-news-story-main-side">
                <div class="b-news-story-main-side-body">
                    <a :href="data.image" target="_blank" v-if="active && data.image"
                        class="b-main-side-show-full-image">Переглянути зображення</a>
                    <div v-if="active && data.image" class="b-news-story-main-side-body-img">
                        <img :src="data.image" />
                    </div>
                    <div v-if="active" class="b-title-active">
                        <span>{{ data.title }}</span>
                    </div>
                    <p v-html="data.description" class="b-news-story-main-side-body-text"
                        :class="{ 'b-news-story-main-side-body-text-active': active }">
                    </p>
                </div>
            </section>
            <section class="b-news-story-bottom-side">
                <div @click="openStory()" class="b-news-story-bottom-side-detail">
                    <span>{{ active? $t('story.сollapse'): $t('story.detailed') }}</span>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'
import axios from "axios";

import { HTTP } from "../main";

export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
        active: {
            type: Boolean,
            required: false,
            default: true,
        }
    },
    emits: ["open-story"],
    setup(props, { emit }) {

        const openStory = async () => {
            try {
                if (!props.active) {
                    let request_data = await axios.get('http://www.geoplugin.net/json.gp')
                    await HTTP.post(`news/client/news/see/new/${props.data.id}`,
                        { ip: request_data.data.geoplugin_request })
                }
            }
            finally {
                emit('open-story')
            }
        }

        const formatedDate = dayjs(props.data.created_at).format('MM/DD/YYYY')
        return { 
            formatedDate,
            openStory 
        }
    }
}
</script>
<style lang="scss" scoped>
@import "assets/styles/variables.scss";
.b {
    &-title-active {
        font-weight: 700;
        font-size: 18px;
        line-height: 150%;
        color: #262541;
        word-break: break-word;
        max-width: 100%;
        margin-bottom: 15px;

        @media (max-width: 940px) {
            font-size: 18px;
        }
    }
    &-main-side-show-full-image {
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        color: #0072DB;
        padding: 4px 6px;
        background: #fff;
        border-radius: 4px;
    }

    &-news-story {
        flex-basis: 47%;
        margin-top: 10px;
        width: 100%;
        max-width: 750px;
        max-height: 170px;
        border-bottom: 1.5px solid #DFDEED;

        @media(max-width: 900px) {
            flex-basis: 100%;
        }

        @media(max-width: $md3) {
            flex-basis: 48%;
        }

        @media(max-width: 600px) {
            flex-basis: 100%;
        }
        &-content {
            display: flex;
            justify-content: space-between;
            height: 100%;
            flex-direction: column;
        }

        &-active {
            flex-basis: 100%;
            background: #F9F9FC;
            padding: 15px 10px;
            border-radius: 8px;
            max-height: none;
            margin-bottom: 15px;
        }
       
        &-top-side {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &-title {
                font-family: 'Exo 2';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 150%;
                color: #262541;
                margin-bottom: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 100%;
                word-break: break-word;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                
                &-active {
                }
            }

            &-date {
                font-weight: 500;
                font-size: 12px;
                line-height: 166%;
                color: #575775;
                margin-left: 20px;
                margin-top: -5px;
            }
        }

        &-main-side {
            &-body {
                position: relative;
                &-img {
                        width: 100%;
                        height: 300px;
                        margin-bottom: 20px;
                
                        img {
                            height: 100%;
                            width: 100%;
                            object-fit: cover;
                        }
                    }

                &-text {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 133%;
                    color: #262541;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    
                    max-width: 100%;
                    word-break: break-word;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;

                    @media(max-width: $md4) {
                        -webkit-line-clamp: 4;
                    }

                    &-active {
                        -webkit-line-clamp: inherit;
                        @media(max-width: $md4) {
                            column-count: 1;
                        }
                    }
                }
            }
        }

        &-bottom-side {
            &-detail {
                font-weight: 400;
                font-size: 14px;
                line-height: 133%;
                text-decoration-line: underline;
                color: #575775;
                margin: 10px 0px;

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