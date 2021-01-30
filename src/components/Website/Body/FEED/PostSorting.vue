<template>
  <b-col>
    <b-row class="sort-block">
      <hr class="sort-block__line" />
      <div class="sort-block__input">
        <span class="sort-block__input_text">SORT BY:</span>
        <b-form-input
          list="input-list"
          id="input-with-list"
          class="sort-input"
        />
        <b-form-datalist id="input-list" :options="options" />
      </div>
      <hr class="sort-block__line" />
    </b-row>
  </b-col>
</template>

<script>
export default {
  data() {
    return {
      options: ["TRENDING", "LIKES", "COMMENTS"],
    };
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
    &_text {
      overflow-wrap: normal;
    }
  }
  &__input {
    flex: 0 0 22%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      min-width: 80px;
    }
    input {
      min-width: 140px;
      max-width: 150px;
    }
  }
}
.sort-input {
  background: none;
  border: none;
  font-weight: 700;
  color: rgb(33, 82, 216);
}
</style>