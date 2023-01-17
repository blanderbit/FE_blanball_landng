<template>
    <div class="b-versions-title" id="b-versions-title">
        Популярне
    </div>
    <div class="b-versions-list-of-versions">
        <NewsVersion v-for="(n, i) in 2" 
        :isNewVersion="i === 0" 
        :key="`news-version-${i}`" />
    </div>
</template>

<style lang="scss" scoped>
@import "assets/styles/base.scss";

.b {
    &-versions {
        &-title {
            font-family: 'Exo 2';
            font-weight: 700;
            font-size: 16px;
            line-height: 150%;
            color: #262541;
            margin-top: 25px;
        }

        &-list-of-versions {
            @media(max-width: $md3) {
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 15px;
                margin-bottom: 80px;
            }

            @media(max-width: 500px) {
                grid-template-columns: 1fr;
                margin-bottom: 100px;
                justify-items: center;
            }
        }
    }
}
</style>