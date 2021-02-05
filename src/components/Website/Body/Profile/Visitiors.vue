<template>
  <b-col class="dashboard">
    <b-row class="dashboard-title"
      ><span class="dashboard-title_text">visitors</span>
      <a class="link-block" href="#">view all</a></b-row
    >
    <VisitorCardVue
      v-for="visitor in $attrs.data"
      :key="visitor.name"
      :data="visitor.user"
    />
    <b-overlay :show="$attrs.fetching" no-wrap></b-overlay>
  </b-col>
</template>

<script>
import VisitorCardVue from "./VisitorCard.vue";
export default {
  name: "Vistors",
  components: {
    VisitorCardVue,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.dashboard {
  background: #fff;
  padding-bottom: 3rem;
}
.dashboard-title {
  padding: 2rem;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &_text {
    font-weight: 700;
  }
}
</style>