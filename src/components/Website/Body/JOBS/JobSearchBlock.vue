<template>
  <b-col>
    <b-row v-if="$attrs.data" class="jobs__wrapper">
      <b-col>
        <JobSearchItemVue
          v-for="item in $attrs.data.slice().reverse()"
          :key="item.position"
          :data="item"
        />
      </b-col>
    </b-row>
    <b-overlay :show="$attrs.fetching" no-wrap></b-overlay>
  </b-col>
</template>

<script>
import JobSearchItemVue from "./JobSearchItem.vue";
export default {
  name: "JobSearchBlock",
  components: {
    JobSearchItemVue,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.jobs {
  &__title {
    font-weight: 700;
    padding: 10px 0;
  }
  &__wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>