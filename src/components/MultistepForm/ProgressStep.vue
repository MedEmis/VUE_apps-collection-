<template>
  <ul class="form-progressbar">
    <template v-for="(value, name, index) in $attrs.value">
      <li
        class="form-progressbar__step"
        :id="index + 1"
        role="step"
        :class="[
          $attrs.step > index + 1 ? 'active' : '',
          $attrs.step === index + 1 ? 'pre-active' : '',
        ]"
        :key="index"
        @click="$attrs.progressStep(index + 1)"
      >
        Step {{ value }}
      </li>
      <li
        v-if="index !== Object.keys($attrs.value).length - 1"
        :id="index + 1"
        class="form-progressbar__line"
        :class="[
          $attrs.step > index + 1 ? 'active' : '',
          $attrs.currentProgress > index + 1 ? 'active' : '',
        ]"
        role="link"
        :key="index + 10"
      />
    </template>
  </ul>
</template>

<script>
export default {
  name: "ProgressStepVue",
};
</script>

<style lang="scss" scoped>
.form-progressbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  position: relative;
  user-select: none;
  cursor: pointer;
  li {
    list-style: none;
    font-size: 14px;
    font-weight: 700;
  }
  &__step {
    text-align: center;
    list-style: none;
    line-height: 7rem;
    color: rgb(122, 112, 112);
    flex: 0 0 51px;
    height: 50px;
    background: rgb(142, 163, 184);
    border-radius: 50%;
    z-index: 5;
    &.pre-active {
      border: 3px solid rgb(67, 82, 224);
      color: rgb(58, 161, 48);
    }

    &.active {
      background: rgb(70, 86, 223);
      color: rgb(58, 161, 48);
    }
  }
  &__line {
    height: 10px;
    width: 100px;
    flex: 1 1 auto;
    margin: 0 -5px;
    background: rgb(116, 118, 141);
    &.active {
      background: rgb(63, 78, 211);
    }
  }
}
</style>
