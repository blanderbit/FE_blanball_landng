<template>
  <div class="b-input__input-component">
    <div 
      class="b-input__wrapper"
      :class="{'b-form-error': modelErrorMessage}"
      :style="inputWrapper"
    >
      <div 
        v-if="outsideTitle" 
        class="b-input__outer-title"
      >
        <span>{{ title }}</span>
      </div>
      <div
        v-if="insideTitle"
        class="b-input__inner-title"
        :style="{ width: titleWidth + 'px' }"
      >
        <span>{{ title }}</span>
      </div>
      <div 
        v-if="rightIcon?.length"
        class="b-input__icon" 
        @click="iconClickAction"
      >
        <img :src="rightIcon" alt="" />
      </div>
      <div 
        v-if="iconLeft.length" 
        class="b-input__icon-left"
      >
        <img :src="iconLeft" alt="" />
      </div>
      <slot 
        name="input" 
        :type="inputType"
        :placeholder="placeholder"
        :on="modelHandlers"
        :value="staticModelValue"
        :style="inputStyle"
        :disabled="isDisabled"
      >
        <input
          :type="inputType"
          :placeholder="placeholder"
          v-on="modelHandlers"
          :value="staticModelValue"
          :style="inputStyle"
          :disabled="isDisabled"
          @click="$emit('onClickAction', $event)"
          ref="input"
        />
      </slot>
    </div>
    <p v-if="modelErrorMessage" 
      :style="inputWrapper" 
      class="b-input__error-message">
      {{ t(modelErrorMessage) }}
    </p>
  </div>
</template>

<script>
import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { CustomModelWorker } from "../workers/custom.model.worker";

// TODO vue 3 fully, validate message
export default {
  name: 'InputComponent',
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    iconLeft: {
      type: String,
      default: '',
    },
    insideTitle: {
      type: Boolean,
      default: false,
    },
    outsideTitle: {
      type: Boolean,
      default: false,
    },
    modelValue: Object | String,
    title: {
      type: String,
      default: '',
    },
    placeholder: {
      type: [String, Number],
      default: '',
    },
    titleWidth: {
      type: Number,
      default: 108,
    },
    type: {
      type: String,
      default: 'text',
    },
    height: {
      type: Number,
      default: 40,
    },
    width: {
      type: Number,
    },
    name: {
      type: String,
      required: true,
    },
    immediate: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: 'aggressive',
    },
    backgroundColor: {
      type: String,
    }
  },
  emits: [
    'iconClick', 
    'onClickAction', 
    'sendInputCoordinates', 
    'update:modelValue'
  ],
  setup(props, {emit}) {
    const {
        modelValue: staticModelValue,
        modelErrorMessage,
        modelHandlers
    } = CustomModelWorker(props, emit);
    if(props.modelValue) {
      modelHandlers.value.input[0](props.modelValue);
      modelHandlers.value.input[1](props.modelValue, true);
    }
    watch(
      () => props.modelValue,
      () => {
        modelHandlers.value.input[0](props.modelValue);
        modelHandlers.value.input[1](props.modelValue, true);
      },
      {
        immediate: props.immediate
      }
    );
    const inputType = ref(null)
    const rightIcon = ref('')
    const input = ref(null)

    const inputStyle = computed(() => {
      return {
        'padding-left': 10 + 'px',
        'padding-right': rightIcon.value?.length ? '50px' : '10px',
        'background': props.backgroundColor ? props.backgroundColor : 'transparent'
      }
    })
    const inputWrapper = computed(() => {
      return {
        height: props.height ? props.height + 2 + 'px' : '100%',
        width: props.width ? props.width + 2 + 'px' : '100%',
      }
    })

    function iconClickAction() {
        emit('icon-click')
    }

    function resizeFunction() {
      emit('sendInputCoordinates', {
        x: input.value.parentNode.offsetLeft, 
        y: input.value.parentNode.offsetHeight
      })
    }

    onMounted(() => {
      rightIcon.value = props.icon
      window.addEventListener('resize', resizeFunction)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', resizeFunction)
    })

    return {
      iconClickAction,
      staticModelValue,
      modelErrorMessage,
      modelHandlers,
      inputType,
      rightIcon,
      inputStyle,
      inputWrapper,
      input
    }
  }
}
</script>

<style lang="scss" scoped>
.b-input__input-component {
  height: 100%;
  .b-input__wrapper {
    border: 1px solid #dfdeed;
    position: relative;
    border-radius: 6px;
    width: 100%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #262541;
    .b-input__icon {
      display: flex;
      height: 100%;
      width: 48px;
      position: absolute;
      top: 0;
      right: 0;
      // background: #fff;
      border-radius: 6px;
      cursor: pointer;
      img {
        margin: auto;
      }
    }
    .b-input__icon-left {
      display: flex;
      height: 100%;
      width: 40px;
      position: absolute;
      top: 0;
      left: 0;
      background: #fff;
      border-radius: 6px;
      cursor: pointer;
      img {
        margin: auto;
      }
    }
    .b-input__outer-title {
      padding: 0px 4px;
      position: absolute;
      left: 2px;
      top: -8px;
      background: #ffffff;
      color: #575775;
      border-radius: 4px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
    }
    .b-input__inner-title {
      display: table;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #575775;
      background: #fff;
      border-radius: 6px;
      span {
        display: table-cell;
        text-align: left;
        vertical-align: middle;
        border-right: 1px solid #dfdeed;
        padding-left: 12px;
      }
    }
    ::v-deep input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      border-radius: 6px;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      &[type='number'] {
        -moz-appearance: textfield;
      }
    }
  }
  .b-input__error-message {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #F32929;
  }
}
</style>