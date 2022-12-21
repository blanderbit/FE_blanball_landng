<template>
    <div class="b-news-main-block">
        <div class="b-news-main-block-content _container">
            <div class="b-news-main-block-content-left-side">
                <NewsMainStory />
                <ListOfStories />
            </div>
            <div class="b-news-main-block-content-right-side">
                <NewsEmailForm class="b-news-main-block-content-right-side-email-form" />
                <section class="b-news-main-block-content-right-side-versions">
                    <div class="b-news-main-block-content-right-side-versions-title">
                        Популярне
                    </div>
                    <ListOfVersions />
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
        min-height: 1200px;
        margin-bottom: 180px;

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