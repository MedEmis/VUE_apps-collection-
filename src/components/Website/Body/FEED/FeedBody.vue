<template>
  <b-container fluid class="network-container">
    <b-row class="profile-wrapper">
      <b-col class="pr-4" xl="9" lg="8" md="12" sm="12" xs="12">
        <FeedMainVue />
      </b-col>
      <b-col class="pl-4" xl="3" lg="4" md="12" sm="12" xs="12">
        <FeedSidebarVue />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FeedMainVue from "./FeedMain.vue";
import FeedSidebarVue from "./FeedSideBar";
export default {
  name: "FeedBody",
  components: {
    FeedMainVue,
    FeedSidebarVue,
  },
};
</script>

<style lang="scss">
.network-container {
  flex: 1 1 auto;
}
.profile-wrapper {
  padding: 2rem 6rem;
  @media (max-width: 1200px) {
    padding: 2rem 4rem;
  }
  @media (max-width: 990px) {
    padding: 1rem;
  }
}
</style>