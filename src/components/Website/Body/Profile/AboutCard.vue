<template>
  <b-col class="p-0">
    <b-row>
      <b-card title="About">
        <b-card-text>
          {{ $attrs.data.about }}
        </b-card-text>
        <a href="#" class="link-block">See more</a>
      </b-card>
    </b-row>
    <b-overlay :show="$attrs.fetching" no-wrap></b-overlay>
  </b-col>
</template>

<script>
export default {
  name: "AboutCard",
};
</script>

<style></style>
