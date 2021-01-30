<template>
  <b-container fluid class="notices-container">
    <b-row class="notices-wrapper">
      <b-col class="pr-4" xl="3" lg="3" md="12" sm="12" xs="12">
        <NoticesSidebarVue />
      </b-col>
      <b-col class="pl-4" xl="9" lg="9" md="12" sm="12" xs="12">
        <NoticesMainVue />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import NoticesMainVue from "./NoticesMain.vue";
import NoticesSidebarVue from "./NoticesSidebar.vue";
export default {
  name: "NoticesBody",
  components: {
    NoticesMainVue,
    NoticesSidebarVue,
  },
};
</script>

<style lang="scss" >
.notices-container {
  flex: 1 1 auto;
}
.notices-wrapper {
  padding: 2rem 6rem;
  @media (max-width: 1200px) {
    padding: 2rem 4rem;
  }
  @media (max-width: 990px) {
    padding: 1rem;
  }
}
</style>