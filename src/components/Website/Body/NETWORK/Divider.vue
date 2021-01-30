<template>
  <b-col>
    <b-row class="sort-block">
      <hr class="sort-block__line" />
      <div class="sort-block__input">
        <span v-if="$attrs.textLeft" class="sort-block__input_left">
          {{ $attrs.textLeft }}
        </span>
        <span v-if="$attrs.value" class="sort-block__input_value">{{
          $attrs.value
        }}</span>
        <span v-if="$attrs.textRight" class="sort-block__input_right">{{
          $attrs.textRight
        }}</span>
      </div>
      <hr class="sort-block__line" />
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "Divider",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.sort-block {
  display: flex;
  justify-content: center;
  align-items: center;
  &__line {
    flex: 1 0 auto;
  }
  &__input {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 80px;
    margin: 0 20px;
    text-transform: uppercase;
    &_left {
    }
    &_value {
      color: rgb(42, 139, 219);
      margin: 0 5px;
    }
    &_right {
      color: rgb(42, 139, 219);
    }
  }
}
</style>