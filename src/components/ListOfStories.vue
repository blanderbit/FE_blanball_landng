<template>
    <div class="b-list-of-stories">
        <NewsStory v-for="(n, i) in comp" :key="`news-story-${i}`" :data="n" />
    </div>
</template>

<script>
export default {
    setup() {
        const comp = computed(() => [
            {
                'title': '-webkit-line-clamp: 2;-webkit-line-clamp: 2;-webkit-line-clamp: 2;',
                'date': '06/02/2020',
                'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias nostrum quae exercitationem laborum unde aspernatur dolorum fuga architecto, quaerat cupiditate repellat maiores ducimus molestiae laudantium delectus quisquam explicabo deserunt.',
            },
            {
                'title': 'title',
                'date': '06/02/2020',
                'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias nostrum quae exercitationem laborum unde aspernatur dolorum fuga architecto, quaerat cupiditate repellat maiores ducimus molestiae laudantium delectus quisquam explicabo deserunt.',
            },
            {
                'title': 'title',
                'date': '06/02/2020',
                'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias nostrum quae exercitationem laborum unde aspernatur dolorum fuga architecto, quaerat cupiditate repellat maiores ducimus molestiae laudantium delectus quisquam explicabo deserunt.',
            }
        ])
        return { comp }
    }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/base.scss";
.b {
    &-list-of-stories {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 20px 10px 0px 10px;
        column-gap: 40px;
        margin-bottom: 20px;
        @media(max-width: $md4) {
            grid-template-columns: 1fr;
        }
    }
}
</style> 