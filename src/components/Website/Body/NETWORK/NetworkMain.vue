<template>
  <main>
    <b-row class="profile-main-wrapper px-1">
      <b-col>
        <b-row class="mb-4"><ButtonGroupVue :options="buttonOptions" /> </b-row>
        <b-row class="mb-4"
          ><DividerVue
            textLeft="You have"
            :value="newConnections"
            textRight="New Connections"
          />
        </b-row>
        <b-row class="mb-4"
          ><NewConnectionsVue :options="buttonOptions" />
        </b-row>
        <b-row class="mb-4"><DividerVue textLeft="recent connections" /></b-row>
        <b-row class="mb-4"><RecentConnectionsVue /></b-row>
      </b-col>
    </b-row>
  </main>
</template>

<script>
import ButtonGroupVue from "../Profile/ButtonGroup.vue";
import DividerVue from "./Divider.vue";
import NewConnectionsVue from "./NewConnections.vue";
import RecentConnectionsVue from "./RecentConnections.vue";
export default {
  name: "FeedMain",
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