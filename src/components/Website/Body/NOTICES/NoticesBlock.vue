<template>
  <b-col>
    <b-row class="jobs__wrapper">
      <b-col>
        <NoticeCardVue
          v-for="item in getNotices()"
          :key="item.time"
          :data="item"
        />
      </b-col> </b-row
    ><b-overlay :show="$attrs.fetching" no-wrap></b-overlay>
  </b-col>
</template>

<script>
import NoticeCardVue from "./NoticeCard.vue";
export default {
  name: "NoticesBlock",
  components: {
    NoticeCardVue,
  },
  data() {
    return {
      notices: this.$attrs.data,
    };
  },
  methods: {
    getNotices() {
      return this.$attrs.data
        .map((e) => e)
        .sort((a, b) => (+a.time.slice(0, 2) > +b.time.slice(0, 2) ? 1 : -1));
    },
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