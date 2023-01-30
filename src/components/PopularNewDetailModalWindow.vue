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
                <div class="main-side-title">
                    {{ data.title }}
                </div>
                <div class="main-side-subtitle">
                    {{ data.description }}
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

    @media (max-width: 700px) {
        width: 550px;
    }

    @media (max-width: 600px) {
        width: 450px;
    }

    @media (max-width: 500px) {
        width: 350px;
    }

    @media (max-width: 400px) {
        width: 100%;
        height: 100%;
    }


    &-top-side {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    &-main-side {
        flex: 1;
        height: 100%;
        background: #F9F9FC;
        padding: 12px;
        border-radius: 8px;
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
    font-size: 17px;
    line-height: 26px;
    color: #262541;
}
.main-side-subtitle {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #262541;
    max-width: 100%;
    word-break: break-word;
}
</style>