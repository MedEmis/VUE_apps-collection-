<template>
  <b-col class="bg-white hash-tag-box p-4">
    <b-row class="hash-tag-box__title pb-4">
      <b-col class="font-weight-bold text-uppercase">Followed hashtags</b-col>
    </b-row>
    <hr class="mt-0 mb-2" />
    <b-row class="p-2 hash-tag-box__wrapper">
      <b-button
        v-for="tag in hashTags"
        :key="tag"
        class="m-2 hash-tag-box__item"
        >{{ tag }}</b-button
      >
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "HashTags",
  components: {},
  data() {
    return {
      hashTags: [
        "#work",
        "#business",
        "#hr",
        "#userinterface",
        "#digital",
        "#userexperience",
        "#ux",
        "#ui",
        "#freelance",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.hash-tag-box {
  border-radius: 5px;
  &__wrapper {
    padding: 0 10% !important;
  }
  &__item {
    background: #e9f0f8;
    border: none;
    color: black;
  }
}
</style>