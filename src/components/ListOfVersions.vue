<template>
    <div class="b-list-of-versions">
        <NewsVersion v-for="(n, i) in 2" :isNewVersion="i === 0" :key="`news-version-${i}`" />
    </div>
</template>

<style lang="scss" scoped>
@import "assets/styles/base.scss";

.b {
    &-list-of-versions {
        @media(max-width: $md3) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 15px;
            margin-bottom: 80px;
        }
        @media(max-width: $md4) {
            grid-template-columns: 1fr;
            margin-bottom: 100px;
        }
    }
}
</style>