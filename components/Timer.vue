<template>
  <div class="b-timer__wrapper">
    <div class="b-timer__title">До запуску BlanBall залишилося:</div>
    <VueCountdown
      class="b-timer"
      :time="20 * 24 * 60 * 60 * 1000"
      v-slot="{ days, hours, minutes, seconds }"
    >
      <div class="b-timer-time__item">
        <span class="b-timer-time">{{ days }}</span>
        <span class="b-timer-text">Днів</span>
      </div>
      <div class="b-timer-time__item">
        <span class="b-timer-time">{{ hours }}</span>
        <span class="b-timer-text">Годин</span>
      </div>
      <div class="b-timer-time__item">
        <span class="b-timer-time">{{ minutes }}</span>
        <span class="b-timer-text">Хвилин</span>
      </div>
      <div class="b-timer-time__item">
        <span class="b-timer-time">{{ seconds }}</span>
        <span class="b-timer-text">Секунд</span>
      </div>
    </VueCountdown>
  </div>
</template>

<script>
import VueCountdown from "@chenfengyuan/vue-countdown";
export default {
  components: {
    VueCountdown,
  },
};
</script>

<style lang="scss">
@import "assets/styles/variables.scss";
.b-timer-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  color: #575775;

  @media (max-width: 500px) {
    font-size: 10px;
    line-height: 16px;
  }
}
.b-timer-time {
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
  text-align: center;
  color: #262541;
  position: relative;

  @media (max-width: 500px) {
    font-size: 24px;
    line-height: 36px;
  }

  &:not(:last-child)::after {
    content: ":";
    position: absolute;
    right: -50%;
    top: 6px; /* Add the unit px */
  }
}
.b-timer {
  display: flex;
  justify-content: center;
  gap: 40px;
}
.b-timer-time__item {
  display: flex;
  flex-direction: column;
}
.b-timer__title {
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #262541;

  @media (max-width: 500px) {
    font-size: 14px;
  }
}

.b-timer__wrapper {
  width: 415px;
  padding: 12px 20px 0px;
  height: 136px;
  left: 28px;
  top: 28px;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(56, 56, 251, 0.1);
  border-radius: 24px 24px 0px 0px;
  z-index: 20;

  @media (max-width: 500px) {
    width: 300px;
    height: 100px;
  }
}
</style>
