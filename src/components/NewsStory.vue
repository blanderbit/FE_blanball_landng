<template>
    <div class="b-news-story">
        <div class="b-news-story-content">
            <section class="b-news-story-top-side">
                <div class="b-news-story-top-side-title">
                   {{ data.title }}
                </div>
                <div class="b-news-story-top-side-date">
                    {{ data.date }}
                </div>
            </section>
            <section class="b-news-story-main-side">
                <div class="b-news-story-main-side-body">
                    <div class="b-news-story-main-side-body-text">
                        {{ data.description }}
                    </div>
                </div>
            </section>
            <section class="b-news-story-bottom-side">
                <div class="b-news-story-bottom-side-detail">
                    Детальніше
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true,
        }
    }
}
</script>
<style lang="scss" scoped>
@import "assets/styles/base.scss";

.b {
    &-news-story {
        display: flex;
        flex-direction: column;
        max-height: 150px;
        margin-bottom: 25px;
        height: 100%;
        &-content {
            border-bottom: 1px solid #DFDEED;
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
                max-width: 240px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
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