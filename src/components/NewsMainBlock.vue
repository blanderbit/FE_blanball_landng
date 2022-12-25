<template>
    <div class="b-news-main-block">
        <div class="b-news-main-block-content _container">
            <div class="b-news-main-block-content-left-side">
                <NewsMainStory />
                <ListOfStories />
            </div>
            <div class="b-news-main-block-content-right-side">
                <NewsEmailForm class="b-news-main-block-content-right-side-email-form" />
                <ListOfVersions />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "assets/styles/base.scss";

.b {
    &-news-main-block {
        padding: 0px 20px;
        min-height: 1000px;
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
                width: 110%;

                @media(max-width: $md3) {
                    width: 100%;
                    margin-right: 0px;
                }
            }
        }
    }
}
</style>