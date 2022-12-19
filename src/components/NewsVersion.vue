<template>
    <div class="b-news-version">
        <div class="b-news-version-content">
            <div class="b-news-version-content-left__side">
                <img src="../assets/images/news-version-image.svg" alt="news-version-image">
            </div>
            <div class="b-news-version-content-main__side">
                <div class="b-news-version-content-main__side-top">
                    <div class="b-news-version-content-title">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse laudantium itaque expe
                    </div>
                    <div v-show="isNewVersion" class="b-news-version-content-new">
                        Нове
                    </div>
                </div>
                <div class="b-news-version-content-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse laudantium itaque expeffdfdfddfdf
                </div>
                <div class="b-news-version-content-version">
                    <div class="b-news-version-content-version-value">
                        Version 0.0.1
                    </div>
                    <div class="b-news-version-content-version-date">
                        10.04.2022
                    </div>
                    <img class="b-news-version-content-version-arrow" src="../assets/images/news-version-arrow.svg"
                        alt="news-version-content-version-arrow">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isNewVersion: Boolean
    }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/base.scss";
.b {
    &-news-version {
        &-content {
            padding: 16px;
            display: flex;
            align-items: top;
            max-height: 128px;
            background: #FFFFFF;
            box-shadow: 2px 2px 10px rgba(56, 56, 251, 0.1);
            border-radius: 6px;
            margin-top: 12px;

            &-left__side {
                width: 60px;
                height: 60px;
                border-radius: 6px;
            }

            &-main__side {
                display: flex;
                flex-direction: column;
                margin-left: 12px;

                &-top {
                    display: flex;
                    justify-content: space-between;
                }
            }

            &-new {
                font-weight: 500;
                font-size: 12px;
                line-height: 20px;
                text-align: center;
                color: #148581;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0px 8px;
                background: #D3F8F7;
                border: 1px solid #1AB2AD;
                border-radius: 4px;
            }

            &-title {
                font-weight: 700;
                font-size: 15px;
                line-height: 133%;
                max-width: 200px;
                color: #262541;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                margin-right: 10px;
            }

            &-subtitle {
                font-weight: 400;
                margin-top: 5px;
                font-size: 14px;
                line-height: 20px;
                color: #575775;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 270px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }

            &-version {
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                &-value {
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    color: #262541;
                    @media(max-width: 600px) {
                        font-size: 12px;
                        margin-left: -50px;
                    }
                }

                &-date {
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 167%;
                    text-align: right;
                    color: #575775;
                    margin-right: -40px;
                    @media(max-width: 650px) and (min-width: $md4) {
                        margin-right: 0px;
                    }
                }

                &-arrow {
                    @media(min-width: $md3) {
                        &:hover {
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
}
</style>