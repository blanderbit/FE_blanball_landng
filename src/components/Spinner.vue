<template>
    <div v-show="active" class="b-spinner">
        <span class="b-loader"></span>
    </div>
</template>

<script>
export default {
    props: {
        active: {
            type: Boolean,
            required: true,
            default: false,
        }
    }
}
</script>


<style lang="scss" scoped>
.b {
    &-spinner {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }
    &-loader {
        width: 48px;
        height: 48px;
        border: 5px solid #148783;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
}
</style>