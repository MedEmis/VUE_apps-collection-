<template>
  <aside>
    <b-row class="px-3">
      <b-col class="col-12">
        <b-row v-if="this.$attrs.newConnections.data.length" class="mb-4">
          <SidebarMenuVue :newConnections="$attrs.newConnections"
        /></b-row>
      </b-col>
    </b-row>
  </aside>
</template>

<script>
import SidebarMenuVue from "./SidebarMenu.vue";
export default {
  name: "NetworkSidebar",
  components: {
    SidebarMenuVue,
  },
};
</script>

<style>
</style>