<template>
    <div class="b-stories">
        <PopularNewDetailModalWindow
        :active="newDetailModalOpened"
        :data="selectedNew"
        @closeModal="closeNewDetailModal"/>
        
        <section class="b-stories-top-side">
            <div class="b-stories-title" id="b-stories-title">
                Популярне
            </div>
        </section>
        <div class="b-stories-list-of-stories">
            <PopularNew  
                v-for="(n, i) in news" 
                :key="`news-story-${i}`" 
                @click="showNewDetailModal(n)"
                :data="n" />
        </div>
        <Spinner :active="isPromiseActive" />
    </div>
</template>


<script>
import { HTTP } from "../main";
import { ref } from 'vue'

export default {
    setup() {
        let news = ref([])
        let isPromiseActive = ref()
        const selectedNew = ref({})
        const newDetailModalOpened = ref(false)


        const showNewDetailModal = (data) => {
            selectedNew.value = data
            newDetailModalOpened.value = true
        }

        const closeNewDetailModal = () => {
            selectedNew.value = {}
            newDetailModalOpened.value = false
        }

        function getNews() {
            HTTP.get('news/client/news/list')
                .then((response) => {
                    isPromiseActive.value = true
                    news.value = response.data.results
                }).finally(() => {isPromiseActive.value = false})
        }
        getNews()
        return { 
            news, 
            isPromiseActive, 
            selectedNew,
            showNewDetailModal,
            newDetailModalOpened,
            closeNewDetailModal,
        }
    }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/base.scss";

.b {
    &-stories {
        &-list-of-stories {
                @media(max-width: $md3) {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }
                @media (max-width: 550px) {
                    justify-content: center;
                }
            }

        &-top-side {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            padding-bottom: 8px;

    
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
    }
}
</style>