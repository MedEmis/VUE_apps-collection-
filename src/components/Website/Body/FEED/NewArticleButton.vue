<template>
  <b-col class="col-12 bg-white p-4">
    <b-button
      class="font-weight-bold text-uppercase new-button"
      block
      type="button"
      variant="primary"
      >{{ $attrs.text }}</b-button
    >
  </b-col>
</template>

<script>
export default {
  name: "BigArticleButton.",
};
</script>

<style scoped>
.new-button {
  background: var(--blue-background);
}
</style>