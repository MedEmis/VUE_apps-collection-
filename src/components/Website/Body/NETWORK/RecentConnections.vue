<template>
  <b-col v-if="$attrs.data" class="p-0 m-0">
    <b-row>
      <RecentConversationItemVue
        v-for="item in $attrs.data.slice().reverse()"
        :key="item.name"
        :data="item"
      />
    </b-row>
    <b-overlay :show="$attrs.recentFetching" no-wrap />
  </b-col>
</template>

<script>
import RecentConversationItemVue from "./RecentConversationItem.vue";
export default {
  name: "RecentConnections",
  components: {
    RecentConversationItemVue,
  },
};
</script>

<style>
</style>