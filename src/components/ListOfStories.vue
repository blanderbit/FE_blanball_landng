<template>
    <div class="b-stories">
        <section class="b-stories-top-side">
            <div class="b-stories-title" id="b-stories-title">
                {{ $t('listOfStories.stories') }}
            </div>
            <div @click="changeOrdering()"  class="b-stories-filter">
                {{ params.ordering === 'id' ? $t('listOfStories.filter') : $t('listOfStories.un-filter') }}
            </div>
        </section>
        <div class="b-stories-list-of-stories">
            <NewsStory  
                v-for="(n, i) in news" 
                :active="activeStoryIndex === i" 
                :key="`news-story-${i}`" 
                :data="n" />
        </div>
        <Spinner :active="isPromiseActive" />
        <div  v-if="countNewsOnNextPage > 0 && !isPromiseActive"  @click="getNewPage()" class="b-stories-load-more">
            {{ $t('listOfStories.show-more') }} {{ countNewsOnNextPage }} {{ $t('listOfStories.articles') }}
        </div>
    </div>
</template>


<script>
import { HTTP } from '../main'
import { ref } from 'vue'
export default {
    setup() {
        let news = ref([])
        let isPromiseActive = ref()
        let countNewsOnNextPage = ref()
        let params = {
            page: 1,
            ordering: 'id',
        }
        function changeOrdering() {
            news.value.length = 0
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
            getNews(params = params)
        }
        getNews({
            params: params
        })
        return { news, getNewPage, countNewsOnNextPage, isPromiseActive, changeOrdering, params }
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