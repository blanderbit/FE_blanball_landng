<template>
    <div class="b-list-of-stories">
        <NewsStory @click="openStory(i)" :active="activeStoryIndex === i" style="" v-for="(n, i) in comp" :key="`news-story-${i}`" :data="n" />
    </div>
</template>

<script>
export default {
    methods: {
        openStory(index){
            let activeStoryIndex = index
            return activeStoryIndex
        }
    },
    setup() {
        const comp = computed(() => [
            {
                'title': '-webkit-line-clamp: 2;-webkit-line-clamp: 2;-webkit-line-clamp: 2; -webkit-line-clamp: 2;-webkit-line-clamp: 2;-webkit-line-clamp: 2;-webkit-line-clamp: 2;-webkit-line-clamp: 2;-webkit-line-clamp: 2; -webkit-line-clamp: 2;-webkit-line-clamp: 2;-webkit-line-clamp: 2;-webkit-line-clamp: 2;-webkit-line-clamp: 2;-webkit-line-clamp: 2; -webkit-line-clamp: 2;-webkit-line-clamp: 2;-webkit-line-clamp: 2;',
                'date': '06/02/2020',
                'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias nostrum quae exercitationem laborum unde aspernatur dolorum fuga architecto, quaerat cupiditate repellat maiores ducimus molestiae laudantium delectus quisquam explicabo deserunt.',
            },
            {
                'title': 'title',
                'date': '06/02/2020',
                'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias nostrum quae exercitationem laborum unde aspernatur dolorum fuga architecto, quaerat cupiditate repellat maiores ducimus molestiae laudantium delectus quisquam explicabo deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias nostrum quae exercitationem laborum unde aspernatur dolorum fuga architecto, quaerat cupiditate repellat maiores ducimus molestiae laudantium delectus quisquam explicabo deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias nostrum quae exercitationem laborum unde aspernatur dolorum fuga architecto, quaerat cupiditate repellat maiores ducimus molestiae laudantium delectus quisquam explicabo deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias nostrum quae exercitationem laborum unde aspernatur dolorum fuga architecto, quaerat cupiditate repellat maiores ducimus molestiae laudantium delectus quisquam explicabo deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias nostrum quae exercitationem laborum unde aspernatur dolorum fuga architecto, quaerat cupiditate repellat maiores ducimus molestiae laudantium delectus quisquam explicabo deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias nostrum quae exercitationem laborum unde aspernatur dolorum fuga architecto, quaerat cupiditate repellat maiores ducimus molestiae laudantium delectus quisquam explicabo deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias nostrum quae exercitationem laborum unde aspernatur dolorum fuga architecto, quaerat cupiditate repellat maiores ducimus molestiae laudantium delectus quisquam explicabo deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias nostrum quae exercitationem laborum unde aspernatur dolorum fuga architecto, quaerat cupiditate repellat maiores ducimus molestiae laudantium delectus quisquam explicabo deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias nostrum quae exercitationem laborum unde aspernatur dolorum fuga architecto, quaerat cupiditate repellat maiores ducimus molestiae laudantium delectus quisquam explicabo deserunt.',
            },
            {
                'title': 'title',
                'date': '06/02/2020',
                'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, alias nostrum quae exercitationem laborum unde aspernatur dolorum fuga architecto, quaerat cupiditate repellat maiores ducimus molestiae laudantium delectus quisquam explicabo deserunt.',
            },
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
            },
        ])
        return { comp }
    }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/base.scss";
.b {
    &-list-of-stories {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px 10px 0px 10px;
        margin-bottom: 20px;
        @media(max-width: $md3) {
            padding: 40px 0px 0px 0px;
        }
        @media(max-width: $md4) {
            padding: 20px 0px 0px 0px;
        }
    }
}
</style> 