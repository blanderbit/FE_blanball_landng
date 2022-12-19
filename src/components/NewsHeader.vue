<template>
    <header class="b-news-header">
        <div class="b-news-header-content _container">
            <HeaderMenu class="b-news-header-content-menu" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import "assets/styles/base.scss";
.b {
    &-news-header {
        &-content {
            &-menu {
                background: #FFFFFF;
                box-shadow: 2px 2px 10px rgba(56, 56, 251, 0.1);
                border-radius: 0px 0px 12px 12px;
                padding: 35px 0px 30px 30px;
                @media(max-width: $md3) {
                    box-shadow: none;
                    padding-right: 20px;
                }
                @media(max-width: $md4) {
                    padding-top: 15px;
                }
            }
        }
    }
}
</style>

