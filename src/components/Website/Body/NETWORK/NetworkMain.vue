<template>
  <main>
    <b-row class="profile-main-wrapper px-1">
      <b-col>
        <b-row class="mb-4"><ButtonGroupVue :options="buttonOptions" /> </b-row>
        <b-row v-if="$attrs.newConnections.data" class="mb-4"
          ><DividerVue
            textLeft="You have"
            :value="$attrs.newConnections.data.length"
            textRight="New Connections"
          />
        </b-row>
        <b-row class="mb-4">
          <NewConnectionsVue
            :data="$attrs.newConnections.data"
            :newFetching="$attrs.newFetching"
          />
        </b-row>
        <b-row class="mb-4">
          <DividerVue textLeft="recent connections" />
        </b-row>
        <b-row class="mb-4">
          <RecentConnectionsVue
            :data="$attrs.recentConnections.data"
            :recentFetching="$attrs.recentFetching"
          />
        </b-row>
      </b-col>
    </b-row>
    <b-overlay :show="$attrs.newFetching" no-wrap />
  </main>
</template>

<script>
import ButtonGroupVue from "../Profile/ButtonGroup.vue";
import DividerVue from "./Divider.vue";
import NewConnectionsVue from "./NewConnections.vue";
import RecentConnectionsVue from "./RecentConnections.vue";
export default {
  name: "NetworkMain",
  components: {
    ButtonGroupVue,
    DividerVue,
    NewConnectionsVue,
    RecentConnectionsVue,
  },
  data() {
    return {
      buttonOptions: ["Received", "sent"],
      newConnections: 2,
    };
  },
};
</script>

<style lang="scss">
</style>