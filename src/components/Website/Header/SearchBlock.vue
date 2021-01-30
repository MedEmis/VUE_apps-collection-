<template>
  <b-row class="search-block position-relative">
    <b-col class="col-2">
      <label for="input-default" class="">
        <b-button
          v-b-toggle.collapse-search
          size="sm"
          class="search-block__input"
          ><b-icon
            icon="search"
            scale="1.5"
            aria-hidden="true"
            variant="info"
            class="search-block__icon"
        /></b-button>
      </label>
    </b-col>
    <b-col class="col-10">
      <b-form-input
        id="input-default"
        size="lg"
        placeholder="Search"
        class="search-block__input"
        v-model="inputValue"
      ></b-form-input>
    </b-col>
    <SearchDropDownVue :value="inputValue" />
  </b-row>
</template>

<script>
import SearchDropDownVue from "./SearchDropDown.vue";
export default {
  name: "SearchBlock",
  components: {
    SearchDropDownVue,
  },
  data() {
    return {
      inputValue: null,
    };
  },
};
</script>

<style lang="scss">
.search-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__icon {
    cursor: pointer;
    color: #000;
    &:hover {
      color: rgb(17, 102, 212);
    }
  }

  &__input {
    border: 0;
    background: none;
  }
}
</style>