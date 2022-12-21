<template>
    <div class="b-news-story" :class="{ 'b-news-story-active': active }">
        <div class="b-news-story-content">
            <section class="b-news-story-top-side">
                <div class="b-news-story-top-side-title" :class="{ 'b-news-story-top-side-title-active': active }">
                    {{ data.title }}
                </div>
                <div class="b-news-story-top-side-date">
                    {{ active ? formatedDate.replaceAll(' ', '.') : formatedDate.replaceAll(' ', '/') }}
                </div>
            </section>
            <section class="b-news-story-main-side">
                <div class="b-news-story-main-side-body">
                    <div class="b-news-story-main-side-body-text"
                        :class="{ 'b-news-story-main-side-body-text-active': active }">
                        <img class="b-news-story-main-side-body-img" v-if="active"
                            src="../assets/images/new-body-image.svg" alt="">
                        {{ data.full_disc }}
                    </div>
                </div>
            </section>
            <section class="b-news-story-bottom-side">
                <div @click="active = !active" class="b-news-story-bottom-side-detail">
                    <span v-if="!active">Детальніше</span>
                    <span v-else>Cховати</span>
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
        const formatedDate = dayjs(props.data.created_at).format('MM DD YYYY')
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
        height: 100%;
        border-bottom: 1.5px solid #DFDEED;

        @media(max-width: $md4) {
            flex-basis: 100%;
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
            align-items: top;

            &-title {
                font-family: 'Exo 2';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 150%;
                width: 75%;
                color: #262541;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                margin-bottom: 10px;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;

                &-active {
                    width: 60%;
                    -webkit-line-clamp: 2;
                }
            }

            &-date {
                font-weight: 500;
                font-size: 12px;
                line-height: 166%;
                color: #575775;
                margin-left: 20px;
            }
        }

        &-main-side {
            &-body {
                &-img {
                    margin-bottom: 5px;
                    margin-right: 10px;
                    max-width: 300px;
                    max-height: 200px;
                    float: left;
                    @media(max-width: 900px) and (min-width: $md3) {
                        float: none;
                    }
                    @media(max-width: 550px) {
                        float: none;
                    }

                    @media(max-width: 350px) {
                        max-width: 250px;
                    }
                }

                &-text {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: #262541;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;

                    @media(max-width: $md3) {
                        -webkit-line-clamp: 3;
                    }

                    @media(max-width: $md4) {
                        -webkit-line-clamp: 4;
                    }

                    &-active {
                        display: block;
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
                line-height: 20px;
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