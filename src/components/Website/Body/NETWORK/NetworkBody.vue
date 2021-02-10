<template>
  <keep-alive>
    <b-container fluid class="network-container">
      <b-row class="network-wrapper">
        <b-col class="pr-4" xl="3" lg="3" md="12" sm="12" xs="12">
          <NetworkSidebarVue :newConnections="getNewConnections" />
        </b-col>
        <b-col class="pl-4" xl="9" lg="9" md="12" sm="12" xs="12">
          <NetworkMainVue
            :newConnections="getNewConnections"
            :recentConnections="getRecentConnections"
            :newFetching="getNewConnectionsFetching"
            :recentFetching="getRecentConnectionsFetching"
          />
        </b-col>
      </b-row>
    </b-container>
  </keep-alive>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "NetworkBody",
  components: {
    NetworkMainVue: () => import("./NetworkMain.vue"),
    NetworkSidebarVue: () => import("./NetworkSidebar.vue"),
  },
  computed: mapGetters([
    "getNewConnections",
    "getRecentConnections",
    "getNewConnectionsFetching",
    "getRecentConnectionsFetching",
  ]),
  methods: {
    ...mapActions(["NetworkPageActions"]),
  },
  mounted() {
    this.NetworkPageActions();
    // if (!this.getRecentConnections.lendth) {
    // }
  },
};
</script>

<style lang="scss">
.network-container {
  flex: 1 1 auto;
}
.network-wrapper {
  padding: 2rem 6rem;
  @media (max-width: 1200px) {
    padding: 2rem 4rem;
  }
  @media (max-width: 990px) {
    padding: 1rem;
  }
}
</style>
