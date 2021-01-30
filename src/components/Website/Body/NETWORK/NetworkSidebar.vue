<template>
  <aside>
    <b-row class="px-3">
      <b-col class="col-12">
        <b-row class="mb-4"> <SidebarMenuVue /></b-row>
      </b-col>
    </b-row>
  </aside>
</template>

<script>
import SidebarMenuVue from "./SidebarMenu.vue";
export default {
  name: "FeedSidebar",
  components: {
    SidebarMenuVue,
  },
};
</script>

<style>
</style>