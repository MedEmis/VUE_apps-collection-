<template>
  <b-col>
    <b-row class="jobs__wrapper">
      <b-col>
        <NoticeCardVue
          v-for="item in $attrs.data"
          :key="item.position"
          :data="item"
        />
      </b-col>
    </b-row>
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