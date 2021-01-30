<template>
  <div class="mb-2 mt-2 col-xs-10 p-0 col-lg-8 container-fluid">
    <b-card bg-variant="dark" text-variant="white" :title="$attrs.body.title">
      <b-card-text v-text="$attrs.body.body" />
    </b-card>
  </div>
</template>

<script>
export default {
  name: "PostCardVue",
  data() {
    return {
      posts: null,
    };
  },
};
</script>

<style>
</style>