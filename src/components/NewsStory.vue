<template>
    <div class="b-news-story" :class="{ 'b-news-story-active': active }">
        <div class="b-news-story-content">
            <div>
                <section class="b-news-story-top-side">
                <div class="b-news-story-top-side-title" :class="{ 'b-news-story-top-side-title-active': active }">
                    {{ data.title }}
                </div>
                <div class="b-news-story-top-side-date">
                    {{ formatedDate }}
                </div>
            </section>
            <section class="b-news-story-main-side">
                <div class="b-news-story-main-side-body">
                    <p class="b-news-story-main-side-body-text"
                        :class="{ 'b-news-story-main-side-body-text-active': active }">
                        <img v-if="active && data.image" class="b-news-story-main-side-body-img" :src="data.image" />
                        <span v-html="data.description"></span>
                    </p>
                </div>
            </section>
            </div>
            <section class="b-news-story-bottom-side">
                <div @click="$emit('open-story')" class="b-news-story-bottom-side-detail">
                    <span>{{ active ? $t('story.сollapse')  : $t('story.detailed')}}</span>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'
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
    setup(props) {
        const formatedDate = dayjs(props.data.created_at).format('MM/DD/YYYY')
        return { formatedDate }
    }
}
</script>
<style lang="scss" scoped>
@import "assets/styles/base.scss";

.b {
    &-news-story {
        flex-basis: 45%;
        margin-top: 10px;
        width: 100%;
        max-width: 750px;
        border-bottom: 1.5px solid #DFDEED;

        @media(max-width: 900px) {
            flex-basis: 100%;
        }

        @media(max-width: $md3) {
            flex-basis: 45%;
        }

        @media(max-width: $md4) {
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
                &-img {
                    margin-bottom: 5px;
                    margin-right: 20px;
                    max-height: 300px;
                    max-width: 300px;
                    float: left;
                    border-radius: 4px;
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