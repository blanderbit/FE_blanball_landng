<template>
    <div class="b-stories">
        <section class="b-stories-top-side">
            <div class="b-stories-title" id="b-stories-title">
                {{ $t('listOfStories.stories') }}
            </div>
            <div @click="changeOrdering()"  
                class="b-stories-filter">
                {{ params.ordering === 'id' 
                ? $t('listOfStories.filter') 
                : $t('listOfStories.un-filter') }}
            </div>
        </section>
        <div class="b-stories-list-of-stories">
            <NewsStory  
                v-for="(n, i) in news" 
                :active="i === activeStoryIndex"
                :key="`news-story-${i}`"
                @open-story="openStory(i)"
                :data="n" />
        </div>
        <Spinner :active="isPromiseActive" />
        <div  v-if="countNewsOnNextPage > 0 && !isPromiseActive" 
             @click="getNewPage()" 
             class="b-stories-load-more">
            {{ $t('listOfStories.show-more' , {count: countNewsOnNextPage}) }}
        </div>
    </div>
</template>


<script>
import { HTTP } from "../main";
import { ref } from 'vue'
export default {
    setup() {
        const route = useRoute()
        let timeOut
        const news = ref([])
        const isPromiseActive = ref()
        const countNewsOnNextPage = ref()
        const params = {
            page: 1,
            ordering: 'id',
        }
        const activeStoryIndex = ref(null)

        const openStory = (index) => {
            if (activeStoryIndex.value === index) {
                activeStoryIndex.value = null
            }else {
                activeStoryIndex.value = index
            }
        }

        watch(route, (route, previous) => {
            clearTimeout(timeOut)
            function searhNews() {
                news.value = []
                getNews({'search': route.query.search})
            }
            timeOut = setTimeout(searhNews, 500);
        })
        function changeOrdering() {
            news.value = []
            params.ordering === 'id' ? params.ordering = '-id' : params.ordering = 'id'
            getNews({page: 1, ordering: params.ordering})
        }
        function getNews(params = null) {
            HTTP.get('news/client/news/list', { params })
                .then((response) => {
                    isPromiseActive.value = true
                    news.value = news.value.concat(response.data.results)
                        countNewsOnNextPage.value = response.data.total_count - response.data.page_size * response.data.current_page
                    countNewsOnNextPage.value = countNewsOnNextPage.value > 10 ? 10 : countNewsOnNextPage.value
                }).finally(() => {isPromiseActive.value = false})
        }

        function getNewPage() {
            params.page += 1
            getNews(params)
        }
        getNews({
            params: params
        })
        return { 
            news, 
            getNewPage, 
            countNewsOnNextPage, 
            isPromiseActive, 
            changeOrdering, 
            params,
            activeStoryIndex,
            openStory,
        }
    }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/base.scss";

.b {
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

        &-load-more {
            font-weight: 400;
            font-size: 14px;
            display: flex;
            justify-content: center;
            line-height: 20px;
            text-decoration-line: underline;
            margin-bottom: 30px;
            color: #148581;

            @media(min-width: $md2) {
                &:hover {
                    cursor: pointer;
                }
            }

            @media(max-width: $md4) {
                justify-content: left;
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
}
</style>