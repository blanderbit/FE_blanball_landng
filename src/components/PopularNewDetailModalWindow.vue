<template>

    <div class="modal-wrapper" 
      v-if="active"
      :class="{ active: active }" 
      @click.self="$emit('closeModal')">
        <div class="modal-window">
            <section class="modal-window-top-side">
                <div class="modal-window-info">
                    <div class="main-info">
                        <p>Розділ: <span>«Популярне»</span></p>
                        <p>Переглядів: <span>{{ data.count_viewers }}</span> <span class="date">{{ formatedDate }}</span></p>
                    </div>
                </div>
                <div class="close-modal-window">
                    <img
                        @click="$emit('closeModal')" 
                        src="/images/cross.svg" 
                        alt="cross">
                </div>
            </section>
            <section class="modal-window-main-side">
                <div class="modal-window-main-side-content">
                    <div class="main-side-image">
                        <img :src="data.image">
                    </div>
                    <div class="main-side-title">
                        <span v-html="data.title"></span>
                    </div>
                </div>
                <div class="main-side-subtitle">
                    <span v-html="data.description"></span>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
    props: {
        active: {
            type: Boolean,
            default: false,
        },
        data: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const formatedDate = dayjs(props.data.created_at).format('MM.DD.YYYY')

        return { 
            formatedDate 
        }
    }
}

</script>

<style lang="scss" scoped>
@import "assets/styles/base.scss";
.modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0 0 0 / 53%);
    z-index: 10;
    display: none;
    justify-content: center;
    align-items: center;

    &.active {
        display: flex;
    }
}

.modal-window {
    width: 800px;
    padding: 16px;
    min-height: 600px;
    max-height: 800px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    background: #ffff;
    overflow: scroll;
    
    @media (max-width: 900px) {
        width: 650px;
    }

    @media (max-width: 800px) {
        height: 100%;
        width: 100%;
        margin-top: 200px;
    }

    &-top-side {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    &-main-side {
        flex: 1;
        height: 100%;
        padding: 12px;
        padding-right: 0px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
    }
}

.modal-window-info {
    display: flex;
}

.main-info {
    p {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #575775;
    }
    span {
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        color: #262541;
    }
}
.date {
    padding: 2px 0px 2px 12px;

    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #262541;
    padding: 2px 0px 2px 12px;
    border-left: 1px solid #DFDEED;
    margin-left: 15px;
}
.close-modal-window {
    img {
        width: 12px;
        height: 12px;
        cursor: pointer;
    }
}
.main-side-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #262541;
    max-width: 100%;
    word-break: break-word;
    background: #fff;
    padding: 12px 8px 0px 0px;
    border-radius: 0px 12px 0px 0px;
    padding-right: 20px;
    max-width: 500px;

    @media (min-width: 600px) {
        position: absolute;
        bottom: 20px;
        left: 0;
    }

    @media (max-width: 600px) {
        margin-bottom: 10px;
        padding: 0px;
    }

    @media (max-width: 900px) {
        font-size: 18px;
        line-height: 28px;
        max-width: 400px;
    }
}
.main-side-subtitle {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #262541;
    max-width: 100%;
    word-break: break-word;
    columns: 1;

    p {
        margin-bottom: 10px;
    }
}
.main-side-image {
    float: left;
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
    object-fit: cover;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    @media (max-width: 600px) {
        float: none;
        margin: 0 auto;
        margin-bottom: 10px;
    }
}

.modal-window-main-side-content {
    position: relative;
}
</style>