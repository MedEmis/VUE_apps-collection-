<template>
  <b-container fluid class="network-container">
    <b-row class="network-wrapper">
      <b-col class="pr-4" xl="3" lg="3" md="12" sm="12" xs="12">
        <NetworkSidebarVue />
      </b-col>
      <b-col class="pl-4" xl="9" lg="9" md="12" sm="12" xs="12">
        <NetworkMainVue
          :getConnections="getWPconnections"
          :getWFetching="getWPfetching"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import NetworkMainVue from "./NetworkMain.vue";
import { mapGetters, mapActions } from "vuex";
import NetworkSidebarVue from "./NetworkSidebar.vue";
export default {
  name: "NetworkBody",
  components: {
    NetworkMainVue,
    NetworkSidebarVue,
  },
  computed: mapGetters([
    "getWPconnections",
    "getWPnotifications",
    "getWPfetching",
  ]),
  methods: {
    ...mapActions(["connectionsRequest", "notificationsRequest"]),
  },
  mounted() {
    if (!this.getWPconnections.lendth) {
      this.connectionsRequest();
    }
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
