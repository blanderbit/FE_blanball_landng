<template>
    <div class="b-popular-new">
        <div class="b-popular-new-content">
            <section class="b-popular-new-left">
                <img :src="data.image">
            </section>
            <section class="b-popular-new-middle">
                <div class="b-popular-new-title">
                    {{ data.title }}
                </div>
                <div class="b-popular-new-subtitle">
                    {{ data.description }}
                </div>
            </section>
            <section class="b-popular-new-right">
                <div></div>
                <div class="b-popular-new-date">
                    {{ formatedDate }}
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs';
export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const formatedDate = dayjs(props.data.created_at).format('MM.DD.YYYY')
        return { formatedDate }
    }
}
</script>

<style lang="scss" scoped>
.b {
    &-popular-new {
        background: #FFFFFF;
        max-width: 400px;
        width: 100%;
        height: 100px;
        box-shadow: 2px 2px 10px rgba(56, 56, 251, 0.1);
        border-radius: 6px;
        margin: 20px 0px;
        &-content {
            padding: 16px 12px;
            display: flex;
            justify-content: space-between;
        }
        &-right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        &-middle {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        &-left {
            min-width: 68px;
            min-height: 68px;
            max-width: 68px;
            height: 68px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-right: 10px;
            img {
                border-radius: 6px;
            }
        }
        &-title {
            font-weight: 700;
            font-size: 15px;
            max-width: 220px;
            line-height: 20px;
            overflow: hidden;
            max-width: 100%;
            word-break: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            margin-bottom: 10px;
        }
        &-subtitle {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            max-width: 220px;
            color: #575775;
            overflow: hidden;
            max-width: 100%;
            word-break: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        &-date {
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            text-align: right;
            color: #575775;
            margin-left: 5px;
            margin-left: 10px;
        }
    }
}
</style>