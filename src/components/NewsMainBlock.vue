<template>
    <div class="b-news-main-block">
        <div class="b-news-main-block-content _container">
            <div class="b-news-main-block-content-left-side">
                <NewsMainStory />
                <div class="b-news-main-block-content-left-side-stories">
                    <section class="b-news-main-block-content-left-side-stories-top-side">
                        <div class="b-news-main-block-content-left-side-stories-title">
                            Статті
                        </div>
                        <div class="b-news-main-block-content-left-side-stories-filter">
                            Спочатку нові
                        </div>
                    </section>
                    <ListOfStories/>
                </div>
            </div>
            <div class="b-news-main-block-content-right-side">
                <NewsEmailForm class="b-news-main-block-content-right-side-email-form" />
                <section class="b-news-main-block-content-right-side-versions">
                    <div class="b-news-main-block-content-right-side-versions-title">
                        Популярне
                    </div>
                    <ListOfVersions/>
                </section>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "assets/styles/base.scss";

.b {
    &-news-main-block {
        padding: 0px 20px;

        &-content {
            display: flex;
            margin-top: 30px;
            justify-content: space-between;

            @media(max-width: $md3) {
                display: block;
            }

            @media(max-width: $md3) {
                margin-top: -20px;
            }

            &-left-side {
                margin-right: 20px;
                max-width: 800px;

                @media(max-width: $md3) {
                    margin-right: 0px;
                }

                &-stories {
                    &-top-side {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 20px;
                        padding-bottom: 8px;
                        border-bottom: 1px solid #DFDEED;
                        @media(min-width: $md2) {
                            &:hover {
                                cursor: pointer;
                            }
                        }
                    }

                    &-title {
                        font-family: 'Exo 2';
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 150%;
                        color: #262541;
                    }

                    &-filter {
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 142%;
                        text-align: right;
                        color: #575775;
                    }
                }
            }

            &-right-side {
                &-versions {
                    &-title {
                        font-family: 'Exo 2';
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 150%;
                        color: #262541;
                        margin-top: 25px;
                    }
                }
            }
        }
    }
}
</style>