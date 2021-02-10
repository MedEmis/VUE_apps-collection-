<template>
  <keep-alive>
    <b-container fluid class="notices-container">
      <b-row class="notices-wrapper">
        <b-col class="pr-4" xl="3" lg="3" md="12" sm="12" xs="12">
          <NoticesSidebarVue />
        </b-col>
        <b-col class="pl-4" xl="9" lg="9" md="12" sm="12" xs="12">
          <NoticesMainVue
            :getNotifications="getNoticesBlock"
            :getWFetching="getNoticesBlockFetching"
          />
        </b-col>
      </b-row>
    </b-container>
  </keep-alive>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "NoticesBody",
  components: {
    NoticesMainVue: () =>
      import(/* webpackPrefetch: true */ "./NoticesMain.vue"),
    NoticesSidebarVue: () =>
      import(/* webpackPrefetch: true */ "./NoticesSidebar.vue"),
  },
  computed: mapGetters(["getNoticesBlock", "getNoticesBlockFetching"]),
  methods: {
    ...mapActions(["NoticesPageActions"]),
  },
  created() {
    this.NoticesPageActions();
  },
};
</script>

<style lang="scss">
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
